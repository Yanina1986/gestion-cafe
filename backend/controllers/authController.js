const db = require('../db');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const SECRET_KEY = 'clave_secreta';

exports.register = (req, res) => {
  const { nombre, email, password } = req.body;
  const hash = bcrypt.hashSync(password, 10);

  db.query('INSERT INTO usuarios (nombre, email, password) VALUES (?, ?, ?)',
    [nombre, email, hash],
    (err, result) => {
      if (err) return res.status(500).send(err);
      res.send({ message: 'Usuario registrado correctamente' });
    }
  );
};

exports.login = (req, res) => {
  const { email, password } = req.body;

  db.query('SELECT * FROM usuarios WHERE email = ?', [email], (err, results) => {
    if (err || results.length === 0) return res.status(401).send({ error: 'Usuario no encontrado' });

    const usuario = results[0];
    if (!bcrypt.compareSync(password, usuario.password)) {
      return res.status(401).send({ error: 'Contraseña incorrecta' });
    }

    const token = jwt.sign({ id: usuario.id }, SECRET_KEY, { expiresIn: '1h' });
    res.send({ token, usuario: { id: usuario.id, nombre: usuario.nombre, email: usuario.email , rol: usuario.rol} });
  });
};

exports.logout = (req, res) => {

  res.send({ message: 'Usuario desconectado' });
};
