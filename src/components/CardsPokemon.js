import React from 'react'
import '../App.css'
const CardsPokemon = ({character}) => {
    //console.log(character)

    ////con este componente renderizamos las cards de los pokemones
  return (
        <div className="card-pokemons">

        <div className='card-img'>
            <img src={character.sprites.front_default} className="card-img-top" alt={character.name}/>
        </div> 
            
        <div className="card-body">
               <div className='card-id'>
                    <p># 0{character.id}</p>
               </div>  
                <p className="text-name">{character.name.toUpperCase()}</p>
                <p className="text-altura">Altura: {character.height}</p>       
            
        </div>
        <div className='card-footer'>
                {
                    character.types.map((type,key) => (
                         
                            <span className='type-text' key={key.id}>{type.type.name.toUpperCase()}</span>
                    ))    
                }
        </div> 
    </div>
  )
}

export default CardsPokemon