const { promises: fs } = require('fs');
const contenedor = require('./Functions')
const express = require('express');
const { json } = require('express');
const app = express();
const listaDeProductos = new contenedor('./productos.txt')

const port = process.env.port || 8080;

app.get('/productos', async (req, res) => {
    const productos = await listaDeProductos.getAll()
    res.send(`Los productos disponibles son: ${JSON.stringify(productos)}`)
})

app.get('/productosRandom', async (req, res) => {
    const productos = await listaDeProductos.getAll()
    let random = Math.floor(Math.random()*productos.length)
    let valorRandom = productos[random];
    console.log(valorRandom);
    res.send(`El producto aleatorio es: ${JSON.stringify(valorRandom)}`)
})


const server = app.listen(port, () => {
    console.log(`Servidor express escuchando en el puerto ${port}`);
    
})