import React from 'react'
import CardsPokemon from './CardsPokemon'
import '../App.css'

const Pokemones = ({pokemon}) => {
  //  console.log(pokemon)
  ///Con este componente llamamos al componente cardsPokemon.js para que nos muestre las cards de pokemon
  return (
    <div className='container'>
        <div>
            <h1 className='text-h1'>Lista de pokemones</h1>
        </div>
        <div className='grid-cards'>
            {
                pokemon.map(character =>(
                   <CardsPokemon character={character} key={character.id}/>
                ))
            }
        </div>
    </div>
  )
}

export default Pokemones