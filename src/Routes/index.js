//Importar los templates y las paginas  que creamos y generar el manejo de rutas para hacer render en nuestra aplicacion
import Header from "../templates/Header";
import Home from "../pages/Home";
import Character from "../pages/Character";
import Error404 from "../pages/Error404";

import getHash from "../utils/getHash";
import resolveRoutes from "../utils/resolveRoutes";

//rutas que vamos a manejar dentro de nuestra aplicacion
 const routes = {//objeto que va a establecer las rutas que va a tener la aplicacion
  '/': Home,
  '/:id': Character,  //valor dinamico que va a ser diferente para cada personaje
  '/contact': 'Contact',
 }; 

 //manejador de la interaccion del proyecto
 //realizaremos el render de /public/index.html
//Se usa async ya que tenemos que esperar que algo este sucediendo para realizar algo
 const router = async () => {
   const header = null || document.getElementById('header');
   const content = null || document.getElementById('content');

   header.innerHTML = await Header();
   let hash = getHash();
   let route = await resolveRoutes(hash); //await porque tiene que esperar las validaciones necesarias 
   let render = routes[route] ? routes[route] : Error404;

   content.innerHTML = await render();
 } ;

 export default router;