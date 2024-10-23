"use client";

import { IProject } from "@/lib/database/models/Project";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import CustomButton from "./ui/custom-button";
import { truncateText } from "@/lib/utils";
import { FaArrowTrendUp } from "react-icons/fa6";
import AOS from "aos";
import "aos/dist/aos.css";

type Props = {
  project: IProject;
  page: string;
};

const ProjectCard = ({ project, page }: Props) => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      once: true, // Whether animation should happen only once - while scrolling down
    });
  }, []);

  return (
    <div
      data-aos={page === "home" ? "fade-left" : "fade-in"}
      className={`${
        page === "home" && "md:w-[31%]"
      } flex flex-col self-stretch sm:max-w-[400px] w-full gap-5 p-5 bg-[#0f0f36] hover:bg-[#0a0a24] rounded-md border-2 border-opacity-25 hover:border-opacity-40 cursor-pointer border-blue-100 hover:border-blue-300`}
    >
      <Image
        src={project.images![0]}
        alt="project image"
        width={400}
        height={200}
        className="rounded-md w-full"
      />
      <div className="flex flex-col gap-4">
        <section className="flex items-center justify-between">
          <h1 className="text-2xl font-semibold max-w-[50%] sm:max-w-[55%] text-blue-100 truncate">
            {project.title}
          </h1>
          <CustomButton
            text={"Voir le projet"}
            link={`/projects/${project._id}`}
          />
        </section>
        <section className="flex flex-col gap-3">
          <p>{truncateText(project.description)}</p>
          {project.liveLink ? (
            <a
              href={project.liveLink}
              target="_blank"
              className="self-end flex items-center gap-3 text-base font-semibold relative lightLiveLink"
            >
              <FaArrowTrendUp /> Voir en direct
            </a>
          ) : (
            <a
              href={project.githubLink}
              target="_blank"
              className="self-end flex items-center gap-3 text-base font-semibold relative lightLiveLink"
            >
              <FaArrowTrendUp /> Le lien Github
            </a>
          )}
        </section>
      </div>
    </div>
  );
};

export default ProjectCard;
