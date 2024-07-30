import React from "react";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import UpdateProjectSubmit from "@/components/UpdateProjectSubmit";
import { updateProject } from "@/action/project";
interface ProjectPageParams {
  slug: string;
}

const page = ({ params }: { params: ProjectPageParams }) => {
  const slug = params.slug;
  console.log(slug);

  const updateProjectWithSlug = updateProject.bind(null, slug);
  return (
    <form
      action={updateProjectWithSlug}
      className="w-full pl-10 text-black font-bold text-lg"
    >
      <Label htmlFor="title" className="text-4xl text-yellow-300">
        Project Name :{" "}
      </Label>
      <Input
        id="title"
        name="title"
        className="w-full text-xl py-6  bg-white focus:border-slate-400 focus-visible:ring-offset-0 focus-visible:border-[3px] mb-10"
      />
      <Label htmlFor="discription" className="text-4xl text-yellow-300">
        Description:{" "}
      </Label>
      <Textarea
        name="description"
        id="discription"
        className="w-full text-xl py-3 bg-white focus:border-slate-400 focus-visible:ring-offset-0 focus-visible:border-[3px] mb-5"
      />

      <UpdateProjectSubmit />
      <Link href="/dashboard">
        <Button className="text-lg p-3 bg-red-600 hover:bg-red-700 transition ">
          Cancel
        </Button>
      </Link>
    </form>
  );
};

export default page;
