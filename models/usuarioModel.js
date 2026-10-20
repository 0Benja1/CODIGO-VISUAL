const usuario = require("./usuario.json");

const usuarioModel = {
    validarUsuario: (email, password) => {
        return usuario.find(u =>
            u.email === email && u.password === password
        );
    },

    mostrarUsuario: () => usuario
};

module.exports = usuarioModel;