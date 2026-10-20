const productModel = require("../models/productsModel");

const productController = {
    mostrarProductos: (req, res) => {
        productModel.obtenerProductos((productos) => {
            res.render("App", { productos });
        });
    },

    mostrarProductoPorId: (req, res) => {
        const id = req.query.id;

        productModel.obtenerProductoPorId(id, (producto) => {
            res.render("detalle", { producto });
        });
    }
};

module.exports = productController;