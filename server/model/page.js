'use strict';

const mongoose = require(mongoose);

const pageSchema = mongoose.Schema({
  title: {type: String, required: true},
  content: {type:String, required:true},

});

module.exports = mongoose.model('page', pageSchema);
