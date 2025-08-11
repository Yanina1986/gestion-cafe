const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'mysql.db.mdbgo.com',
  user: 'walendzik_walendzikusuario',
  password: 'RXrgS@YbTg7X9h',
  database: 'walendzik_walendzik',
  port: 3306,
  ssl: {
    rejectUnauthorized: false
}});

connection.connect((err) => {
  if (err) throw err;
  console.log('Conectado a MySQL remoto en MDBGo');
});

module.exports = connection;

/*const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'walendzik_walendzikusuario',
  password: 'RXrgS@YbTg7X9h',
  database: 'walendzik_walendzik'
});

connection.connect((err) => {
  if (err) throw err;
  console.log('Conectado a MySQL');
});
*/
