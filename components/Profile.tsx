"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { usePathname } from "next/navigation";
interface UserProfile {
  // Define the type for the user data
  name: string;
  image: string;
}

interface ProfilePageProps {
  user: UserProfile; // Use the UserProfile type for the prop
}
const ProfilePage: React.FC<ProfilePageProps> = ({ user }) => {
  const { name, image } = user;
  const pathname = usePathname();

  return (
    <main className=" w-100 mx-auto flex justify-start items-start flex-col gap-5 mr-10">
      {image ? (
        <Image
          className="rounded-full"
          src={image}
          width={75}
          height={75}
          alt={name}
        />
      ) : (
        <Image
          className="rounded-full"
          src="/user.png"
          width={75}
          height={75}
          alt={name}
        />
      )}
      <h1 className="text-4xl">{name}</h1>
      <span className=" border-b-2 border-gray-50 h-1 w-full"></span>
      <nav className="w-full flex flex-col items-start justify-center gap-0">
        <Link href="/dashboard">
          {pathname.startsWith("/dashboard") ? (
            <Button className="text-2xl bg-transparent bg-slate-800 hover:bg-slate-800 mb-3  p-8   underline">
              dashboard
            </Button>
          ) : (
            <Button className="text-2xl bg-transparent  bg-slate-900 hover:bg-slate-800 mb-3 p-8 ">
              dashboard
            </Button>
          )}{" "}
        </Link>
        <Link href="/dashboard/settings">
          {pathname === "/dashboard/settings" ? (
            <Button className="text-2xl bg-transparent bg-slate-800 hover:bg-slate-800 p-8  underline">
              settings
            </Button>
          ) : (
            <Button className="text-2xl bg-transparent bg-slate-900 hover:bg-slate-800 p-8 ">
              settings
            </Button>
          )}
        </Link>
      </nav>
    </main>
  );
};

export default ProfilePage;
