const { Schema, model } = require("mongoose");

const Userchema = Schema({
    nombre: {
        type: String,
        require: [true, 'campo obligatorio']
    },
    correo: {
        type: String,
        require: [true, 'campo obligatorio'],
        unique: true
    },
    password: {
        type: String,
        require: [true, 'campo obligatorio']

    },
    img: {
        type: String,
    },
    rol: {
        type: String,
        require: true,
        emun: ['ADMIN_ROL', 'USER_ROL']
    },
    estado: {
        type: Boolean,
        default: true
    },
    google: {
        type: Boolean,
        default: false

    }

});

Userchema.methods.toJSON = function() {
    const { __v, password, ...user } = this.toObject();
    return user;
}

module.exports = model('UserModel', Userchema)