"use client";
import React from "react";
import { createTask } from "@/action/task";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Submit from "@/components/Submit";
interface ProjectPageParams {
  slug: string;
}

const page = ({ params }: { params: ProjectPageParams }) => {
  const slug = params.slug;

  const createTaskWithSlug = createTask.bind(null, slug);
  return (
    <form action={createTaskWithSlug} className="w-full">
      <Label htmlFor="title" className="text-4xl text-yellow-300">
        Task Name :
      </Label>
      <Input
        id="title"
        name="title"
        className="w-full text-xl font-bold text-black py-6 bg-white focus:border-slate-400 focus-visible:ring-offset-0 focus-visible:border-[3px] mb-5"
      />

      <Submit />
    </form>
  );
};

export default page;
