'use strict';

const mongoose = require('mongoose');
const debug = require('debug')('blog-site:page-model');

const pageSchema = mongoose.Schema({
  title: {type: String, required: true},
  content: {type:String, required:true},

});

debug('page model');
module.exports = mongoose.model('page', pageSchema);
