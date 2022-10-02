const { Router } = require('express');
const { check } = require('express-validator');
const { validarJWT } = require('../middlewares/validar-jwt');
const { CrearCategoria, GetCategorias, ObetenerCategoria } = require("../controller/categorias")

const { response, request } = ('express');
const { validarcampos } = require('../middlewares/ValidarCampos');


const router = Router();

//Obtener todas las  categorias publlioo
router.get('/', GetCategorias);


//Obtener todas las  categorias publlio por id 
router.get('/:id', [
    check('id', 'No es un id de Mongo válido').isMongoId(),
    validarcampos
], ObetenerCategoria);

//Crear categoria privado- cualquier personas que tenga token
router.post('/', [
    validarJWT,
    check('nombre', 'Nombre es obligatorio').not().isEmpty(),
    validarcampos,
    CrearCategoria

], (req, res) => {
    res.json('Agregar categoria')

});


//Actualizar categoria 
router.put('/:id', (req, res) => {
    res.json('Actualizar categoria ')

});
//Borrar categoria Administrador 
router.delete('/:id', (req, res) => {
    res.json('Borrar categoria')

});


module.exports = router;