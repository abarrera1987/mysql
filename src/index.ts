import Server from './server/server';
import router from './routers/router';
import MySql from './mysql/mysql';

const server = Server.init(3000);

server.app.use(router);

MySql.instance;

server.start( () => {
    console.log("Servidor en el puerto 3000")
})