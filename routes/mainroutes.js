const path = require("path");
const express = require("express");
const router = express.Router();

const usuarioController = require("../controllers/usuarioController");
const productController = require("../controllers/productController");

router.get("/Nigga", usuarioController.mostrarLogin);
router.post("/Nigga", usuarioController.validarLogin);

router.get("/", productController.mostrarProductos);

router.get("/Nigga.html", (req, res) => {
    res.sendFile(path.join(__dirname, "..", "vistas", "Nigga.html"));
});

router.get("/Registro.html", (req, res) => {
    res.sendFile(path.join(__dirname, "..", "vistas", "Registro.html"));
});

router.get("/productos", (req, res) => {
    const id = req.query.id;
    console.log("ID del producto:", id);
});

module.exports = router;
