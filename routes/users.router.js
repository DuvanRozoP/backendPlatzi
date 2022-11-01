const express = require('express');
const router = require('./products.router');

const routerUsers = express.Router();

routerUsers.get('/users',(req,res) => {
  const { limit, offset } = req.query;
  if (limit && offset){
    res.json({
      limit,
      offset
    })
  } else {
    res.json('no hay parametros')
  }
})

module.exports = routerUsers;
