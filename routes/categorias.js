const { Router } = require('express');
const { check } = require('express-validator');
const { isIdCategoria } = require('../helpers/DBValidator');
const { validarJWT } = require('../middlewares/validar-jwt');

const { CrearCategoria, GetCategorias, ObetenerCategoria, ActualizarCategoria, DeleteCategoria } = require("../controller/categorias");
const { response, request } = ('express');
const { validarcampos } = require('../middlewares/ValidarCampos');


const router = Router();
//Obtener todas las  categorias publlioo
router.get('/', GetCategorias);


//Obtener todas las  categorias publlio por id 
router.get('/:id', [
    check('id', 'No es un id de Mongo válido').isMongoId(),
    // check('Id no existe').custom(isIdCategoria),
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
//router.put('/:id', [
//  check('nombre', 'Nombre es obligatorio').not().isEmpty(),
//validarcampos
//], ActualizarCategoria);
//Borrar categoria Administrador 
router.delete('/:id', [
    check('id', 'No es un id de Mongo válido').isMongoId(),

], DeleteCategoria);


module.exports = router;