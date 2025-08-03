const express = require('express');
const mongoose = require('mongoose');
const app = express();

// Enpoint para verificar si la API/servidor está funcionando
app.get('/', (req, res) => {
    res.send("API/servidor funcionando");
});

// Conexión a la base de datos MongoDB
mongoose.connect('mongodb://localhost:27017/sistema_comunitario', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Conectado a MongoDB");
}).catch(error => {
    console.error("Error al conectar a MongoDB:", error);
});

// Iniciar el servidor
app.listen(3000, () => console.log("API/servidor corriendo en http://localhost:3000"));