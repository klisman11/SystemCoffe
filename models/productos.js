const { Schema, model } = require("mongoose");

const ProductosSchema = Schema({
    nombre: {
        type: String,
        require: [true, 'campo obligatorio'],
        unique: true
    },
    precio: {
        type: Number,
        default: 0
    },
    Descripcion: {
        type: String,
    },
    img: {
        type: String,
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
    },
    categoria: {
        type: Schema.Types.ObjectId,
        ref: 'Categoria',
        require: true
    }

});

ProductosSchema.methods.toJSON = function() {
    const { __v, ...data } = this.toObject();

    return data;
}
module.exports = model('Producto', ProductosSchema)