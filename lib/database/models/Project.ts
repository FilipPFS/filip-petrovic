import { Document, model, models, Schema, Types } from "mongoose";

export interface IProject {
  _id: string;
  owner: Types.ObjectId;
  title: string;
  description: string;
  liveLink?: string;
  githubLink?: string;
  createdDate?: Date;
  techTags?: string[];
  images?: string[];
}

export interface IMongooseProject extends Document {
  _id: string;
  owner: Types.ObjectId;
  title: string;
  description: string;
  liveLink?: string;
  githubLink?: string;
  createdDate?: Date;
  techTags?: string[];
  images?: string[];
}

const ProjectSchema = new Schema({
  owner: { type: Schema.Types.ObjectId, ref: "User" },
  title: { type: String, required: true },
  description: { type: String, required: true },
  liveLink: { type: String },
  githubLink: { type: String },
  createdDate: { type: Date },
  techTags: { type: [String], default: [] },
  images: { type: [String], default: [] },
});

const Project = models.Project || model("Project", ProjectSchema);

export default Project;
