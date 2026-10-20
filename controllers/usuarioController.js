const usuarioModel = require("../models/usuarioModel");

const usuarioController = {
    mostrarLogin: (req, res) => {
        res.render("login");
    },

    validarLogin: (req, res) => {
        const { email, password } = req.body;

        if (usuarioModel.validarUsuario(email, password)) {
            res.redirect("/");
        } else {
            res.send("Correo o contraseña incorrectos.");
        }
    }
};

module.exports = usuarioController;