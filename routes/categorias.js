const { Router } = require('express');
const { check } = require('express-validator');
const { response, request } = ('express');
const { validarcampos } = require('../middlewares/ValidarCampos');


const router = Router();

//Obtener todas las  categorias publlioo
router.get('/', (req, res) => {
    res.json('Obetener')
});


//Obtener todas las  categorias publlio por id 
router.get('/:id', (req, res) => {
    res.json('Obetener por id ')

});

//Crear categoria privado
router.post('/', (req, res) => {
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