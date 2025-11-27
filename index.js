const express = require('express');
const app = express();

// Ruta raíz: muestra nombres del equipo
app.get('/', (req, res) => {
  res.send('Integrantes del equipo: Rodrigo Legarreta, [agrega los demás]');
});

// /ulsa: misión de la ULSA
app.get('/ulsa', (req, res) => {
  res.send('Misión de la ULSA: Formar alumnos con valor.');
});

// /saludar/{nombre}: saludar dinámicamente
app.get('/saludar/:nombre', (req, res) => {
  const nombre = req.params.nombre;
  res.send(`Hola ${nombre}!`);
});

// Exportar para que Vercel lo use como servidorless function
module.exports = app;
