const express = require('express');
const router = express.Router();
const { getTeacher } = require('../controllers/teacher.controller');

// GET /teachers/:id
router.get('/:id', getTeacher);

module.exports = router;
