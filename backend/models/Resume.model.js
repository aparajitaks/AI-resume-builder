import mongoose from "mongoose";

const resumeSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    title: String,
    summary: String,
    experience: Array,
    education: Array,
    skills: Array,
  },
  { timestamps: true }
);

export default mongoose.model("Resume", resumeSchema);
