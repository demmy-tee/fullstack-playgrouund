const express = require('express');
const app = express(); 
const dotenv = require('dotenv');
const movieRoutes = require('./router/movieRoute')
const mongoose = require('mongoose');
dotenv.config();

const dbURI = process.env.MONGODB_URI;

//connecting mongodb to our node.js application
mongoose.connect(dbURI)
  .then(() => console.log('connected to MongoDb'))
  .catch(err => console.log('error connecting to mondoDB'));

// const movies = [
//   { id: 1, title: 'Merlin', isPublished: true },
//   { id: 2, title: 'Avengers', isPublished: true },
//   { id: 3, title: 'Black Panter', isPublished: true },
//   { id: 4, title: 'Flash', isPublished: false },
//   { id: 5, title: 'The Originals', isPublished: true }
// ];

// Middleware functions
app.use(express.json())
app.use(express.urlencoded({extended: true}));


// ROUTER HANDLER FUNCTION
// app.get('/', (req, res) => {
//   res.send('Hello From Express');
// });

// app.get('/api/v1/ozone', (req, res) => {
//   res.send(movies)
// })
// app.post('/api/v1/ozone', (req, res) => {
//   const movie = {
//     id: movies.length + 1,
//     title: req.body.title,
//     isPublished: req.body.isPublished
//   };
//   movies.push(movie);
//   res.send(movie);
// })

// sucessfully read the values of a parameter
// app.get('/api/v1/courses/:year/:month', (req, res) => {
//   res.send(req.query);
// });

//how to get a single request from an object


// app.get('/api/v1/ozone/:id', (req, res) => {
//   const movie = movies.find(m => m.id === parseInt(req.params.id));
//   console.log(m);
  
//   // return 404 if not found
//   if (!movie) return res.status(404).send('The movie with the given ID was not found.');
//   res.send(movie);
// });


// How to Update #CRUD OPERATIONS


// app.put('/api/v1/ozone/:id', (req, res) => {
//   //lookup the movie to be updated first in the array of objectl
//   const movie = movies.find(m => m.id === parseInt(req.params.id));
//   // return 404 if not found
//   if (!movie) return res.status(404).send('movie not found');
//   // validate the movie on the object
//   const { error } = validateMovie(req.body)
//   if (error) return res.status(400).send(error.details[0].message) // this validation error is going to explain user-friendly message why the validation failed
//   //update the movie
//    const {title, isPublished} = req.body
//   res.send(movie)
// });

// // deleting a request


// app.delete('/api/v1/ozone/:id', (req, res) => {
//   const movie = movies.find(m => m.id === parseInt(req.params.id));
//   if (!movie) return res.status(404).send('the movie with the given ID was not found');

//   // delete
//   const index = movies.indexOf(movie);
//   movies.splice(index, 1);
//   //return the same movie
//   res.send(movie);
// });

app.use('/api/v1/ozone', movieRoutes);
// function To validate the movie

// function validateMovie(movie) {
//   const schema = {
//     title: Joi.string().min(3).required(),
//     isPublished: Joi.boolean()
//   };
//   return Joi.validate(movie, schema);
// }
//PORT
const port = process.env.PORT; 
app.listen(port, () => {
  console.log(`listening on port ${port}.....`);
});

