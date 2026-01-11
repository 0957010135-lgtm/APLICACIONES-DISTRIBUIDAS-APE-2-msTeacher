const express = require('express');
const router = express.Router();
const controller = require('../controllers/teacher.controller');

router.get('/teachers/:id', controller.getTeacher);

module.exports = router;
