"use client";
import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { login } from "@/action/user";

const LogIn = () => {
  return (
    <main className=" h-screen w-4/5 mx-auto flex items-center justify-between flex-col py">
      <div className=" h-1/2 w-full flex items-center justify-center">
        <h1 className=" text-5xl font-bold tracking-wide border-b-2 border-yellow-300">
          Login Page
        </h1>
      </div>
      <form
        action={login}
        className=" h-full w-full flex items-center justify-start flex-col gap-2 text-yellow-300"
      >
        <Label htmlFor="email" className=" text-lg  text-left w-1/5">
          Email :
        </Label>
        <Input
          id="email"
          placeholder="Enter your username"
          name="email"
          className=" mb-2 w-1/5 text-black font-bold"
        />
        <Label htmlFor="password" className=" text-lg w-1/5">
          Password :
        </Label>
        <Input
          id="password"
          type="password"
          name="password"
          placeholder="Enter your password"
          className=" mb-2 w-1/5 text-black font-bold"
        />
        <span className=" text-white">
          do you not have an account ?{"  "}
          <Link className=" text-yellow-300 underline" href="/register">
            Register
          </Link>
        </span>

        <Button
          type="submit"
          className="text-base p-3 bg-slate-950 text-yellow-300 font-bold border-2 border-yellow-300  tracking-widest
                    hover:bg-slate-900 hover:border-yellow-400 hover:text-yellow-400"
        >
          Log In
        </Button>
      </form>
    </main>
  );
};

export default LogIn;
