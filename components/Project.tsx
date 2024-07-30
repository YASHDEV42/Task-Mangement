"use client";
import React from "react";
import Link from "next/link";
import { Project as ProjectType } from "@/types";
import { Button } from "./ui/button";
import { SlOptionsVertical } from "react-icons/sl";
import { deleteProject } from "@/action/project";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Project: React.FC<{ project: ProjectType }> = ({ project }) => {
  const submitHandler = async () => {
    if (!confirm("Are you sure you want to delete this project?")) {
      return;
    }
    try {
      await deleteProject(project.slug);
    } catch (error) {
      console.error("Error deleting project:", error);
    }
  };
  return (
    <div className=" h-36 flex justify-between items-start flex-col bg-slate-900 p-3 mb-4 rounded-md transition hover:bg-slate-800 hover:scale-105">
      <div className="flex justify-between items-start w-full">
        <h3 className="text-4xl select-none mb-3 ">{project.title}</h3>
        <DropdownMenu>
          <DropdownMenuTrigger>
            <SlOptionsVertical
              size={25}
              className=" focus:ring-offset-0 focus:border-0 mt-1"
            />
          </DropdownMenuTrigger>
          <DropdownMenuContent className="bg-black border-slate-800 text-white">
            <DropdownMenuLabel>{project.title}</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="focus:bg-slate-800 focus:text-white">
              <Link href={`/dashboard/${project.slug}/edit-project`}>
                <button>Edit Project</button>
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem className="focus:bg-slate-800 focus:text-white">
              <button
                onClick={submitHandler}
                className="bg-inherit hover:bg-inherit focus-visible:bg-inherit"
              >
                Delete Project
              </button>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <Link href={`/dashboard/${project.slug}`}>
        <Button className="text-lg p-3 text-black font-bold bg-yellow-300 hover:bg-yellow-400 transition">
          View Project
        </Button>
      </Link>
    </div>
  );
};

export default Project;
