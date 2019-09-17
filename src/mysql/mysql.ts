import mysql from 'mysql';

export default class MySql{

    private static _instance: MySql;

    cnn: mysql.Connection;
    conectado: boolean = false;

    constructor(){
        console.log('Clase inicializada');

        this.cnn = mysql.createConnection({
            host: "localhost",
            user: "root",
            password: "",
            database: 'my_db'
        });

        this.conectarDB();
    }

    private conectarDB(){

        this.cnn.connect( (err: mysql.MysqlError ) => {

            if(err){
                console.log(err.message);
                return;
            }

            this.conectado = true;
            console.log("conectado");

        });
    }

    public static get instance(){
        return this._instance || (this._instance = new this() );
    }

    static ejecutarQuery(query: string, callback: Function) {

        this._instance.cnn.query(query, (err, result: Object[], field)=>{

            if(err){
                console.log(err.message);
                return callback( err );
            }
            callback( null, result)
        });
    }
}