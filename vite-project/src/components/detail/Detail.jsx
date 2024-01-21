import React, { useState, useEffect } from "react"
import axios from 'axios'
import { useParams } from "react-router-dom";
// import { URL } from "../../hooks/useApp";

function Detail(){
  const {id} = useParams();
  const [character, setCharacter] = useState({});
    
  useEffect(() => {
    axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
      
      console.log(data)
      console.log(data.name)
      if (data.name) {
        setCharacter(data);
      } else {
        window.alert('No hay personajes con ese ID');
        }
    }
  );
  return setCharacter({});
}, [id]);
                    // return(
                    //     <h1>Soy DETALI Bienvenidos</h1>
                    // )
                    
return(
    <div className="detail">
     <h1>Esta es la vista de la tarjeta {id}</h1>
      {/* <h2>{data.id}</h2>
      <h2 >{data.name}</h2>
      <h2 > {data.status}</h2>
      <h2>{data.species}</h2>
     <h2>{data.gender}</h2>
     <h2 > {data.origen}</h2>
     <img src={data.image} alt=''  margin = '10px'/> */}
   </div>
 )
};
export default Detail