import React from "react";

const UpdateProject = ({ params: { id } }: { params: { id: string } }) => {
  return (
    <div className="w-full flex justify-center p-8 md:p-10 lg:p-20">
      <form className="w-full flex flex-col gap-5">
        <section className="flex flex-col md:flex-row justify-between gap-5">
          <input
            type="text"
            placeholder="Titre du projet"
            className=" bg-blue-950 input-field w-full md:w-[30%]"
            name="title"
            required
          />
          <input
            type="date"
            required
            className=" bg-blue-950 input-field w-full md:w-[30%]"
            name="formDate"
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
          />
          <textarea
            placeholder="Technologies utilisés"
            className=" bg-blue-950 textarea-field w-full h-[200px] md:w-[48%]"
            name="techList"
            required
          />
        </section>
        <section className="flex flex-col gap-5 md:flex-row items-center justify-between">
          <input
            type="text"
            placeholder="Lien du site direct"
            className=" bg-blue-950 input-field w-full md:w-[48%]"
            name="liveLink"
          />
          <input
            type="text"
            placeholder="Lien du github projet"
            className=" bg-blue-950 input-field w-full md:w-[48%]"
            name="githubLink"
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
