const express = require('express');
const morgan = require('morgan');

require('dotenv').config();

const app = express();

const userRouter = require('./src/routes/users');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use('/users', userRouter);

app.listen(process.env.PORT, () => {
  console.log(`Server running on http://localhost:${process.env.port}`);
});

module.exports = app;
