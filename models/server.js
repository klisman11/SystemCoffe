const express = require('express')
var cors = require('cors');
const { dbConection } = require('../database/config');
class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT
        this.middleware();
        //Conectar a la base de datos 
        this.conectarDB();

        this.paths = {
            Auth: '/auth',
            Categorias: '/categorias',
            User: '/user'
        }

        this.routes();
    }

    //Para enviarle un end point que es codigo segmentado
    routes() {
        this.app.use(this.paths.Auth, require('../routes/user'));
        this.app.use(this.paths.User, require('../routes/auth'));
        this.app.use(this.paths.Categorias, require('../routes/categorias'));
    }

    async conectarDB() {
            await dbConection();
        }
        //Para enviar la ruta de un html que esta en public 
    middleware() {
        //CORS significa Cross-Origin Resource Sharing, y es una política a nivel de navegador web que se aplica para prevenir que el dominio A evite acceder a recursos del dominio B usando solicitudes del tipo AJAX como cuando usamos fetch() o XMLHttpRequest.
        this.app.use(cors());
        this.app.use(express.static('public'))
            //Lectura de peticiones 
        this.app.use(express.json());

    }

    listen() {
        this.app.listen(this.port, () => {
            console.log('Run server', this.port);
        })
    }

}

module.exports = Server;