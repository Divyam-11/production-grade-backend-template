import mongoose from "mongoose";
const connectDB = async () => {
  try {
    const connectionAttempt = await mongoose.connect(
      `${process.env.CONNECTION_STRING}/${process.env.DB_NAME}`
    );
    console.log("connected :)", connectionAttempt.connection.host);
  } catch (error) {
    console.log(error);
  }
};
export default connectDB;
