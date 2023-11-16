const express = require("express");
const User = require("./mongo"); // Import the User model
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get("/", cors(), (req, res) => {});

//LOGIN LOGIC
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

//REGISTRATION DB SAVING
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
      res.json({ status: "notexist", userId: newUser._id });
    }
  } catch (e) {
    console.error(e);
    res.json("notexist");
  }
});

// New route to handle questionnaire data
app.post("/questionnaire", async (req, res) => {
  const { userId, selectedGender, heightFt, heightIn, weight, birthday } = req.body;
  
  try {
    const user = await User.findById(userId);
    if (user) {
      // Update the user's questionnaire data
      user.selectedGender = selectedGender;
      user.heightFt = heightFt;
      user.heightIn = heightIn;
      user.weight = weight;
      user.birthday = birthday;
      
      await user.save();
      res.json("success");
    } else {
      res.status(404).json({ error: "User not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Endpoint to get user details by userId
app.get("/user/:userId", async (req, res) => {
  const userId = req.params.userId;

  try {
    const user = await User.findById(userId);
    if (user) {
      // Return user details
      res.json({
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        selectedGender: user.selectedGender,
        heightFt: user.heightFt,
        heightIn: user.heightIn,
        weight: user.weight,
        birthday: user.birthday,
      });
    } else {
      res.status(404).json({ error: "User not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});


app.listen(5000, () => {
  console.log("port connected");
});
