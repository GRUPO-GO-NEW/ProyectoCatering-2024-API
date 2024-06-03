const Empleado = require('../models/empleadoModel');

const getEmpleados = async (req, res) => {
  try {
    const rows = await Empleado.getAllEmpleados();
    res.json(rows);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const getEmpleado = async (req, res) => {
  const { id } = req.params;
  try {
    const rows = await Empleado.getEmpleadoById(id);
    if (rows.length === 0) {
      return res.status(404).json({ message: 'Empleado no encontrado' });
    }
    res.json(rows[0]);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const createEmpleado = async (req, res) => {
  const { nombre, posicion, contacto } = req.body;
  try {
    await Empleado.createEmpleado(nombre, posicion, contacto);
    res.status(201).json({ message: 'Empleado creado' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const updateEmpleado = async (req, res) => {
  const { id } = req.params;
  const { nombre, posicion, contacto } = req.body;
  try {
    await Empleado.updateEmpleado(id, nombre, posicion, contacto);
    res.json({ message: 'Empleado actualizado' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const deleteEmpleado = async (req, res) => {
  const { id } = req.params;
  try {
    await Empleado.deleteEmpleado(id);
    res.json({ message: 'Empleado eliminado' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  getEmpleados,
  getEmpleado,
  createEmpleado,
  updateEmpleado,
  deleteEmpleado
};

