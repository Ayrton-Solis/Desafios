const express = require('express');
const app = express();
const { Router } = express;

// Router

const routerProducts = new Router();

productosRouter.use(express.json())
productosRouter.use(express.urlencoded({ extended: true }))

routerProducts.get('/', (req, res) => {
    
})









// server

app.use(express.static('public'))
// app.use('/api/productos', productosRouter)


const PORT = 8080;
app.listen(PORT, () => {
    console.log(`Servidor esuchando en el puerto ${PORT}`);
})