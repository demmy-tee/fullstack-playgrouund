const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config();
const movieRouter = require('./router/router');
const mongoose = require('mongoose');
const dbURI = process.env.MONGODB_URI;

mongoose.connect(dbURI)
.then(()=>console.log('connected')
)
.catch(err=>console.log(err));

app.use(express.json())
app.use(express.urlencoded({ extended: true }));

app.use(movieRouter);





const port = process.env.port
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
  
})