import Resume from "../models/Resume.model.js";

// CREATE resume
export const createResume = async (req, res, next) => {
  try {
    const resume = await Resume.create({
      user: req.user.id,
      ...req.body
    });

    res.status(201).json({
      message: "Resume created successfully",
      resume
    });
  } catch (error) {
    next(error);
  }
};

// GET all resumes for logged-in user
export const getResumes = async (req, res, next) => {
  try {
    const resumes = await Resume.find({ user: req.user.id });
    res.status(200).json(resumes);
  } catch (error) {
    next(error);
  }
};
