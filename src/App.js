import { useState,useEffect } from 'react';
import { fetchAllPokemon,fetchNormal, fetchPokemon, fetchType } from './api';
import Search from './components/Search';
import './App.css';
import Pokemones from './components/Pokemones';
import { type } from '@testing-library/user-event/dist/type';
import Nav from './components/Nav';



function App() {
  const [pokemon,setPokemon]  = useState([])
  const [tipo, setTipo] = useState([])
  /* const [pagination , setPagination] = useState([]) */
  const [search, setSearching] = useState(false)
  const [cargando, setCargando] = useState(false);

  //////Llamamos la api para que me traiga los primeros 20 pokemones
  const fetchPagination = async() => {
    setCargando(true)
   try {
    
        const res = await fetchAllPokemon();
        const promise = res.results.map(async(pokemon) =>{
          return fetchNormal(pokemon.url)
        })       
        const results = await Promise.all(promise);
        setPokemon(results)
        setCargando(false)
   } catch (error) {
      console.log(error)
   }
  }
   //////Llamamos la api para que me traiga pokemones especificos
  const getPokemon = async(busqueda) => {

    if(!busqueda) {
      return fetchPagination();
    }
    setCargando(true)
    setSearching(true);
      try {
        const res = await fetchPokemon(busqueda);
        const data = await res.json();
       setPokemon([data])
        setCargando(false);
      } catch (error) {
          console.log(error)
      }
  }


 //////Llamamos la api para que me traiga los tipos de pokemon
  const fetchType = async() => {
    setCargando(true)
   try {
    const res =  await fetch("https://pokeapi.co/api/v2/type/")
    const data = await res.json();
    setTipo(data.results)
   } catch (error) {
      console.log(error)
   }
  }

 //////traemos el value de los option para llamar a los pokemones por tipo
  const handleChange = async(e) => {
    setPokemon([]);
    if(e.target.value === "mostrar-todo"){
      return fetchPagination();
    }
    try {
    
      
      const res = await fetch(e.target.value)
      const data = await res.json();

      data.pokemon.forEach(async (type) => {
        const result = await fetch(type.pokemon.url)
        const datos = await result.json();

        setPokemon(pokemon =>[...pokemon,datos]);
      })

    } catch (error) {
        console.log(error)
    }  
    setPokemon([])
  }

  
  
  useEffect(() => {
   fetchType()
  },[])

  useEffect(() =>{
   if(!search) {
    fetchPagination()    
   }
  },[search])
  
 /* console.log(pokemon) */

  return (
     <div className="container">
        <Nav/>

        <Search getPokemon={getPokemon}/>
        
        <div className='container-select'>
          <select className='select-form' onChange={handleChange}>
              <option value="mostrar-todo">Mostrar Todo</option>
            {
              tipo.map(type =>(
                  <option key={type.name} value={type.url}>
                      {type.name}
                  </option>  
              ))
            }
          </select>
        </div>


        {cargando ? (
          <div>
              Cargando Pokemones.....
          </div>
        ):<Pokemones pokemon={pokemon}/>}
       

     
       
    </div>
  
  );
}



export default App;
