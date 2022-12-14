const { Schema, model } = require("mongoose");

const CategoriaSchema = Schema({
    nombre: {
        type: String,
        require: [true, 'campo obligatorio'],
        unique: true
    },
    estado: {
        type: Boolean,
        default: true,
        require: true
    },
    usuario: {
        type: Schema.Types.ObjectId,
        ref: 'UserModel',
        require: true
    }


});
CategoriaSchema.methods.toJSON = function() {
    const { __v, ...data } = this.toObject();

    return data;
}
module.exports = model('Categoria', CategoriaSchema)