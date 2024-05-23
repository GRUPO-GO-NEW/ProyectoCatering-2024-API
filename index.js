const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
const port = 3000;

// Configuración de la conexión a la base de datos MySQL
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'catering'
});

connection.connect();

// Habilitar CORS para todas las solicitudes desde cualquier origen
app.use(cors());

// Middleware para analizar solicitudes JSON
app.use(bodyParser.json());

// Ruta para obtener todos los empleados
app.get('/empleados', (req, res) => {
  connection.query('SELECT * FROM empleado', (error, results) => {
    if (error) throw error;
    res.json(results);
  });
});

// Ruta para obtener un empleado por su ID
app.get('/empleados/:id', (req, res) => {
  const { id } = req.params;
  connection.query('SELECT * FROM empleado WHERE id = ?', [id], (error, results) => {
    if (error) throw error;
    res.json(results[0]);
  });
});

// Ruta para agregar un nuevo empleado
app.post('/empleados', (req, res) => {
  const { nombre, apellido, edad, salario, fecha_contrato } = req.body;
  connection.query('INSERT INTO empleado (nombre, apellido, edad, salario, fecha_contrato) VALUES (?, ?, ?, ?, ?)',
    [nombre, apellido, edad, salario, fecha_contrato],
    (error, results) => {
      if (error) throw error;
      res.json({ message: 'Empleado añadido correctamente', id: results.insertId });
    });
});

// Ruta para actualizar un empleado
app.put('/empleados/:id', (req, res) => {
  const { id } = req.params;
  const { nombre, apellido, edad, salario, fecha_contrato } = req.body;
  connection.query('UPDATE empleado SET nombre=?, apellido=?, edad=?, salario=?, fecha_contrato=? WHERE id=?',
    [nombre, apellido, edad, salario, fecha_contrato, id],
    (error) => {
      if (error) throw error;
      res.json({ message: 'Empleado actualizado correctamente' });
    });
});

// Ruta para eliminar un empleado
app.delete('/empleados/:id', (req, res) => {
  const { id } = req.params;
  connection.query('DELETE FROM empleado WHERE id=?', [id], (error) => {
    if (error) throw error;
    res.json({ message: 'Empleado eliminado correctamente' });
  });
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
