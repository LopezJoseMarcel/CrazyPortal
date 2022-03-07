import { join } from "path";
import getData from "../utils/getData";


const Home = async () => {
  const characters = await getData();
    const view = `
  <div class="Characters"> <!--estructura de los personajes que vamos a presentar--> 
     ${characters.results.map(character => `
        <article class="Character-item">               <!-- AQui viene cada personaje-->
         <a href="#/${character.id}/">                      <!--Se va a ir a un Id que en este caso seria el id 1-->
          <img class="Character-image" src="${character.image}" alt="${character.name}">
          <h2>${character.name}</h2>         <!--Nombre del Personaje-->
         </a>
        </article>
     `).join('')}   
  </div>
    `;
    return view;
};

export default Home;

//join('') especifica como se van a separar los elemntos de un arreglo