//Generar el entorno de desarrollo locar que nos va a permitir ver nuestro desarrollo
import router from './Routes/index';
import "core-js/stable"; //importar esta lib
import "regenerator-runtime/runtime"; //importar esta otra lib
//manejador de la pagina web

window.addEventListener('load', router);
window.addEventListener('hashchange', router);//va a escuchar las rutas a donde me estoy moviendo , cuando cambie un hash va a desencadenar la logica

