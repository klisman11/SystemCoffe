const { response } = ('express');
const { request } = require('express');
const UserModel = require('../models/UserModel');
const Usuario = require('../models/UserModel');
const bcryptjs = require('bcryptjs');
const { generarJWT } = require('../helpers/generar-jwt');


const login = async(req = request, res = response) => {
    const { correo, password } = req.body;
    try {
        const usuarios = await Usuario.findOne({ correo });
        // si el email existe
        if (!usuarios) {
            return res.status(400).json({
                msg: 'Usuario/Password no son correctos-correo'
            });
        }
        //Si el usuario esta activo 
        if (!usuarios.estado) {
            return res.status(400).json({
                msg: 'Usuario/Password no son correctos-estado'
            });
        }

        //verificar la contraseña
        const validapassword = bcryptjs.compareSync(password, usuarios.password);
        if (!validapassword) {
            return res.status(400).json({
                msg: 'Usuario/Password no son correctos-password'
            });
        }

        //Generar el JWT
        const token = await generarJWT(usuarios.id);

        res.json({
            msg: 'Ingreso al sistema',
            usuarios,
            token
        });

    } catch (error) {

    }



};

module.exports = {
    login
}