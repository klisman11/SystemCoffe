const { request, response } = ('express');
const { body } = require('express-validator');
const producto = require('../models/productos');

//Obtener categoria paginado totoal
const GetProductos = async(req = request, res = response) => {
    const { limite = 5, desde = 0 } = req.query;
    const query = { estado: true };
    const [total, productos] = await Promise.all([
        producto.count(query),
        producto.find(query)
        .populate('categoria', 'nombre')
        .populate('usuario', 'nombre')
        .skip(Number(desde))
        .limit(Number(limite))
    ])

    res.json({
        total,
        productos
    });
};

//obtener producto por id 
const ObtenerProductos = async(req, res) => {
        const { id } = req.params;
        const idproducto = await producto.findById(id)
            .populate('usuario', 'nombre')
            .populate('categoria', 'nombre');
        res.json(idproducto);

    }
    //Crear producto
const CrearProductos = async(req, res = response) => {
    const { usuario, ...body } = req.body;

    const productoDB = await producto.findOne({ nombre: req.nombre });

    if (productoDB) {
        return res.json({
            msg: `La categoria ${productoDB.nombre}, ya existe`
        });
    }

    //Generar la data a guardar 
    const data = {
        ...body,
        nombre: req.body.nombre.toUpperCase(),
        usuario: req.usuario._id
    }
    const productos = new producto(data);

    await productos.save();
    res.status(201).json(productos);
}

const ActualizarProductos = async(req, res = response) => {
    const id = req.params;
    const { estado, usuario, ...data } = req.body;
    if (data.nombre) {
        data.nombre = data.nombre.toUpperCase();
    }
    data.usuario = req.usuario._id;

    const productobusqueda = await producto.findByIdAndUpdate(id, data, { new: true });
    response.json(productobusqueda);

}
const DeleteProductos = async(req = request, res = response) => {
    const { id } = req.params;
    const productos = await producto.findByIdAndUpdate(id, { estado: false });

    res.json({
        productos


    });
};



module.exports = {
    GetProductos,
    ObtenerProductos,
    CrearProductos,
    ActualizarProductos,
    DeleteProductos
}