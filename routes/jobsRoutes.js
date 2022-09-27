import express from "express";
const router = express.Router();

import {
  createJob,
  getAllJobs,
  deleteJob,
  updateJob,
  showStats,
} from "../controllers/jobsController.js";

router.route("/").get(getAllJobs).post(createJob);
router.route("/:id").patch(updateJob).delete(deleteJob);
router.route("/stats").get(showStats);

export default router;
