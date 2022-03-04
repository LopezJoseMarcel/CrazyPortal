const Home = () => {
    const view = `
  <div class="Characters"> <!--estructura de los personajes que vamos a presentar--> 
<article class="Character-item">               <!-- AQui viene cada personaje-->
  <a href="#/1/">                      <!--Se va a ir a un Id que en este caso seria el id 1-->
      <img src="image" alt="name">
      <h2>Name</h2>         <!--Nombre del Personaje-->
  </a>
</article>
</div>
    `;
    return view;
}

export default Home;