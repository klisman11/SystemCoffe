const { Router } = require('express');
const { GetUser, PutUser, PostUser, DeleteUser } = require('../controller/user');
const { check } = require('express-validator');
const { esRolevalido, esEmailvalido, isIdtrue } = require('../helpers/DBValidator');

const { validarcampos } = require('../middlewares/ValidarCampos');
const { validate } = require('../models/UserModel');
//Midleware se ejectura antes de pasar la ruta para validar cadenas 

const router = Router();

//Estatus para errores 
router.get('/', GetUser);
//End point Get
router.put('/:id', [
    check('id', 'El id no es valido').isMongoId(),
    check('id_no existe').custom(isIdtrue),
    validarcampos
], PutUser);

router.post('/:id', [
    check('nombre', 'El nombre es obligatorio').notEmpty(),
    check('password', 'La contraseña debe ser igual o mayor de 6 digitos').isLength({ min: 6 }),
    check('correo', 'El correo no es valido').isEmail(),
    check('correo').custom(esEmailvalido),
    check('rol').custom(esRolevalido),

    // check('rol', 'Rol no admitido').isIn(['USER_ROL', 'ADMIN_ROL']),
    validarcampos

], PostUser);

router.delete('/:id', [
    check('id', 'El id no es valido').isMongoId(),
    check('id_no existe').custom(isIdtrue),
    validarcampos
], DeleteUser);




module.exports = router;