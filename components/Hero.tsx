import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { auth } from "@/auth";
const HeroPage = async () => {
  const session = await auth();
  const user = session?.user;

  return (
    <section className="min-h-screen w-4/5 mx-auto bg-slate-950 flex justify-center items-center flex-col gap-4">
      <h1 className="text-yellow-300">
        YASH<span className="text-white">TASK</span> Task Maneger
      </h1>
      <p>Mange Your Tasks With Your Team</p>
      <div>
        <Button className="primary-btn mr-5 px-20">
          {user ? (
            <Link href="/dashboard">Dashboard</Link>
          ) : (
            <Link href="/login">Login</Link>
          )}
        </Button>
        <Button className="secondary-btn">
          <Link href="/register">About</Link>
        </Button>
      </div>
    </section>
  );
};

export default HeroPage;
