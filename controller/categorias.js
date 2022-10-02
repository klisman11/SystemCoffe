const { request, response } = ('express');
const categoria = require('../models/categorias');

//Obtener categoria paginado totoal
const GetCategorias = async(req = request, res = response) => {
    const { limite = 5, desde = 0 } = req.query;
    const query = { estado: true };
    const [total, categorias] = await Promise.all([
        categoria.count(query),
        categoria.find(query)
        .populate('usuario', 'nombre')
        .skip(Number(desde))
        .limit(Number(limite))
    ])

    res.json({
        total,
        categorias
    });
};


const CrearCategoria = async(req, res = response) => {
    const nombre = req.body.nombre.toUpperCase();
    const categoriaDB = await categoria.findOne({ nombre });

    if (categoriaDB) {
        return res.json({
            msg: `La categoria ${categoriaDB.nombre}, ya existe`
        });
    }

    //Generar la data a guardar 
    const data = {
        nombre,
        usuario: req.usuario._id
    }
    const categorias = new categoria(data);

    await categorias.save();
    res.status(201).json(categorias);
}


module.exports = {
    CrearCategoria,
    GetCategorias
}