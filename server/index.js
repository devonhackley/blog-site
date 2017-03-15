'use strict';

const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const debug = require('debug')('blog-site:backserver');

dotenv.load();

const app = module.exports = express();

mongoose.Promise = require('bluebird');
mongoose.connect(process.env.MONGODB_URI);
app.use(require('./routes/page-router.js'));
app.use(cors());
app.use(morgan(process.env.LOG_FORMAT));




app.use((err,req,res,next) => {
  debug('error middleware');
  console.log(err);
  if(err.status){
    return res.sendStatus(err.status);
  }
  next();
  res.sendStatus(500);
});
