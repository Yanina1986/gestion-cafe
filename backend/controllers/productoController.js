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
  
exports.editar = (req,res) => {
    const {id }= req.params;
    const {nombre,descripcion, precio_ars,categoria, imagen} = req.body;
    db.query (
         'UPDATE productos SET  nombre=?, descripción=?, precio_ars= ?, categoria = ?, imagen =? WHERE id=? ',
         [nombre,descripcion, precio_ars,categoria,imagen, id],
         (err)=> {
            if(err) return res.status(500).send(err);
         }
    );
};

exports.eliminar = ( req, res) => {
    const{id}=req.params;
    db.query('DELETE FROM productos WHERE id=?',[id],(err)=>{
       if(err) return res.status(500).send(err);
       res.json({mensage:'Producto eliminado '}) 

    });
};