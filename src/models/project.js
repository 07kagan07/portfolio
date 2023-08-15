import mongoose from "mongoose";

const ProjectSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    desc: { type: String, required: true },
    liveLink: { type: String, required: true },
    githubLink: { type: String, required: true },
  },
  { timestamps: true }
);

export default mongoose?.models?.Project ||  mongoose.model("Project", ProjectSchema);
