"use server";

import connectDB from "@/lib/db";
import { Task } from "@/models/Task";
import { Project } from "@/models/Project";
import { redirect } from "next/navigation";
import { ObjectId } from "mongoose";
import { revalidatePath } from "next/cache";

const createTask = async (slug: String, formData: FormData) => {
  console.log("slug:", slug);

  const title = formData.get("title") as string;
  console.log("title:", title);

  await connectDB();
  const thisProject = await Project.findOne({ slug });
  await Task.create({ title, project: thisProject._id });
  redirect(`/dashboard/${slug}`);
};

const getTasks = async (slug: String) => {
  await connectDB();
  const thisProject = await Project.findOne({ slug });
  const tasks = await Task.find({ project: thisProject._id }).sort({
    status: 1,
  });

  return tasks;
};
const getCompletedTasks = async (slug: String) => {
  await connectDB();
  const thisProject = await Project.findOne({ slug });
  const tasks = await Task.find({
    project: thisProject._id,
    status: "Completed",
  });

  return tasks;
};
const getInProgressTasks = async (slug: String) => {
  await connectDB();
  const thisProject = await Project.findOne({ slug });
  const tasks = await Task.find({
    project: thisProject._id,
    status: "In Progress",
  });

  return tasks;
};
const getPendingTasks = async (slug: String) => {
  await connectDB();
  const thisProject = await Project.findOne({ slug });
  const tasks = await Task.find({
    project: thisProject._id,
    status: "Pending",
  });

  return tasks;
};

const deleteTask = async (slug: String, _id: any) => {
  await connectDB();
  await Task.findByIdAndDelete(_id);
  redirect(`/dashboard/${slug}`);
};
const updateStatus = async (
  slug: string,
  _id: string, // Use string for MongoDB _id
  value: string
) => {
  try {
    await connectDB();

    await Task.findByIdAndUpdate(_id, { status: value });
    revalidatePath(`/dashboard/${slug}`);
  } catch (error) {
    console.error("Error updating task status:", error);
    throw new Error("Failed to update task status");
  }
};

export {
  createTask,
  getTasks,
  deleteTask,
  updateStatus,
  getCompletedTasks,
  getInProgressTasks,
  getPendingTasks,
};
