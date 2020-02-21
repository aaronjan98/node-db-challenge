const express = require("express");

const projectsRouter = require("./projects/projects-router.js");

const router = express.Router();

// this router handles requests beginning in /api

router.use("/projects", projectsRouter);

module.exports = router;
