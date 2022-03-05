const getHash = () =>                       //obtener el hash  Sin el .slice sale #1 con el slice sale "1"
location.hash.slice(1).toLocaleLowerCase().split('/')[1] || '/';  //split: de esa cadena de texto lo convertimos a un arreglo y eliminamos los "/"
                                        // la cadena seria asi ['','1','']: [1]=> con esto traigo solo el id
                                        //                       0  1  0
export default getHash;