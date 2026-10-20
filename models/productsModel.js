const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("./tienda.db");

const obtenerProductos = (callback) => {
    db.all("SELECT * FROM productos", (error, productos) => {
        if (error) {
            console.error(error);
            return;
        }
        callback(productos);
    });
};

module.exports = {
    obtenerProductos
};