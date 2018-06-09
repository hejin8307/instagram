var express = require('express');
var axios = require('axios');

var db = require('../../models');
const asyncError = require('../../utils/async-error');
var router = express.Router();

module.exports = function(app) {
  router.post('/post', asyncError(async (req, res, next) => {
    db.post.create({
      postTitle: req.body.postTitle
    }).then( user => {
      res.json(user.toJSON());
    }).catch( error => {
        return res.status(422).json({code: 101, message: 'post title exists'});
        next(error);
    });
  }))
}