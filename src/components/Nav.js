import React from 'react'
///Nos trae el logo de la pokeapi
const Nav = () => {
 
    let imgUrl ="https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png";

  return (
    <nav className='banner'>
      <div>
        <img src={imgUrl} alt="pokeapi-logo" className="navbar-image"/>
      </div>
      
    </nav>
  );
}

export default Nav