const sqlite3 = require ("sqlite3").verbose();
const db = new sqlite3.Database("./models/tienda.db");

const productos = {
    obtenerProductos: (callback) => {
        db.all("SELECT * FROM productos", [], (error, productos) => {
            if (error) {
                console.error(error);
                return;
            }
            callback(productos);
        });
    }
};

module.exports = productos;