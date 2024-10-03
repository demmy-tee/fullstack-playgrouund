const Joi = require('joi');
const { Student, validate } = require('../controllers/models/movieModels');
// const student = [
//   {
//     name: 'Ojo Daniel',
//     id:'',
//     course: 'Aeronatical and Astronautical Engineering',
//     faculty: 'Engineering and Technology'
//   },
//   {
//     name: 'Richard John',
//     id:'',
//     course: 'Aeronatical and Astronautical Engineering',
//     faculty: 'Engineering and Technology'
//   },
//   {
//     name: 'Alayha David',
//     id:'',
//     course: 'Aeronatical and Astronautical Engineering',
//     faculty: 'Engineering and Technology'
//   },
//   {
//     name: 'Ibukun Temiloluwa',
//     id:'',
//     course: 'Aeronatical and Astronautical Engineering',
//     faculty: 'Engineering and Technology'
//   },
//   {
//     name: 'Mayowa Adams',
//     id:'',
//     course: 'Aeronatical and Astronautical Engineering',
//     faculty: 'Engineering and Technology'
//   }
// ]
// let id;
//   student.forEach((studentInfo, i) => {
//     id = i+1;    
//     studentInfo.id = `${id}`;
// });

exports.getAllStudent = async (req, res) => {
  const students = await Student.find().sort('name');
  res.send(students);
}

exports.createStudent = async(req, res) => {
  const { error } = validate(req.body);
  if(error) return res.status(400).send(error.details[0].message)
  const { name, course, faculty } = req.body;
  let students = new Student({
    name,
    course,
    faculty
  });

  students = await students.save()
  res.send(students);
}
exports.getSingleStudent = async (req, res) => {
  const students = await Student.findById(req.params.id);
  if (!students) return res.status(404).send('student not found');
  res.send(students);
}

exports.updateStudent = async (req, res) => {
  const { error } = validateStudent(req.body);
  if (error) return res.status(400).send('bad request');
  // update logic
  // check = req.body;
  // const { name, course, faculty } = req.body;
  // check.name = name;
  // check.course = course;
  // check.faculty = faculty;
  const update = await Student.findByIdAndUpdate(req.params.id, {
    name: req.body.name,
    course: req.body.course,
    faculty: req.body.faculty
  },
  { new: true })
  res.send(update);
};
exports.deleteStudent = async (req, res) => {
  // const check = student.find(currentStudent => currentStudent.id === req.params.id);
  // if (!check) return res.status(404).send('status not found');

  // const index = student.indexOf(student);
  // student.splice(index, 1);
  //return the same movie
  // res.send(student);

  const Delete = await Student.findByIdAndDelete(req.params.id);
  if (!Delete) return res.status(404).send(' the given student is not found');
  res.send(Delete);
};