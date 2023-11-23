const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://stn:cpphealpassword@heal-cpp-cluster.dnlkylp.mongodb.net/heal_database?retryWrites=true&w=majority")
  .then(() => {
    console.log("mongodb connected");
  })
  .catch(() => {
    console.log('failed');
  });

const exerciseSchema = new mongoose.Schema({
  name: String,
  sets: String,
  reps: String,
  weight: String,
});

const workoutSchema = new mongoose.Schema({
  title: String,
  exercises: [exerciseSchema],
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
  },
  selectedGender: String,
  heightFt: String,
  heightIn: String,
  weight: String,
  birthday: String,
  workouts: [workoutSchema],  // Include a reference to Workout schema
});

const User = mongoose.model("User", userSchema);

module.exports = User;
