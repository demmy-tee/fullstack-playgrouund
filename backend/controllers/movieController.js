const { Movie, validate } = require('../models/movieModel');
exports.getAllMovies = async (req, res) => {
  const movies = await Movie.find().sort('title');
  res.send(movies);
};

exports.createMovie = async (req, res) => {

  //validate error
   const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);
  // destructuring properties from req.body
  const { title, fullName, gender, seatType, isPublished, amount,  } = req.body;
  let movie = new Movie({
    title,
    fullName,
    gender,
    seatType,
    isPublished,
    amount
  });
  movie = await movie.save();
  res.send(movie);
};



exports.getMovieById = async (req, res) => {
  const movie = await Movie.findById(req.params.id);
  if (!movie) return res.status(404).send('the movie is not found');
  res.send(movie);
}

exports.updateMovie = async (req, res) => {
  // validadtion error
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  // instance for updating the movie 
  const movie = await Movie.findByIdAndUpdate(req.params.id, {
    title: req.body.title,
    fullName: req.body.fullName,
    gender: req.body.gender,
    seatType: req.body.seatType,
    isPublished: req.body.isPublished,
    amount: req.body.amount
  }, {
    new: true
  });
  if (!movie) return res.status(404).send('the movie with the giiven id not found');
  res.send(movie);
};

exports.delteMovie = async (req, res) => {
  const movie = await Movie.findByIdAndDelete(req.params.id);
  if (!movie) return res.status(404).send(' the given movie is not found');
  res.send(movie);
};