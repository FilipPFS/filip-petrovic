"use server";

import { getSessionUser } from "@/utils/getSessionUser";
import connectToDb from "../database";
import cloudinary from "../cloudinary";
import Project from "../database/models/Project";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

type ProjectObject = {
  title: string;
  description: string;
  liveLink: string;
  githubLink: string;
  createdDate: Date;
  techTags: string[];
  images?: string[];
};

export const addNewProject = async (formData: FormData) => {
  try {
    await connectToDb();

    const owner = await getSessionUser();

    if (!owner || owner.user.email !== "filippetrovicfr04@gmail.com") {
      throw new Error("Unathorized.");
    }

    const images = formData
      .getAll("images")
      .filter(
        (image): image is File => image instanceof File && image.name !== ""
      );

    const formDate = formData.get("formDate") as string;
    const title = formData.get("title") as string;
    const description = formData.get("description") as string;
    const liveLink = formData.get("liveLink") as string;
    const githubLink = formData.get("githubLink") as string;
    const createdDate = new Date(formDate);
    const techList = formData.get("techList") as string;
    const techTags = techList.split("/").map((tech) => tech.trim());

    const projectObject: ProjectObject = {
      title,
      description,
      liveLink,
      githubLink,
      createdDate,
      techTags,
    };

    const imageUrls = [];

    for (const imageFile of images) {
      const imageBuffer = await imageFile.arrayBuffer();
      const imageArray = Array.from(new Uint8Array(imageBuffer));
      const imageData = Buffer.from(imageArray);

      const imageBase64 = imageData.toString("base64");

      const result = await cloudinary.uploader.upload(
        `data:image/png;base64,${imageBase64}`,
        {
          folder: "filip-petrovic",
        }
      );

      imageUrls.push(result.secure_url);
    }

    projectObject.images = imageUrls;

    const newProject = await Project.create(projectObject);

    revalidatePath("/", "layout");
  } catch (error: unknown) {
    console.error(error);
  }

  redirect("/projects");
};

export const getRecentProjects = async () => {
  try {
    await connectToDb();
    const recentProjects = await Project.find()
      .sort({ createdDate: -1 })
      .limit(3);

    if (!recentProjects) {
      throw new Error("No projects found");
    }

    return JSON.parse(JSON.stringify(recentProjects));
  } catch (error) {
    console.error(error);
  }
};
