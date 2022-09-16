import { useState } from "react"

const Search = (props) => {
     const {getPokemon} = props;  
     
    const [search, setSearch]  = useState([]);
   
    ////con el handleCahnge le pasamos el valor del input a la funcion get para traer el pokemon buscado
    const handleChange = (e) => {
       
        const {value} = e.target
        setSearch(value);

        if(value.length === 0){
            getPokemon(null);
        }
        
    }

    
  return (
    <div className="container">
       <form onSubmit={(e) => e.preventDefault()}>
        <input type="text" className="form-control" placeholder="Busque un Pokemon" onChange={handleChange}/>
        <button type="button" className="btn" onClick={(e) => getPokemon(search.toLowerCase())}>Buscar</button>
       
           
    </form>
    </div>
  )
}

export default Search