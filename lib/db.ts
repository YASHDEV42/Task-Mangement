import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://yahya:dpdnakhj5455@atlascluster.ar7anmb.mongodb.net/task-mangement?retryWrites=true&w=majority&appName=AtlasCluster"
    );
    console.log("MongoDB connected");
  } catch (err: any) {
    console.log(err.message);
    process.exit(1);
  }
};

export default connectDB;
