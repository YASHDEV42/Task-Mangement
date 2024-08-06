import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import Project from "./Project";
import { Project as ProjectType } from "@/types";
import { FaLongArrowAltLeft } from "react-icons/fa";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
const Projects: React.FC<{ projects: ProjectType[] }> = ({ projects }) => {
  console.log(projects);

  return (
    <main className="w-full pt-32 pb-5">
      <h2 className="text-7xl mb-8 border-b-4 border-yellow-300 inline-block">
        Projects :
      </h2>
      <div className="">
        <span>
          <FaLongArrowAltLeft size={30} className="inline" />
          drag
        </span>
        <Carousel className=" cursor-move z-0">
          <CarouselContent>
            {projects.map((project) => (
              <CarouselItem
                className="md:basis-1/2 lg:basis-1/3 scale-95"
                key={project.slug}
              >
                <Project project={project} />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
        {/* {projects.map((project) => (
          <Project key={project._id} project={project} />
        ))} */}
      </div>
      <Link href="/dashboard/create-project">
        <Button
          className="px-10 py-7 text-xl bg-yellow-300 text-slate-950 font-bold hover:scale-110
       hover:bg-yellow-200 transition duration-300 ease-in-out border-2 border-yellow-300 hover:border-yellow-400 mr-5 tracking-widest"
        >
          Create Project
        </Button>
      </Link>
    </main>
  );
};

export default Projects;
