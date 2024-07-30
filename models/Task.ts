import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
    enum: ["Completed", "Pending", "In Progress"],
    default: "Pending",
  },
  project: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Project",
  },
});

export const Task = mongoose.models?.Task || mongoose.model("Task", taskSchema);
