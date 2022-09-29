const { Router } = require('express');
const { GetUser, PutUser, PostUser, DeleteUser } = require('../controller/user');
const { check } = require('express-validator');
const { esRolevalido, esEmailvalido, isIdtrue } = require('../helpers/DBValidator');
const { login } = require('../controller/auth');
const { validarcampos } = require('../middlewares/ValidarCampos');

const router = Router();

router.post('/login', [
    check('correo', 'El correo no existe').isEmail(),
    validarcampos

], login);

module.exports = router;