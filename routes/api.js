const express = require("express");
const router = express.Router();
const Project = require("../models/Project");
const Skill = require("../models/Skill");

// Get all projects
router.get("/projects", async (req, res) => {
    const projects = await Project.find();
    res.json(projects);
});

// Get all skills
router.get("/skills", async (req, res) => {
    const skills = await Skill.find();
    res.json(skills);
});

module.exports = router;
