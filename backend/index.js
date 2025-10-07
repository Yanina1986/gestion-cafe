const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const authRoutes = require('./routes/auth');
const productoRoutes = require('./routes/productos');
const facturasRoutes = require('./routes/facturas');
const reporteRoutes = require('./routes/reporte');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use('/api/auth', authRoutes);
app.use('/api/productos', productoRoutes);
app.use('/api/facturas',facturasRoutes);
app.use('/api/reportes', reporteRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
