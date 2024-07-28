import { auth } from "@/auth";
import { redirect } from "next/navigation";
import React from "react";

const Profile = async () => {
  const session = await auth();
  const user = session?.user;
  if (!user) redirect("/login");
  console.log(user);
  return <h1 className=" text-7xl">Wellcommmeeeee {user?.name}</h1>;
};

export default Profile;
