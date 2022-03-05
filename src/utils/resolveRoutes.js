//se encarga cuando tenemos la ruta del usuario quiero saber entonces quiero saber a que template lo voy a mandar 
//al home o a la seccion de rutas o si no lo encuentro lo envio al error 404

const resolveRoutes = (route) => {//recibe la ruta
    if (route.length <= 3) {
        let validRoute = route === '/' ? route : '/:id';
        return validRoute;
    }
    return `/${route}`;
};

export default resolveRoutes;