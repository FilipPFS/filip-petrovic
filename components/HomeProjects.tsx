import { getRecentProjects } from "@/lib/actions/project.actions";
import { IProject } from "@/lib/database/models/Project";
import React from "react";
import ProjectCard from "./ProjectCard";

const HomeProjects = async () => {
  const projects: IProject[] = await getRecentProjects();

  return (
    <div className="flex flex-col gap-8 items-center">
      <h1 className="text-3xl font-bold">Projets récents</h1>
      <div className="flex flex-col gap-5 md:flex-row items-center md:items-start md:justify-between">
        {projects?.map((project) => (
          <ProjectCard project={project} page="home" />
        ))}
      </div>
    </div>
  );
};

export default HomeProjects;
