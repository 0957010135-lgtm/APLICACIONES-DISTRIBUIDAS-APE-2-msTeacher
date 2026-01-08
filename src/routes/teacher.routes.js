const express = require('express');
const router = express.Router();
const { getTeacher } = require('../controllers/teacher.controller');

router.get('/:id', getTeacher);

module.exports = router;
