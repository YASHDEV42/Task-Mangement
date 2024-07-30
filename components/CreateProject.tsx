"use client";

import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { createProject } from "@/action/project";
import Submit from "@/components/Submit";
import { useFormState } from "react-dom";
const initialState = {
  message: null,
};
const CreateProject = () => {
  const [state, formAction] = useFormState(createProject as any, initialState);

  return (
    <form
      className="w-full pl-10 text-black font-bold text-lg"
      action={formAction}
    >
      <Label htmlFor="title" className="text-4xl text-yellow-300">
        Project Name :
      </Label>
      <Input
        id="title"
        name="title"
        className="w-full text-xl py-6  bg-white focus:border-slate-400 focus-visible:ring-offset-0 focus-visible:border-[3px] mb-10"
      />
      <Label htmlFor="discription" className="text-4xl text-yellow-300">
        Description:
      </Label>
      <Textarea
        name="description"
        id="discription"
        className="w-full text-xl py-3 bg-white focus:border-slate-400 focus-visible:ring-offset-0 focus-visible:border-[3px] mb-5"
      />
      {
        // @ts-ignore
        state.message && <p className="text-red-500 text-lg">{state.message}</p>
      }
      <Submit />
    </form>
  );
};

export default CreateProject;
