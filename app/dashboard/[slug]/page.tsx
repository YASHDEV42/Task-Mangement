import React from "react";
import { getProject } from "@/action/project";
import ProjectDetails from "@/components/ProjectDetails";
import {
  getTasks,
  getCompletedTasks,
  getInProgressTasks,
  getPendingTasks,
} from "@/action/task";
interface ProjectPageParams {
  slug: string;
}

const ProjectPage = async ({ params }: { params: ProjectPageParams }) => {
  const project = await getProject(params.slug);
  if (!project) {
    return <div>Project not found</div>;
  }

  const tasks = await getTasks(params.slug);
  const completedTasks = await getCompletedTasks(params.slug);
  const inProgressTasks = await getInProgressTasks(params.slug);
  const pendingTasks = await getPendingTasks(params.slug);

  return (
    <ProjectDetails
      project={project}
      tasks={tasks}
      completedTasks={completedTasks}
      inProgressTasks={inProgressTasks}
      pendingTasks={pendingTasks}
    />
  );
};

export default ProjectPage;
