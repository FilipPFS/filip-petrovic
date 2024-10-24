import { getProjectById, updateProject } from "@/lib/actions/project.actions";
import { IProject } from "@/lib/database/models/Project";
import React from "react";

const UpdateProject = async ({
  params: { id },
}: {
  params: { id: string };
}) => {
  const project: IProject = await getProjectById(id);

  console.log(project);
  return (
    <div className="w-full flex justify-center p-8 md:p-10 lg:p-20">
      <form action={updateProject} className="w-full flex flex-col gap-5">
        <input type="hidden" name="projectId" defaultValue={id} />
        <section className="flex flex-col md:flex-row justify-between gap-5">
          <input
            type="text"
            placeholder="Titre du projet"
            className=" bg-blue-950 input-field w-full md:w-[30%]"
            defaultValue={project.title}
            name="title"
            required
          />
          <input
            type="date"
            required
            className=" bg-blue-950 input-field w-full md:w-[30%]"
            name="formDate"
            defaultValue={
              project.createdDate
                ? project.createdDate.toString().split("T")[0]
                : undefined
            }
          />
          <input
            type="file"
            id="images"
            name="images"
            className=" bg-blue-950 input-field w-full md:w-[30%]"
            accept="image/*"
            multiple
          />
        </section>
        <section className="flex flex-col md:flex-row gap-5 items-center justify-between">
          <textarea
            placeholder="Description du projet"
            className=" bg-blue-950 textarea-field w-full h-[200px] md:w-[48%]"
            name="description"
            required
            defaultValue={project.description}
          />
          <textarea
            placeholder="Technologies utilisés"
            className=" bg-blue-950 textarea-field w-full h-[200px] md:w-[48%]"
            name="techList"
            required
            defaultValue={project.techTags?.join(" / ")}
          />
        </section>
        <section className="flex flex-col gap-5 md:flex-row items-center justify-between">
          <input
            type="text"
            placeholder="Lien du site direct"
            className=" bg-blue-950 input-field w-full md:w-[48%]"
            name="liveLink"
            defaultValue={project.liveLink}
          />
          <input
            type="text"
            placeholder="Lien du github projet"
            className=" bg-blue-950 input-field w-full md:w-[48%]"
            name="githubLink"
            defaultValue={project.githubLink}
          />
        </section>
        <button
          type="submit"
          className="w-full bg-blue-950 p-3 rounded-md font-semibold hover:bg-blue-800"
        >
          Ajouter Projet
        </button>
      </form>
    </div>
  );
};

export default UpdateProject;
