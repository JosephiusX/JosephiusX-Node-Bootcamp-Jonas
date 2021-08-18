const express = require('express');
const morgan = require('morgan');

const tourRouter = require('./routes/tourRoutes.js');
const userRouter = require('./routes/userRoutes.js');

const app = express();

// 1) MIDDLEWARES
app.use(morgan('dev')); // retirns function like middleware below

app.use(express.json()); // allows express middleware for all routes , for json

//  middleware applies to each and every request THAT COMES AFTER IT
app.use((req, res, next) => {
  console.log('hello fromthe middleware 👋');
  next();
});

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

app.use('/api/v1/tours', tourRouter); // mounting router
app.use('/api/v1/users', userRouter); // mounting router

module.exports = app;

// 4) START SERVER
