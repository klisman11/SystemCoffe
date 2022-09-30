const { response, request } = require('express');

const esAdminRole = (req, res = response, next) => {
    if (!req.usuario) {
        return res.status(401).json({
            msg: "no hay token en la peticion"
        });
    }
    const { rol, nombre } = req.usuario;

    if (rol !== 'ADMIN_ROL') {
        return res.status(401).json({
            msg: `${nombre} no es administrador`
        });
    }

    next();

}

const tienerol = (...roles) => {
    return (req, res = response, next) => {
        if (!req.usuario) {
            return res.status(401).json({
                msg: "no hay token en la peticion"
            });
        }
        if (!roles.includes(req.usuario.rol)) {
            return res.status(401).json({
                msg: `El servicio requiere uno de estos roles ${roles}`
            });
        }
        next();

    }
}
module.exports = {
    esAdminRole,
    tienerol

}