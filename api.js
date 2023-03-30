const express = require('express');
const app = express();

// Endpoint con CORS permitido
app.get('/cors', function(req, res) {
  res.header('Access-Control-Allow-Origin', '*');
  res.send('Este endpoint permite CORS');
});

// Endpoint sin CORS permitido
app.get('/nocors', function(req, res) {
  res.send('Este endpoint no permite CORS');
});

// Iniciar el servidor
app.listen(3000, function() {
  console.log('Servidor escuchando en el puerto 3000');
});