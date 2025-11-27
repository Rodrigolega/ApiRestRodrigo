const express = require('express');
const app = express();
const port = 3000;

//ruta 1
app.get('/mensaje1', (req, res) => {
  res.send('bienvenidos!');
});

//ruta 2  
app.get('/ulsa', (req, res) => {
  res.send('forar alumnos con valor');
});

//iniciar servidor 
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});