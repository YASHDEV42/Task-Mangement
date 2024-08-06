"use client";
import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { login } from "@/action/user";
import { useFormState, useFormStatus } from "react-dom";
const initialState = {
  message: null,
};
const LogIn = () => {
  const { pending } = useFormStatus();

  const [state, formAction] = useFormState(login as any, initialState);
  return (
    <main className=" h-screen w-4/5 mx-auto flex items-center justify-between flex-col">
      <div className=" h-1/2 w-full flex items-end justify-center">
        <h1 className="border-b-2 border-yellow-300">Login Page</h1>
      </div>
      <form
        action={formAction}
        className=" h-full w-full flex items-center justify-start flex-col gap-2 text-yellow-300 mt-10 md:mt-16 lg:mt-24"
      >
        <Label
          htmlFor="email"
          className=" text-lg  text-left lg:w-1/5 md:w-1/2 w-3/4"
        >
          Email :
        </Label>
        <Input
          id="email"
          placeholder="Enter your username"
          name="email"
          className=" mb-2 lg:w-1/5 md:w-1/2 w-3/4 text-black font-bold"
        />
        <Label htmlFor="password" className=" text-lg lg:w-1/5 md:w-1/2 w-3/4">
          Password :
        </Label>
        <Input
          id="password"
          type="password"
          name="password"
          placeholder="Enter your password"
          className=" mb-2 lg:w-1/5 md:w-1/2 w-3/4 text-black font-bold"
        />
        <p className=" text-red-600 font-bold text-lg">{state?.message}</p>
        <span className=" text-white">
          do you not have an account ?{"  "}
          <Link className=" text-yellow-300 underline" href="/register">
            Register
          </Link>
        </span>
        <Button type="submit" className="secondary-btn mt-5">
          {pending ? "Loading..." : "Log In"}
        </Button>
      </form>
    </main>
  );
};

export default LogIn;
