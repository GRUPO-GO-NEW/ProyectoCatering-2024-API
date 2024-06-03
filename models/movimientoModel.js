const pool = require('./db');

const getAllMovimientos = () => {
  return pool.query('SELECT * FROM Movimientos_Inventario');
};

const getMovimientoById = (id) => {
  return pool.query('SELECT * FROM Movimientos_Inventario WHERE ID_Movimiento = ?', [id]);
};

const createMovimiento = (id_producto, id_empleado, tipo_movimiento, cantidad, fecha_movimiento, notas) => {
  return pool.query('INSERT INTO Movimientos_Inventario (ID_Producto, ID_Empleado, Tipo_Movimiento, Cantidad, Fecha_Movimiento, Notas) VALUES (?, ?, ?, ?, ?, ?)', 
  [id_producto, id_empleado, tipo_movimiento, cantidad, fecha_movimiento, notas]);
};

const updateMovimiento = (id, id_producto, id_empleado, tipo_movimiento, cantidad, fecha_movimiento, notas) => {
  return pool.query('UPDATE Movimientos_Inventario SET ID_Producto = ?, ID_Empleado = ?, Tipo_Movimiento = ?, Cantidad = ?, Fecha_Movimiento = ?, Notas = ? WHERE ID_Movimiento = ?', 
  [id_producto, id_empleado, tipo_movimiento, cantidad, fecha_movimiento, notas, id]);
};

const deleteMovimiento = (id) => {
  return pool.query('DELETE FROM Movimientos_Inventario WHERE ID_Movimiento = ?', [id]);
};

module.exports = {
  getAllMovimientos,
  getMovimientoById,
  createMovimiento,
  updateMovimiento,
  deleteMovimiento
};
