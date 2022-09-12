const { Schema, model } = require("mongoose");

const Rolchema = Schema({
    rol: {
        type: String,
        require: [true, 'campo obligatorio']
    },


});

module.exports = model('RolModel', Rolchema)