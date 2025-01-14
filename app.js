//aquí importa el objeto con todo su contenido
const {crearArchivo} = require('./helpers/multiplicar');
var colors = require('colors');
//aqui me devuelve un array //esto imprime un array que desglosa cada una de las palabra que yo he escrito
const base=process.argv[2];
//aquí ejecutaría la app con lo que le introduzca. Como puedes observar crea el archivo txt
crearArchivo(base)
.then(nombreArchivo=>console.log(`archivo creado ${nombreArchivo}`))
.catch(err=> console.log(err));

//implemetno la libreria de colores
var colors = require('colors');
 
console.log('hello'.green); // outputs green text
console.log('i like cake and pies'.underline.red) // outputs red underlined text
console.log('inverse the color'.inverse); // inverses the color
console.log('OMG Rainbows!'.rainbow); // rainbow
console.log('Run the trap'.trap); // Drops the bass