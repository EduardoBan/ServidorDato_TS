import express, {Application} from "express";

class Server{

    private app: Application;
    private port: string;

    constructor() { 
        this.app = express();
        this.port = process.env.Puerto_Dato || "3000"; // utilizo la variable de entorno con el puerto o 3000 por defecto
        
    }
    listen (){
this.app.listen(this.port, ()=>{
    console.log("Servidor corriendo en el puerto: " + this.port);
})

    }
}
export default Server;