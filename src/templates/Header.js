const Header = () => {
    const view = `
     <div class="Header-main">   <!--Establecer ciertas reglas y clases para la estructura del header-->
       <!--Logo-->
        <div class="Header-logo">
           <h1>
               <a href="/">Crazy Portal</a> <!--Nos va a llevar a la raiz del proyecto-->
           </h1>
        </div>
        <!--Navegacion-->
        <div class="Header-nav">
            <a href="#/about">
                About
            </a>
        </div>

     </div>
    `;
    return view;   
};  

export default Header;