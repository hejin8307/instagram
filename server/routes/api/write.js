var express = require('express');
var axios = require('axios');

var db = require('../../models');
const asyncError = require('../../utils/async-error');
var router = express.Router();

module.exports = function(app) {

  router.post('/', asyncError(async (req, res, next) => {
    db.Write.create({
      content: req.body.content
    }).then( write => {
      res.json(write.toJSON());
    })
  }));

  router.get('/', asyncError(async (req, res, next) => {
    const writes = await db.Write.findAll({});
    res.json(writes);
  }));
  return router;
};