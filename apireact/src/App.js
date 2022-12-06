import './App.css';
import { useEffect,useState } from 'react';
import Header from './components/Header';
import About from './components/About';
import {BrowserRouter,Routes,Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import Detail from './components/Detail';
import axios from 'axios';

function App() {
  const [character,setcharacter]=useState([])

  useEffect(()=>{
    axios.get(`https://rickandmortyapi.com/api/character`)
.then(response=>{
  setcharacter(response.data.results)

})
.catch(err=>{console.log(err)})
  },[])

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route element={<About/>} path='/about'/>
        <Route path="/" element={<HomePage character={character} fun={setcharacter}/>}/>
        <Route path="/detail/:characterId" element={<Detail/>}/>
      </Routes>

    </BrowserRouter>
  );
}

export default App;
