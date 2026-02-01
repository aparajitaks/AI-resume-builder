import Resume from "../models/Resume.model.js";

// CREATE resume
export const createResume = async (req, res) => {
  try {
    const resume = await Resume.create({
      userId: req.user.id,
      ...req.body,
    });

    res.status(201).json(resume);
  } catch (error) {
    res.status(500).json({ message: "Failed to create resume" });
  }
};

// GET all resumes for logged-in user
export const getResumes = async (req, res) => {
  try {
    const resumes = await Resume.find({ userId: req.user.id });
    res.status(200).json(resumes);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch resumes" });
  }
};
