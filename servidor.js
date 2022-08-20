const express = require('express');
const app = express();
const { Router } = express;
const ApiProducts = require('./api/productos.js');

// Router -------------------------------------

const apiProducts = new ApiProducts();

const routerProducts = new Router();

productosRouter.use(express.json())
productosRouter.use(express.urlencoded({ extended: true }))

routerProducts.get('/', (req, res) => {
    res.json(apiProducts.getAll());
})

routerProducts.get('/:id', (req, res) => {
    res.json(apiProducts.getById(req.params.id));
})

routerProducts.post('/', (req, res) => {
    res.json(apiProducts.addProduct(req.body));
})

routerProducts.put('/:id', (req, res) => {
    res.json(apiProducts.updateProduct(req.params.id));
})

routerProducts.delete('/:id', (req, res) => {
    res.json(apiProducts.deleteProduct(req.params.id));
})

// server ----------------------------------------

app.use(express.static('public'))
app.use('/api/productos', productosRouter)


const PORT = 8080;
const server = app.listen(PORT, () => {
    console.log(`Servidor esuchando en el puerto ${PORT}`);
})
server.on('error', error => console.log(`Error del servidor: ${error}`));