"use server";

import connectDB from "@/lib/db";
import { Project } from "@/models/Project";
import { auth } from "@/auth";
import { redirect } from "next/navigation";
import { User } from "@/models/User";

const createProject = async (prevState: FormData, formData: FormData) => {
  const title = formData.get("title") as string;
  const description = formData.get("description");
  let slug = "";
  if (title) {
    slug = title.toLowerCase().replace(/\s/g, "-");
  }

  try {
    await connectDB();
  } catch (err) {
    throw new Error("Could not connect to database");
  }
  const session = await auth();
  const user = session?.user;
  if (!user) {
    throw new Error("User not found");
  }

  const existingSlug = await Project.findOne({ slug });
  if (existingSlug) {
    return { message: "Project already exists" };
  }

  const { email } = user;

  const myUser = await User.findOne({ email });
  if (!myUser) {
    throw new Error("User not found");
  }

  const project = await Project.create({
    title,
    description,
    creator: myUser._id,
    slug,
  });
  redirect(`/dashboard`);
};

const getProjects = async (user: any) => {
  try {
    await connectDB();
  } catch (err) {
    throw new Error("Could not connect to database");
  }
  const { email } = user;
  const myUser = await User.findOne({ email });
  if (!myUser) {
    throw new Error("User not found");
  }
  const projects = await Project.find({ creator: myUser._id });
  if (!projects) {
    return false;
  }
  const data = JSON.parse(JSON.stringify(projects));
  return data;
};

const getProject = async (slug: string) => {
  try {
    await connectDB();
  } catch (err) {
    throw new Error("Could not connect to database");
  }
  const project = await Project.findOne({ slug });
  if (!project) {
    return false;
  }
  const data = JSON.parse(JSON.stringify(project));
  return data;
};

const deleteProject = async (slug: string) => {
  try {
    await connectDB();
  } catch (err) {
    throw new Error("Could not connect to database");
  }
  await Project.findOneAndDelete({ slug });
  redirect(`/dashboard`);
};

const updateProject = async (slug: string, formData: FormData) => {
  try {
    await connectDB();
  } catch (err) {
    throw new Error("Could not connect to database");
  }
  const title = formData.get("title") as string;
  const description = formData.get("description") as string;

  try {
    await Project.findOneAndUpdate({ slug }, { title, description });
  } catch (err) {
    throw new Error("Could not connect to database");
  }

  redirect(`/dashboard`);
};

export { createProject, getProjects, getProject, deleteProject, updateProject };
