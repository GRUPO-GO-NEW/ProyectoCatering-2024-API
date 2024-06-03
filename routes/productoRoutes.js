const express = require('express');
const router = express.Router();
const {
  getProductos,
  getProducto,
  createProducto,
  updateProducto,
  deleteProducto
} = require('../controllers/productoController');

router.route('/')
  .get(getProductos)
  .post(createProducto);

router.route('/:id')
  .get(getProducto)
  .put(updateProducto)
  .delete(deleteProducto);

module.exports = router;
