const express = require("express");
const User = require("./mongo"); // Import the User model
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get("/", cors(), (req, res) => {});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const check = await User.findOne({ email: email });
    if (check) {
      res.json("exist");
    } else {
      res.json("notexist");
    }
  } catch (e) {
    res.json("notexist");
  }
});

app.post("/registration", async (req, res) => {
  const { firstName, lastName, email, password } = req.body;
  try {
    const userExist = await User.findOne({ email: email });

    if (userExist) {
      res.json("exist");
    } else {
      const newUser = new User({
        firstName,
        lastName,
        email,
        password,
      });

      await newUser.save(); // Save the new user to the database
      res.json("notexist");
    }
  } catch (e) {
    console.error(e);
    res.json("notexist");
  }
});

app.listen(5000, () => {
  console.log("port connected");
});
