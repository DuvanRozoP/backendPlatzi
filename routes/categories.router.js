const express = require('express');

const routerCategories = express.Router();

routerCategories.get('/', (req, res) => {
  res.send('hello mi almacenador de categorias');
})

routerCategories.get('/:categoriasID/products/:productsID', (req,res) => {
  const { categoriasID, productsID } = req.params;
  res.json({
    productsid: productsID,
    categoriasid: categoriasID,
    name: "producto 2",
    price: "5 lukitas nerito"
  })
})


module.exports = routerCategories
