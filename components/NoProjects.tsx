import React from "react";
import Link from "next/link";
import { Button } from "./ui/button";
const NoProjects = () => {
  return (
    <main className="w-full flex items-center justify-center flex-col">
      <h1 className="mb-5">You don not have any projects 😔</h1>
      <Link href="/dashboard/create-project">
        <Button className="primary-btn px-32 py-6">Create Project</Button>
      </Link>
    </main>
  );
};

export default NoProjects;
