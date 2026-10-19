const path = require("path");
const express = require("express");
const router = express.Router();

const productController = require("../controllers/productController");

router.get("/", productController.mostrarProductos);

router.post("/",(req, res)=> {        
    console.log(req.body.email);
    console.log("contraseña: " + req.body.password);

    const {email} = req.body;
    const {password} = req.body;

    if (email === "mendezalfredobenjamin@gmail.com" && password === "1234") {

        res.redirect("/");
    } else {

        res.send("Correo o contraseña incorrectos.");
    }
})
router.get("/Nigga.html", (req, res) =>{
    res.sendFile(path.join(__dirname,"..","vistas","/Nigga.html"));
});
router.post("/", (req, res) => {
    res.redirect("/");
});

router.get("/productos",(req,res) =>{
    const id=req.query.id;
})

router.get("/Registro.html", (req, res) =>{
    res.sendFile(path.join(__dirname,"..","vistas","/Registro.html"));
});
router.post("/", (req, res) => {
    res.redirect("/");
});

module.exports = router;