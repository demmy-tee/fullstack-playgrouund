const mongoose = require('mongoose');
const Joi = require('joi');

const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    minlength: 5,
    maxlength: 50,
    required: true
  },
  course: {
    type: String,
    required: true
  },
  faculty: {
    type: String,
    required: true
  },
  createdAt:{ type: Date}
});

const Student = mongoose.model('Student', studentSchema); // interactionn between the model and the controllers

const validateStudent = (student) => {
  const schema = {
    name: Joi.string().min(3).required(),
    course: Joi.string().min(3).required(),
    faculty: Joi.string().min(3).required(),
  };
  return Joi.validate(student, schema); 
}

exports.studentSchema = studentSchema;
exports.Student = Student;
exports.validate = validateStudent;