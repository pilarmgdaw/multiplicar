//esta línea permite acceder a funciones de manipulación de archivos usando promesas, mejorando la eficiencia y estructura del código en aplicaciones Node.js.
const { rejects } = require('assert');
const fs = require('fs');
const { resolve } = require('path');
const crearArchivo=(base=5)=>{
//va a devolver una promesa
    return new Promise(
        (resolve,rejects)=>{
            console.clear();
            console.log("Tabla del "+base);
            salida='';
            for(let i=0;i<=10;i++){
            salida+=`${base} x ${i}= ${base*i}\n`;
            //las comas de arriba son para no tener que espaciar cada elemento con un signo + y no tener que esta poniendo comillas entre medias
            }

            let nombreArchivo=`tabla-${base}.txt`;
            //si hay un error, escribe por consola el nombre dl archivo
            fs.writeFile(nombreArchivo,salida,(err)=>{
                if(err) {
                    rejects(err);
                }else{
                    resolve(nombreArchivo)
                }
            })
        }
    )

}    
//esto exportaría el archivo
module.exports= {crearArchivo : crearArchivo}
        



