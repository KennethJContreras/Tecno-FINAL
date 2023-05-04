import mongoose from 'mongoose';

export class Database {
    constructor(){
        this.conectar();
    }

    conectar(){
        mongoose.connect('mongodb+srv://admin:1234@cluster1.evhe63b.mongodb.net/tecnoshop')
        .then(respuesta => {
            console.log("Se conectó a la base de datos: tecnoshop");
        })
        .catch(respuesta => {
            console.log("Error al conectarse a tecnoshop BD");
        })
    }
}