import React from "react";
import Link from "next/link";
import { Button } from "./ui/button";
const NoProjects = () => {
  return (
    <main className="w-full flex items-center justify-center flex-col">
      <h2 className="text-4xl mb-5">You don not have any projects 😔</h2>
      <Link href="/dashboard/create-project">
        <Button
          className="px-10 py-7 text-xl bg-yellow-300 text-slate-950 font-bold hover:scale-110
       hover:bg-yellow-200 transition duration-300 ease-in-out border-2 border-yellow-300 hover:border-yellow-400 mr-5 tracking-widest"
        >
          Create Project
        </Button>
      </Link>
    </main>
  );
};

export default NoProjects;
