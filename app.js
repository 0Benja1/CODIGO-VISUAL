const express = require("express");
const path = require("path");
const app = express();
const mainroutes = require("./routes/mainroutes");
    

app.use(express.static("public"));
app.use(express.urlencoded({extended: true}));
app.set("views engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use("/", mainroutes);
app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname,"vistas",'App.html'));
    res.sendFile(path.join(__dirname,"vistas",'Nigga.html'));
    res.sendFile(path.join(__dirname,"vistas",'Registro.html'));
});

app.listen(3000, () => {
    console.log("servidor funcionando")
});

