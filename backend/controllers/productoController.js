const db =require ('../db');

exports.listar = (req, res) => {
    db.query('SELECT *FROM productos', (err, results) => {
        if(err) return res.status(500).send(err);
        res.json(results);
    });
};

exports.agregar = (req, res) => {
    const { nombre, descripcion, precio_ars, categoria, imagen } = req.body;
    db.query(
      'INSERT INTO productos (nombre, descripcion, precio_ars, categoria, imagen) VALUES (?, ?, ?, ?, ?)',
      [nombre, descripcion, precio_ars, categoria, imagen],
      (err, result) => {
        if (err) return res.status(500).send(err);
        res.json({ id: result.insertId, message: 'Producto agregado' });
      }
    );
  };



exports.editar = (req, res) => {
  const id = req.params.id;
  const { nombre, descripcion, precio_ars, categoria, imagen } = req.body;

  const sql = 'UPDATE productos SET nombre = ?, descripcion = ?, precio_ars = ?, categoria = ?, imagen = ? WHERE id = ?';
  const values = [nombre, descripcion, precio_ars, categoria, imagen, id];

  db.query(sql, values, (err, result) => {
    if (err) return res.status(500).json({ error: err });
    if (result.affectedRows === 0) return res.status(404).send('Producto no encontrado');
    res.sendStatus(200);
  });
};

exports.obtenerPorId = (req, res) => {
  const { id } = req.params;
  db.query('SELECT * FROM productos WHERE id = ?', [id], (err, results) => {
    if (err) return res.status(500).send(err);
    if (results.length === 0) return res.status(404).json({ message: 'Producto no encontrado' });
    res.json(results[0]);
  });
};


exports.eliminar = ( req, res) => {
    const{id}=req.params;
    db.query('DELETE FROM productos WHERE id=?',[id],(err)=>{
       if(err) return res.status(500).send(err);
       res.json({mensage:'Producto eliminado '})

    });
};
