"use server";

import connectDB from "@/lib/db";
import { User } from "@/models/User";
import { redirect } from "next/navigation";
import bcrypt from "bcryptjs";
import { signIn, signOut } from "@/auth";

const Signout = async () => {
  "use server";
  await signOut();
};
const googleLogin = async () => {
  await signIn("google");
};

const login = async (prevState: any, formData: FormData) => {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string | null;
  if (!email || !password) {
    return { message: "Please fill in all fields" };
  }
  const user = await User.findOne({ email });
  if (!user) {
    return { message: "User not found" };
  }
  const valid = user ? await bcrypt.compare(password, user.password) : false;
  if (!valid) {
    return { message: "Password is incorrect" };
  }

  try {
    await signIn("credentials", {
      redirect: false,
      callbackUrl: "/",
      email,
      password,
    });

    redirect("/");
  } catch (err) {
    console.log(err);
  }
};

const register = async (prevState: any, formData: FormData) => {
  const firstName = formData.get("firstName") as string;
  const lastName = formData.get("lastName") as string;
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  if (!firstName || !lastName || !email || !password) {
    return { message: "Please fill in all fields" };
  }

  if (password.length < 6) {
    return { message: "Password must be at least 6 characters" };
  }

  if (password !== formData.get("confirmPassword")) {
    return { message: "Passwords do not match" };
  }

  await connectDB();

  const existingUser = await User.findOne({ email });
  if (existingUser) {
    return { message: "User already exists" };
  }
  const hashedPassword = await bcrypt.hash(password, 10);
  await User.create({ firstName, lastName, email, password: hashedPassword });
  redirect("/login");
};

export { register, login, googleLogin, Signout };
