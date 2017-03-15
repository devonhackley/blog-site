'use strict';

const {Router} = require('express');
const jsonParser = require('body-parser').json();
const createError = require('http-errors');
const debug = require('debug')('blog-site:page-router');

const Page = require('../model/page.js');

const pageRouter = module.exports = new Router();

pageRouter.post('/api/pages', jsonParser, function(res,req,next){
  debug('POST /api/pages');
  console.log(req.body);
  if(!req.body.title)
    return next(createError(400, 'request is missing fields, please include title'));

  new Page({
    title: req.body.title,
    content: req.body.content,
  }).save()
  .then(page => res.json(page))
  .catch(next);
});
