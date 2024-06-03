const Producto = require('../models/productoModel');

const getProductos = async (req, res) => {
  try {
    const rows = await Producto.getAllProductos();
    res.json(rows);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const getProducto = async (req, res) => {
  const { id } = req.params;
  try {
    const rows = await Producto.getProductoById(id);
    if (rows.length === 0) {
      return res.status(404).json({ message: 'Producto no encontrado' });
    }
    res.json(rows[0]);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const createProducto = async (req, res) => {
  const { nombre, descripcion, categoria, cantidad_disponible, precio_unitario } = req.body;
  try {
    await Producto.createProducto(nombre, descripcion, categoria, cantidad_disponible, precio_unitario);
    res.status(201).json({ message: 'Producto creado' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const updateProducto = async (req, res) => {
  const { id } = req.params;
  const { nombre, descripcion, categoria, cantidad_disponible, precio_unitario } = req.body;
  try {
    await Producto.updateProducto(id, nombre, descripcion, categoria, cantidad_disponible, precio_unitario);
    res.json({ message: 'Producto actualizado' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const deleteProducto = async (req, res) => {
  const { id } = req.params;
  try {
    await Producto.deleteProducto(id);
    res.json({ message: 'Producto eliminado' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  getProductos,
  getProducto,
  createProducto,
  updateProducto,
  deleteProducto
};
