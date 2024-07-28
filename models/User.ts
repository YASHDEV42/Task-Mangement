import mongoose from "mongoose";

const userScema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    select: false,
  },
  role: {
    type: String,
    default: "user",
  },
  image: {
    type: String,
  },
  authProviderId: {
    type: String,
  },
});

export const User = mongoose.models?.User || mongoose.model("User", userScema);
