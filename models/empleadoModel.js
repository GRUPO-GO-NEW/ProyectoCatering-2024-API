const pool = require('./db');
const getAllEmpleados = () => {
    return pool.query('SELECT * FROM Empleados')
      .then(rows => {
        console.log(rows); // Aquí imprimes los datos en la consola
        return rows; // Retorna los datos para que puedan ser utilizados por otras partes de tu aplicación
      })
      .catch(err => {
        console.error('Error al obtener empleados:', err);
        throw err; // Maneja el error de acuerdo a tus necesidades
      });
  };
  

const getEmpleadoById = (id) => {
  return pool.query('SELECT * FROM Empleados WHERE ID_Empleado = ?', [id]);
};

const createEmpleado = (nombre, posicion, contacto) => {
  return pool.query('INSERT INTO Empleados (Nombre, Posicion, Contacto) VALUES (?, ?, ?)', [nombre, posicion, contacto]);
};

const updateEmpleado = (id, nombre, posicion, contacto) => {
  return pool.query('UPDATE Empleados SET Nombre = ?, Posicion = ?, Contacto = ? WHERE ID_Empleado = ?', [nombre, posicion, contacto, id]);
};

const deleteEmpleado = (id) => {
  return pool.query('DELETE FROM Empleados WHERE ID_Empleado = ?', [id]);
};

module.exports = {
  getAllEmpleados,
  getEmpleadoById,
  createEmpleado,
  updateEmpleado,
  deleteEmpleado
};
