const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Definición del esquema para el modelo de Usuario
const usuarioSchema = new Schema({
    primerNombre: {
        type: String,
        required: true
    },
    segundoNombre: {
        type: String,
        required: true
    },
    primerApellido: {
        type: String,
        required: true
    },
    segundoApellido: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    contrasena: {
        type: String,
        required: true
    },
    fechaNacimiento: {
        type: Date,
        required: true
    },
    fechaRegistro: {
        type: Date,
        default: Date.now
    },
    genero: {
        type: String,
        enum: ['masculino', 'femenino', 'otro'],
        required: true
    },
    rol: {
        type: String,
        enum: ['residente', 'admin'],
        default: 'residente',
        required: true
    }
});

// Creación del modelo de Usuario
const Usuario = mongoose.model('Usuario', usuarioSchema);