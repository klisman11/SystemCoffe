const { request, response } = ('express');
const categoria = require('../models/categorias');
const User = require('../models/UserModel');
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

//obtener categoria por id 
const ObetenerCategoria = async(req, res) => {
    const { id } = req.params;
    const idcategoria = await categoria.findById(id).populate('usuario', 'nombre');
    res.json(idcategoria);

}


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

const ActualizarCategoria = async(req, res = response) => {
    const id = req.params;
    const { estado, usuario, ...data } = req.body;
    data.nombre = data.nombre.toUpperCase();

    console.log(valor);

    const categoriabusqueda = await categoria.findByIdAndUpdate(id, data, { new: true });
    response.json(categoriabusqueda);

}
const DeleteCategoria = async(req = request, res = response) => {
    const { id } = req.params;
    const categorias = await categoria.findByIdAndUpdate(id, { estado: false });

    res.json({
        categorias


    });
};


module.exports = {
    CrearCategoria,
    GetCategorias,
    ObetenerCategoria,
    ActualizarCategoria,
    DeleteCategoria
}