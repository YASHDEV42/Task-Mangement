import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { auth } from "@/auth";
const HeroPage = async () => {
  const session = await auth();
  const user = session?.user;

  return (
    <section className="min-h-screen w-4/5 mx-auto bg-slate-950 flex justify-center items-center flex-col gap-4">
      <h1 className=" text-7xl font-bold text-yellow-300">
        YASH<span className="text-white">TASK</span> Task Maneger
      </h1>
      <h3 className=" text-3xl">Mange Your Tasks With Your Team</h3>
      <div>
        <Button
          className="px-10 py-7 text-xl bg-yellow-300 text-slate-950 font-bold hover:scale-110
       hover:bg-yellow-200 transition duration-300 ease-in-out border-2 border-yellow-300 hover:border-yellow-400 mr-5 tracking-widest"
        >
          {user ? (
            <Link href="/dashboard">Dashboard</Link>
          ) : (
            <Link href="/login">Login</Link>
          )}
        </Button>
        <Button
          className="px-10 py-7 text-xl bg-slate-950 text-yellow-300 font-bold hover:scale-110
       hover:bg-slate-900 transition duration-300 ease-in-out border-2 border-yellow-300 hover:border-yellow-400 hover:text-yellow-400 tracking-widest"
        >
          <Link href="/register">About</Link>
        </Button>
      </div>
    </section>
  );
};

export default HeroPage;
