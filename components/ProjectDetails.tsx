"use client";

import React from "react";
import { Button } from "./ui/button";
import { deleteTask } from "@/action/task";
import { Project, Task } from "@/types";
import Link from "next/link";
import Delete from "./Delete";
import SetTaskStatus from "./SetTaskStatus";

const ProjectDetails: React.FC<{
  project: Project;
  tasks: Task[];
  completedTasks: Task[];
  inProgressTasks: Task[];
  pendingTasks: Task[];
}> = ({ project, tasks, completedTasks, inProgressTasks, pendingTasks }) => {
  const { title, description, slug } = project;
  const [showDescription, setShowDescription] = React.useState<boolean>(false);
  const [displayedTasks, setDisplayedTasks] = React.useState<any | null>(tasks);
  console.log(displayedTasks);

  return (
    <main className="w-full mt-32">
      <h2 className="text-7xl mb-8 border-b-4 border-yellow-300 inline-block">
        {title}
      </h2>
      <br />
      <p className="pb-2">
        {showDescription ? (
          description
        ) : (
          <span className="text-gray-500">Click to see description</span>
        )}
      </p>
      <Button
        onClick={() => setShowDescription((prev) => !prev)}
        className="text-lg opacity-90  bg-slate-900 p-6 text-center hover:bg-slate-700"
      >
        {showDescription ? "Hide Description" : "Show Description"}
      </Button>

      <h3 className="text-4xl mt-6">Tasks</h3>
      <ul className="mt-4">
        {/* <Button onClick={displayCompletedTasks}>Completed</Button>
        <Button onClick={displayInProgressTasks}>In Progress</Button>
        <Button onClick={displayPendingTasks}>Pending</Button> */}

        {tasks?.map(
          (
            task // Remove the :any type annotation
          ) => (
            <li
              key={task._id.toString()}
              className="text-xl flex justify-between items-center flex-row w-full bg-slate-900 p-3 mb-4 rounded-md "
            >
              <span>{task.title}</span>
              <div className="flex justify-center items-center flex-row gap-5">
                {task.status === "Completed" ? (
                  <span className="h-4 w-4 rounded-full bg-green-500 "></span>
                ) : (
                  <></>
                )}
                {task.status === "Pending" ? (
                  <span className="h-4 w-4 rounded-full bg-gray-500 "></span>
                ) : (
                  <></>
                )}
                {task.status === "In Progress" ? (
                  <span className="h-4 w-4 rounded-full bg-yellow-500 "></span>
                ) : (
                  <></>
                )}
                <SetTaskStatus task={task} slug={slug} />
                <form
                  action={async () => {
                    await deleteTask(slug, task._id);
                  }}
                >
                  <Delete />
                </form>
              </div>
            </li>
          )
        )}
      </ul>
      <Link href={`/dashboard/${slug}/add-task`}>
        <Button className="text-lg p-6 bg-slate-950 border-2 border-yellow-300 text-yellow-300 mt-3">
          Add Task
        </Button>
      </Link>
    </main>
  );
};

export default ProjectDetails;
