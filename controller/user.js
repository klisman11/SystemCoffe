const { response } = ('express');
const Usuario = require('../models/UserModel');
const bcryptjs = require('bcryptjs');
const UserModel = require('../models/UserModel');
const { request } = require('express');

const GetUser = async(req = request, res = response) => {
    const { limite = 5, desde = 0 } = req.query;
    const query = { estado: true };
    const [total, usuarios] = await Promise.all([
        Usuario.count(query),
        Usuario.find(query)
        .skip(Number(desde))
        .limit(Number(limite))
    ])

    res.json({
        total,
        usuarios
    });
};

const PutUser = async(req, res = response) => {

    const { id } = req.body;

    const { google, password, ...otros } = req.body;
    if (password) {
        //Encriptar la contraseña
        const salt = bcryptjs.genSaltSync();
        otros.password = bcryptjs.hashSync(password, salt);


    }
    const usuario = await Usuario.findByIdAndUpdate(id, otros);


    res.json({
        id: '2',
        msg: ('Put controller'),
        id,
        usuario
    });
};

const PostUser = async(req, res) => {

    const { nombre, correo, password, rol } = req.body;

    const usuario = new Usuario({ nombre, correo, password, rol });

    //Encriptar la contraseña
    const salt = bcryptjs.genSaltSync();
    usuario.password = bcryptjs.hashSync(password, salt);


    //Guardar la base de datos 
    await usuario.save();

    res.json({
        id: '1',
        msg: ('Obtener_Bienvenido Controller'),
        usuario
    });
};

const DeleteUser = async(req = request, res = response) => {
    const { id } = req.body;
    const usuarios = await UserModel.findByIdAndUpdate(id, { estado: false });
    res.json({
        id,
        usuarios
    });
};

module.exports = {
    GetUser,
    PostUser,
    PutUser,
    DeleteUser
}