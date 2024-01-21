
import React from 'react';
import './Card.css'
import { Link } from 'react-router-dom';


export default function Card(props) {
 
   return(
      <div  className = "carta">
         <h2>key = {props.id}</h2>
          <button  className='botonEliminar' onClick={() => {props.onClose(props.id)}}>X</button>
          <h2 className='numeroDeCarta'>{props.id}</h2>
         <Link to={`/detail/${props.id}`}>
          <h2 className='nombre'>{props.name}</h2>
         </Link>
          <h2 className='status'> {props.status}</h2>
          <h2 className='species'>{props.species}</h2>
          <h2 className='gender'>{props.gender}</h2>
          <h2 className='origen'> {props.origen}</h2>
          <img src={props.image} alt=''  margin = '10px'/>
         
      </div>
    
   );
}
