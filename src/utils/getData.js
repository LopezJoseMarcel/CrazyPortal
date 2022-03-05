const API = 'https://rickandmortyapi.com/api/character/'

const getData = async (id) => {
  const apiURl = id ? `${API}${id}` : API;
  try {
      const response = await fetch(apiURl);
      const data = await response.json(); //convertir la respuesta del servido a un objeto json que pueda ser iterable
      return data;
    } catch (error) {
      console.error('Fetch Error', error);
  };
};

export default getData;