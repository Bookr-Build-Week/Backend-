const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const server = express();

const authRouter = require('../auth/authRouter.js');
const usersRouter = require('../users/usersRouter.js');
const bookRouter= require('../books/book-router.js');
const reviewRouter= require('../reviews/review-router.js');


server.use(helmet());
server.use(cors());
server.use(express.json());

server.use('/api/auth', authRouter);
server.use('/api/users', usersRouter);
server.use('/api/books', bookRouter);
server.use('/api/reviews',reviewRouter);

server.get('/', (req, res) => {
  res.status(200).json('Server running!');
});
server.get('/api/auth', (req, res) => {
  res.status(200).json('Please register/login');
});
server.get('api/users', (req, res) => {
  res.status(200).json('Show users');
})
server.get('api/books', (req, res) => {
  res.status(200).json('Show books');
});
server.get('/api/reviews', (req, res) => {
  res.status(200).json('Show reviews')
})
module.exports = server;

 