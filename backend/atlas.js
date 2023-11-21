const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    // Replace the following URI with your MongoDB Atlas connection URI
    const dbURI = "mongodb+srv://stn:cpphealpassword@heal-cpp-cluster.dnlkylp.mongodb.net/?retryWrites=true&w=majority";
    await mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log("Connected to MongoDB Atlas");
  } catch (error) {
    console.error("MongoDB connection error:", error);
  }
};

module.exports = connectDB;
