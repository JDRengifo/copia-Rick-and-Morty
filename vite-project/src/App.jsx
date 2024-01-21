import styled from 'styled-components';
import Cards from './components/cards/Cards.jsx';
import './App.css'
import Nav from './components/nav/Nav.jsx';
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom'
import Home from './components/home/Home.jsx';
import About from './components/about/About.jsx';
import Detail from './components/detail/Detail.jsx';


  const Titulo = styled.h1`
    font-size: 5em;
    color: blue;
    text-align: center;
  `
 export const URL = 'https://rickandmortyapi.com/api/character/'

function App() {
  
  const [characters, setCharacters] = useState([]);

    const onSearch = (id) => {
    fetch(`${URL}${id}`)
      .then((response) => response.json())
      .then((data) => {
        setCharacters([...characters, data]);
      });
  };

  const onClose = (id) => {
    const charactersFilter = characters.filter((character) => character.id !== id);
    setCharacters(charactersFilter);
  }

  return (
  <>
      <div className='App' >
        <Nav onSearch={onSearch}/>
        <Titulo>COLECCION RICK AND MORTY</Titulo>
        <Routes>
          <Route path='/home' element={<Cards characters={characters} onClose={onClose}/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/detail/:id' element={<Detail/>}/>
        </Routes>
      </div> 
      </>
  )
}

export default App
