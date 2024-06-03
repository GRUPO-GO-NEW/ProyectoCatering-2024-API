const mysql = require('mysql');
const util = require('util');

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'catering_inventario'
});

// Promisificar las funciones de callback de MySQL
pool.query = util.promisify(pool.query).bind(pool);

module.exports = pool;
