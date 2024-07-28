import React from "react";
import { auth } from "@/auth";
import { redirect } from "next/navigation";
import SignUp from "@/components/SignUp";
const Register = async () => {
  const session = await auth();
  console.log(session?.user);

  const user = session?.user;
  if (user) {
    redirect("/");
  }

  return <SignUp />;
};

export default Register;
