import { getRecentProjects } from "@/lib/actions/project.actions";
import { IProject } from "@/lib/database/models/Project";
import Image from "next/image";
import React from "react";

const Projects = async () => {
  const projets: IProject[] = await getRecentProjects();
  const first = projets[0];

  return (
    <div>
      <div>
        <Image
          src={first.images![0]}
          alt="project image"
          width={400}
          height={200}
          className="w-full h-[150px] md:h-[200px] lg:h-[300px] object-cover"
        />
      </div>
    </div>
  );
};

export default Projects;
