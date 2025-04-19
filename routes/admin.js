const express = require('express');
const router = express.Router();
const Project = require('../models/Project');
const Skill = require('../models/Skill');

// Admin home
router.get('/', (req, res) => {
  res.render('admin');
});

// Render project form
router.get('/projects', (req, res) => {
  res.render('projects');
});

// Render skill form
router.get('/skills', (req, res) => {
  res.render('skills');
});

// Handle project submission
router.post('/projects', async (req, res) => {
  await Project.create({
    title: req.body.title,
    description: req.body.description,
    technologies: req.body.technologies.split(','),
    link: req.body.link
  });
  res.redirect('/admin/projects');
});

// Handle skill submission
router.post('/skills', async (req, res) => {
  await Skill.create(req.body);
  res.redirect('/admin/skills');
});

module.exports = router;
