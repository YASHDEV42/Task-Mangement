import React from "react";

import { auth } from "@/auth";
import { redirect } from "next/navigation";
import { getProjects } from "@/action/project";
import NoProjects from "@/components/NoProjects";
import Projects from "@/components/Projects";

const Dashboard = async () => {
  const session = await auth();
  const user = session?.user;
  if (!user) redirect("/login");

  const projects = await getProjects(user);

  if (projects.length === 0) {
    return <NoProjects />;
  }

  return <Projects projects={projects} />;
};

export default Dashboard;
