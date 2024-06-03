const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(bodyParser.json());

// Habilitar CORS para todas las solicitudes desde cualquier origen
app.use(cors());

// Rutas de la aplicación
const productoRoutes = require('./routes/productoRoutes');
const empleadoRoutes = require('./routes/empleadoRoutes');
const movimientoRoutes = require('./routes/movimientoRoutes');

app.use('/api/productos', productoRoutes);
app.use('/api/empleados', empleadoRoutes);
app.use('/api/movimientos', movimientoRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
