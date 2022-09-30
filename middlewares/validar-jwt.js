const jwt = require('jsonwebtoken');
const { response, request } = require('express');

const validarJWT = (req = request, res = response, next) => {
    const token = req.header('token');
    if (!token) {
        return res.status(401).json({
            msg: "no hay token en la peticion"
        });
    }

    try {
        const { uid } = jwt.verify(token, process.env.SECRETORPRIVATEKEY);
        req.uid = uid;
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