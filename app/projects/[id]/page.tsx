import ProjectImages from "@/components/ProjectImages";
import CustomButton from "@/components/ui/custom-button";
import CustomLink from "@/components/ui/custom-link";
import CustomTag from "@/components/ui/custom-tag";
import { Button } from "@/components/ui/moving-border";
import { getProjectById } from "@/lib/actions/project.actions";
import { IProject } from "@/lib/database/models/Project";
import { formatDate } from "@/lib/utils";
import Image from "next/image";
import React from "react";
import { FaCalendar } from "react-icons/fa6";

type Props = {
  params: { id: string };
};

const SingleProject = async ({ params: { id } }: Props) => {
  const project: IProject = await getProjectById(id);

  return (
    <div className="flex flex-col gap-10 pb-20">
      <section>
        <Image
          src={project.images![0]}
          alt="project image"
          width={400}
          height={200}
          className="w-full h-[150px] md:h-[200px] lg:h-[300px] object-cover"
        />
      </section>
      <section className="py-4 px-6 sm:px-16 flex flex-col gap-8">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center justify-between">
          <h1 className="text-4xl font-bold">{project.title}</h1>
          <span className="flex items-center gap-4 text-lg">
            <FaCalendar /> Publié le{" "}
            {formatDate(project.createdDate!.toString())}
          </span>
        </div>
        <p className="whitespace-pre-line w-full md:w-[70%]">
          {project.description}
        </p>
        <div className="flex flex-col gap-3">
          <h2 className="text-lg font-semibold">Liens du projets</h2>
          <div className="flex items-center gap-3">
            {project.liveLink && (
              <CustomLink text="Site en direct" link={project.liveLink} />
            )}
            {project.githubLink && (
              <CustomLink text="Lien Github" link={project.githubLink} />
            )}
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <h2 className="text-lg font-semibold">
            Technologies & Librairies utilisés
          </h2>
          <div className="flex items-center flex-wrap gap-3">
            {project.techTags?.map((techTag) => (
              <Button duration={5000} className="py-[8px] px-4">
                {techTag}
              </Button>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <h2 className="text-lg font-semibold">Images du site</h2>
          <ProjectImages images={project.images} />
        </div>
      </section>
    </div>
  );
};

export default SingleProject;
