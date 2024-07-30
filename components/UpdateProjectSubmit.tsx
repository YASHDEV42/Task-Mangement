"use client";
import React from "react";
import { Button } from "./ui/button";
import { useFormStatus } from "react-dom";

const UpdateProjectSubmit = () => {
  const { pending } = useFormStatus();

  return (
    <>
      {pending ? (
        <Button
          disabled
          className="px-10 py-7 text-xl bg-yellow-300 text-slate-950 font-bold hover:scale-110
       hover:bg-yellow-200 transition duration-300 ease-in-out border-2 border-yellow-300 hover:border-yellow-400 mr-5 tracking-widest opacity-50" // Pass taskId explicitly
        >
          Updating...
        </Button>
      ) : (
        <Button
          className="px-10 py-7 text-xl bg-yellow-300 text-slate-950 font-bold hover:scale-110
       hover:bg-yellow-200 transition duration-300 ease-in-out border-2 border-yellow-300 hover:border-yellow-400 mr-5 tracking-widest"
        >
          Update
        </Button>
      )}
    </>
  );
};

export default UpdateProjectSubmit;
