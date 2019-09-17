"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mysql_1 = __importDefault(require("mysql"));
class MySql {
    constructor() {
        this.conectado = false;
        console.log('Clase inicializada');
        this.cnn = mysql_1.default.createConnection({
            host: "localhost",
            user: "root",
            password: "",
            database: 'my_db'
        });
        this.conectarDB();
    }
    conectarDB() {
        this.cnn.connect((err) => {
            if (err) {
                console.log(err.message);
                return;
            }
            this.conectado = true;
            console.log("conectado");
        });
    }
    static get instance() {
        return this._instance || (this._instance = new this());
    }
    static ejecutarQuery(query, callback) {
        this._instance.cnn.query(query, (err, result, field) => {
            if (err) {
                console.log(err.message);
                return callback(err);
            }
            callback(null, result);
        });
    }
}
exports.default = MySql;
