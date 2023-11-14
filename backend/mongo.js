const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/heal_database")
  .then(() => {
    console.log("mongodb connected");
  })
  .catch(() => {
    console.log('failed');
  });

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }
});

const User = mongoose.model("User", userSchema);

module.exports = User;
