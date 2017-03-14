'use strict';

const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const dotenv = require('dotenv');
// const Promise = require('bluebird');
// const mongoose = require('mongoose');
// const debug = require('debug')('blog-site:backserver');

dotenv.load();

// const PORT = process.env.PORT;
const app = module.exports = express();

app.use(cors());
app.use(morgan(process.env.LOG_FORMAT));


app.use((err,req,res,next) => {
  console.log(err);
  if(err.status){
    return res.sendStatus(err.status);
  }
  next();
  res.sendStatus(500);
});
