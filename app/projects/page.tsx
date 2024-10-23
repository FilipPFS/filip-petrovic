import Contact from "@/components/Contact";
import Pagination from "@/components/Pagination";
import ProjectCard from "@/components/ProjectCard";
import Search from "@/components/Search";
import SelectTag from "@/components/SelectTag";
import { getProjects, getRecentProjects } from "@/lib/actions/project.actions";
import { IProject } from "@/lib/database/models/Project";
import { SearchParamProps } from "@/types";
import React from "react";

const Projects = async ({ searchParams }: SearchParamProps) => {
  const page = Number(searchParams.page) || 1;
  const searchText = (searchParams.query as string) || "";
  const category = (searchParams.category as string) || "";

  const projectsData: { data: IProject[]; totalPages: number } | undefined =
    await getProjects({
      query: searchText,
      category,
      limit: 6,
      page,
    });

  if (!projectsData) {
    return <div>No projects data</div>;
  }

  const projects = projectsData?.data;

  return (
    <div className="px-4 sm:px-14 sm:p-12 py-14 flex flex-col gap-6">
      <section className="w-full flex flex-col sm:flex-row gap-2 sm:gap-4 justify-center sm:h-[50px]">
        <Search />
        <SelectTag />
      </section>
      <h1 className="text-3xl font-bold text-center mt-6">Mes projets</h1>
      {(searchParams.query || searchParams.category) && (
        <span>
          Les résultats pour:{" "}
          <span className="text-gray-300">
            {searchParams.query && searchParams.query}{" "}
            {searchParams.category && searchParams.category} ({projects?.length}{" "}
            résultats trouvés)
          </span>
        </span>
      )}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
        {projects?.map((project) => (
          <ProjectCard project={project} page="projects" />
        ))}
      </div>
      {projectsData.totalPages > 1 && (
        <Pagination page={page} totalPages={projectsData!.totalPages} />
      )}
    </div>
  );
};

export default Projects;
