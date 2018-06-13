var express = require('express');
var axios = require('axios');

var db = require('../../models');
const asyncError = require('../../utils/async-error');
var router = express.Router();

module.exports = function(app) {
  
  router.post('/', asyncError(async (req, res, next) => {
    db.Write.create({
      userId: req.body.userId,
      content: req.body.content
    }).then( write => {
      res.json(write.toJSON());
    })
    // .catch( error => {
    //   if (error.name == 'SequelizeUniqueConstraintError') {
    //     return res.status(422).json({code: 101, message: 'content exists'});
    //   }
    //   next(error);
    // });
  }));
}