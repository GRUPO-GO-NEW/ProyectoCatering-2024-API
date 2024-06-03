const pool = require('./db');

const getAllProductos = () => {
  return pool.query('SELECT * FROM Productos');
};

const getProductoById = (id) => {
  return pool.query('SELECT * FROM Productos WHERE ID_Producto = ?', [id]);
};

const createProducto = (nombre, descripcion, categoria, cantidad_disponible, precio_unitario) => {
  return pool.query('INSERT INTO Productos (Nombre, Descripcion, Categoria, Cantidad_Disponible, Precio_Unitario) VALUES (?, ?, ?, ?, ?)', 
  [nombre, descripcion, categoria, cantidad_disponible, precio_unitario]);
};

const updateProducto = (id, nombre, descripcion, categoria, cantidad_disponible, precio_unitario) => {
  return pool.query('UPDATE Productos SET Nombre = ?, Descripcion = ?, Categoria = ?, Cantidad_Disponible = ?, Precio_Unitario = ? WHERE ID_Producto = ?', 
  [nombre, descripcion, categoria, cantidad_disponible, precio_unitario, id]);
};

const deleteProducto = (id) => {
  return pool.query('DELETE FROM Productos WHERE ID_Producto = ?', [id]);
};

module.exports = {
  getAllProductos,
  getProductoById,
  createProducto,
  updateProducto,
  deleteProducto
};
