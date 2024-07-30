"use client";
import React from "react";
import { Button } from "./ui/button";
import { useFormState, useFormStatus } from "react-dom";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import Link from "next/link";
import Image from "next/image";
import { googleLogin, register } from "@/action/user";

const initialState = {
  message: null,
};
const Submit = () => {
  const { pending } = useFormStatus();
  const [state, formAction] = useFormState(register, initialState);

  return (
    <main className=" h-screen w-4/5 mx-auto flex items-center justify-center flex-col">
      <div className="w-full mx-auto flex items-center justify-center flex-col">
        <div className=" h-1/2 w-full flex items-between justify-center">
          <h1 className=" text-5xl font-bold tracking-wide border-b-2 border-yellow-300">
            Register Page
          </h1>
        </div>
        <form
          action={formAction}
          className=" h-full w-full flex items-center justify-center flex-col gap-2 text-yellow-300 mt-16 mb-5"
        >
          <div className="flex items-center justify-between flex-row gap-4 w-1/2">
            <div className="w-full">
              <Label htmlFor="firstName" className=" text-lg  text-left w-1/4">
                First Name :
              </Label>
              <Input
                id="firstName"
                placeholder="Enter your username"
                name="firstName"
                className=" mb-2 w-full text-black font-semibold text-lg"
              />
            </div>
            <div className=" w-full">
              <Label htmlFor="lastName" className=" text-lg  text-left w-1/4">
                Last Name :
              </Label>
              <Input
                id="lastName"
                placeholder="Enter your username"
                name="lastName"
                className=" mb-2 w-full text-black font-semibold text-lg"
              />
            </div>
          </div>
          <Label htmlFor="email" className=" text-lg  w-1/2">
            Email :
          </Label>
          <Input
            id="email"
            type="email"
            name="email"
            placeholder="Enter your email"
            className=" mb-2  w-1/2 text-black font-semibold text-lg"
          />
          <div className="flex items-center justify-between flex-row gap-4 w-1/2">
            <div className="w-full">
              <Label htmlFor="password" className=" text-lg w-full">
                Password :
              </Label>
              <Input
                id="password"
                type="password"
                name="password"
                placeholder="Enter your password"
                className=" mb-2  w-full text-black font-semibold text-lg"
              />
            </div>
            <div className="w-full">
              <Label htmlFor="password" className=" text-lg w-full">
                Confirm Password :
              </Label>
              <Input
                id="password"
                type="password"
                name="confirmPassword"
                placeholder="Enter your password"
                className=" mb-2  w-full text-black font-semibold text-lg"
              />
            </div>
          </div>
          <span className=" text-white">
            Already have an account ?{"  "}
            <Link className=" text-yellow-300 underline" href="/login">
              Log In
            </Link>
          </span>
          <p className=" text-red-600 font-bold text-lg">{state?.message}</p>
          {pending ? (
            <Button
              type="submit"
              disabled
              className="text-lg p-6 bg-slate-950 text-yellow-300 font-bold border-2 border-yellow-300  tracking-widest
              hover:bg-slate-900 hover:border-yellow-400 hover:text-yellow-400"
            >
              Registering...
            </Button>
          ) : (
            <Button
              type="submit"
              className="text-lg p-6 bg-slate-950 text-yellow-300 font-bold border-2 border-yellow-300  tracking-widest
                hover:bg-slate-900 hover:border-yellow-400 hover:text-yellow-400"
            >
              Register
            </Button>
          )}
        </form>
      </div>
      <h3 className="text-xl font-semibold  mb-5">OR</h3>
      <form action={googleLogin}>
        <Button
          className="text-lg w-72 p-6 flex-row flex justify-between items-center"
          type="submit"
        >
          <Image
            src="/google-icon.png"
            alt="Picture of the author"
            width={30}
            height={30}
          />
          <span>Sign Up with Google</span>
        </Button>
      </form>
    </main>
  );
};

export default Submit;
