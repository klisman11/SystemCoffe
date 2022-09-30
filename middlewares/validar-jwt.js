const jwt = require('jsonwebtoken');
const { response, request } = require('express');
const Usuario = require('../models/UserModel');


const validarJWT = async(req = request, res = response, next) => {
    const token = req.header('token');
    if (!token) {
        return res.status(401).json({
            msg: "no hay token en la peticion"
        });
    }

    try {
        const { uid } = jwt.verify(token, process.env.SECRETORPRIVATEKEY);

        const usuario = await Usuario.findById(uid);
        //autenticacion con otro usuario
        req.usuario = usuario;

        //Verifica que el usuario no este vacio 
        if (!usuario) {
            return res.status(401).json({
                msg: "No se encontro usuario"
            });
        }

        //verificar que el usuario no esta marcado como false
        if (!usuario.estado) {
            return res.status(401).json({
                msg: "Usuario eliminado"
            });
        }

        next();

    } catch (err) {

        console.log(err)
        res.status(401).json({
            msg: "no hay token en la peticion"
        })
    }


}

module.exports = {
    validarJWT
}