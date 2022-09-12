const { validationResult } = require('express-validator');

// Se añade next() porque si no llego al error sigue al siguiente middleware
const validarcampos = (req, res, next) => {
    const error = validationResult(req);
    if (!error.isEmpty()) {
        return res.status(400).json(error);
    }
    next();
}

module.exports = {
    validarcampos
}