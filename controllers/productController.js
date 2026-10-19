const productos = require("../models/data/productos.json");

const mostrarProductos = (req, res) => {
    res.render("App", { productos });
}

module.exports = {
    mostrarProductos
}