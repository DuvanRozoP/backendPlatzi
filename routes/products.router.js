const express = require('express');

const ProductsServices = require('./../services/product.service');
const validatorHandler = require('./../middlewares/validator.habdler')
const {
  createProductSchema,
  updateProductSchema,
  getProductSchema
} = require('./../schemas/products.schema')

const router = express.Router();
const services = new ProductsServices();

router.get('/', async  (req, res) => {

  const products = await services.find();


  res.json(products)
})

router.get('/filter', (req,res) => {
  res.send('soy un filter');
})


router.get('/:id',
  validatorHandler(getProductSchema, 'params'),
  async (req,res, next) => {
  try {
    const { id } = req.params;

    const product = await services.findOne(id);
    res.json(product);
  } catch (error) {
    next(error)
  }

})

// RUTAS POST

router.post('/',
  validatorHandler(createProductSchema, 'body')
  ,async  (req,res) => {
  const body = req.body;
  const newProduct = await services.create(body)
  res.status(201).json(newProduct);
})

// RUTAS PATCH
router.patch('/:id',
  validatorHandler(getProductSchema, 'params'),
  validatorHandler(updateProductSchema, 'body'),
  async (req,res) => {
  try {
    const { id } = req.params;
    const body = req.body;
    const productChange = await services.update(id, body);
    res.json(productChange);
  } catch (error) {
    next(error)
  }

})

// RUTAS detete
router.delete('/:id', async (req,res) => {
  const { id } = req.params;

  const productDelete = await services.delete(id);

  res.json(productDelete);
})


module.exports = router;
