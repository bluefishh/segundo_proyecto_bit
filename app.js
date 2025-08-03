console.log('Hello, World!');const express = require("express");
const app = express();

// Habilitar JSON en las respuestas
app.use(express.json());

const usuarios = [
    { id: 1, nombre: "Carlos" },
    { id: 2, nombre: "Ana" }
];

// Ruta para obtener todos los usuarios (GET)
app.get("/usuarios", (req, res) => {
    res.json(usuarios);
});

// Ruta para agregar un usuario (POST)
app.post("/usuarios", (req, res) => {
    const nuevoUsuario = { id: usuarios.length + 1, nombre: req.body.nombre };
    usuarios.push(nuevoUsuario);
    res.status(201).json(nuevoUsuario);
});

// Ruta para actualizar un usuario (PUT)
app.put("/usuarios/:id", (req, res) => {
    const usuario = usuarios.find(u => u.id === parseInt(req.params.id));
    if (!usuario) return res.status(404).json({ error: "Usuario no encontrado" });

    usuario.nombre = req.body.nombre;
    res.json(usuario);
});

// Ruta para eliminar un usuario (DELETE)
app.delete("/usuarios/:id", (req, res) => {
    const index = usuarios.findIndex(u => u.id === parseInt(req.params.id));
    if (index === -1) return res.status(404).json({ error: "Usuario no encontrado" });

    usuarios.splice(index, 1);
    res.json({ mensaje: "Usuario eliminado" });
});

// Iniciar el servidor
app.listen(3000, () => console.log("API corriendo en http://localhost:3000"));
