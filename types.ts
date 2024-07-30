import { ObjectId } from "mongoose";
export type Project = {
  title: string;
  description: string;
  creator: string;
  tasks: string[];
  slug: string;
};
// Compare this snippet from models/Task.ts:

export type Task = {
  title: string;
  status: string;
  project: string;
  _id: ObjectId;
};
// Compare this snippet from models/User.ts:

export type User = {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  role: string;
  image: string;
  authProviderId: string;
};
// Compare this snippet from pages/api/project.ts:
