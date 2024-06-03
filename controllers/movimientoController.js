const Movimiento = require('../models/movimientoModel');

const getMovimientos = async (req, res) => {
  try {
    const rows = await Movimiento.getAllMovimientos();
    res.json(rows);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const getMovimiento = async (req, res) => {
  const { id } = req.params;
  try {
    const rows = await Movimiento.getMovimientoById(id);
    if (rows.length === 0) {
      return res.status(404).json({ message: 'Movimiento no encontrado' });
    }
    res.json(rows[0]);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const createMovimiento = async (req, res) => {
  const { id_producto, id_empleado, tipo_movimiento, cantidad, fecha_movimiento, notas } = req.body;
  try {
    await Movimiento.createMovimiento(id_producto, id_empleado, tipo_movimiento, cantidad, fecha_movimiento, notas);
    res.status(201).json({ message: 'Movimiento creado' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const updateMovimiento = async (req, res) => {
  const { id } = req.params;
  const { id_producto, id_empleado, tipo_movimiento, cantidad, fecha_movimiento, notas } = req.body;
  try {
    await Movimiento.updateMovimiento(id, id_producto, id_empleado, tipo_movimiento, cantidad, fecha_movimiento, notas);
    res.json({ message: 'Movimiento actualizado' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const deleteMovimiento = async (req, res) => {
  const { id } = req.params;
  try {
    await Movimiento.deleteMovimiento(id);
    res.json({ message: 'Movimiento eliminado' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  getMovimientos,
  getMovimiento,
  createMovimiento,
  updateMovimiento,
  deleteMovimiento
};
