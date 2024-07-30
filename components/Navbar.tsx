import { auth, signOut } from "@/auth";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";

const Navbar = async () => {
  const sessino = await auth();
  const user = sessino?.user;
  if (user) {
    return (
      <nav className="h-[7vh] mx-auto w-4/5 flex justify-between items-center flex-row fixed top-0 left-[10vw]">
        <h3 className=" text-4xl">
          <Link href="/dashboard">
            <span className="text-yellow-300">YASH</span>TASK
          </Link>
        </h3>
        <ul className="flex justify-center items-center flex-row gap-5 text-xl">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/dashboard">Dashboard</Link>
          </li>
          <form
            action={async () => {
              "use server";
              await signOut();
            }}
          >
            <Button
              type="submit"
              className="text-base p-3 bg-slate-950 text-yellow-300 font-bold border-2 border-yellow-300  tracking-widest
          hover:bg-slate-900 hover:border-yellow-400 hover:text-yellow-400"
            >
              Log Out
            </Button>
          </form>
        </ul>
      </nav>
    );
  }
  return (
    <nav className="h-[7vh] mx-auto w-4/5 flex justify-between items-center flex-row fixed top-0 left-[10vw]">
      <h3 className=" text-4xl">
        <span className="text-yellow-300">YASH</span>TASK
      </h3>
      <ul className="flex justify-center items-center flex-row gap-5 text-xl">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/register">Register</Link>
        </li>
        <li>
          <Link href="/login">Log In</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
