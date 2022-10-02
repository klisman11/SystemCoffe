const { Router } = require('express');
const { check } = require('express-validator');
const {
    GetProductos,
    ObtenerProductos,
    CrearProductos,
    ActualizarProductos,
    DeleteProductos
} = require('../controller/productos');
const { validarJWT } = require('../middlewares/validar-jwt');
const { response, request } = ('express');
const { validarcampos } = require('../middlewares/ValidarCampos');


const router = Router();
//Obtener todas las  categorias publlioo
router.get('/', GetProductos);


//Obtener todas las  categorias publlio por id 
router.get('/:id', [
    check('id', 'No es un id de Mongo válido').isMongoId(),
    // check('Id no existe').custom(isIdCategoria),
    validarcampos
], ObtenerProductos);

//Crear categoria privado- cualquier personas que tenga token
router.post('/', [
    validarJWT,
    check('nombre', 'Nombre es obligatorio').not().isEmpty(),
    validarcampos,
    CrearProductos

], (req, res) => {
    res.json('Agregar categoria')

});


//Actualizar categoria 
router.put('/:id', [
    check('nombre', 'Nombre es obligatorio').not().isEmpty(),
    validarcampos
], ActualizarProductos);
//Borrar categoria Administrador 
router.delete('/:id', [
    check('id', 'No es un id de Mongo válido').isMongoId(),

], DeleteProductos);


module.exports = router;