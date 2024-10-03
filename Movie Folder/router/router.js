const express = require('express');
const router = express.Router();
const studentController = require('../controllers/studentControllers');

router.route('/api/v1/student')
  .post(studentController.createStudent)
  .get(studentController.getAllStudent);

router.route('/api/v1/student/:id')
  .get(studentController.getSingleStudent)
  .put(studentController.updateStudent)
  .delete(studentController.deleteStudent);

module.exports = router;
  
