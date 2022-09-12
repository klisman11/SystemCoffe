const Role = require('../models/RolModel');
const Usuario = require('../models/UserModel');
const esRolevalido = async(rol = '') => {
    const ExisteRol = await Role.findOne({ rol });
    if (!ExisteRol) {
        throw Error(`El error ${rol} no existe base de datos`)
    }
}

const esEmailvalido = async(correo = '') => {
    //Verificar si el correo existe
    const uniquecorreo = await Usuario.findOne({ correo });
    if (uniquecorreo) {
        throw Error(`El error ${uniquecorreo.correo} esta duplicado`)

    }

}

const isIdtrue = async(id = '') => {
    const idreal = await Usuario.findById(id);
    if (!idreal) {
        throw Error(`El id ${idreal.id} no existe`)

    }
}

module.exports = {
    esRolevalido,
    esEmailvalido,
    isIdtrue
}