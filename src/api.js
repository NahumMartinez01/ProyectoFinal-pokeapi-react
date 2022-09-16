const url = 'https://pokeapi.co/api/v2';
const consulta = {
     pokemon: 'pokemon',
   
  }

export async function fetchPokemon(pokemon) {
   return fetch(`${url}/${consulta.pokemon}/${pokemon}`)
}

export async function fetchType() {
    try {
        let url =`https://pokeapi.co/api/v2/type/grass`;
        const response = await fetch(url);
        const data = await response.json();
        return data;
      } catch (error) {
          console.log(error)
      }
 }

 export async function fetchAllType(){
    try {
      let url =`https://pokeapi.co/api/v2/type/`;
      const response = await fetch(url);
      const data = await response.json();
      return data;
    } catch (error) {
        console.log(error)
    }
  }


export async function fetchAllPokemon(limit = 21 , offset = 0){
  try {
    let url =`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`;
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
      console.log(error)
  }
}

export async function fetchNormal(url) {
  try {
      const response = await fetch(url);
      const data = await response.json();
      return data;
  } catch (err) {
    console.log(err)
  }
}