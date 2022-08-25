// Requires
const express = require('express');
const ApiProducts = require('./api/productos');

// Seteos
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

// declaracion de variables
const app = express();
const apiProducts = new ApiProducts();


// Servidor
app.get('/productos', (req, res) => {
    
});

app.post('/productos', (req, res) => {

});

// Puerto
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});