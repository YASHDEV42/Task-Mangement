import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI as string);
    console.log("MongoDB connected");
  } catch (err: any) {
    console.log(err.message);
    process.exit(1);
  }
};

export default connectDB;
