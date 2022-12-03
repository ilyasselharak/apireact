import './App.css';
import { useEffect,useState } from 'react';
import Header from './components/Header';
import About from './components/About';
import {BrowserRouter,Routes,Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import axios from 'axios';

function App() {
  const [character,setcharacter]=useState([])
  const [image,setimage]=useState([])
  useEffect(()=>{
    axios.get(`https://rickandmortyapi.com/api/character`)
.then(response=>{
  
  setcharacter(response.data.results[0].name)
  setimage(response.data.results[0].image)

})
.catch(err=>{console.log(err)})
  },[])

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route element={<About/>} path='/about'/>
        <Route path="/" element={<HomePage imgUrl={image} name={character}/>}/>
      </Routes>

    </BrowserRouter>
  );
}

export default App;