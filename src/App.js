import './App.css';
import Header from './Header/Header.js';
import Aside from './Aside/Aside.js';
import Main from './Main/Main.js';
import Quiz from './Quiz/Quiz.js';
import Login from './Login/Login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React from 'react';
import Footer from './Footer/Footer';
import Lotr1 from './movies/Lotr1/Lotr1';
import Lotr2 from './movies/Lotr2/Lotr2';
import Lotr3 from './movies/Lotr3/Lotr3';
import Warcraft from './movies/Warcraft/Warcraft';
import Hobbit1 from './movies/Hobbit1/Hobbit1';
import Hobbit2 from './movies/Hobbit2/Hobbit2';
import Hobbit3 from './movies/Hobbit3/Hobbit3';
import AsideRaces from './Aside/AsideRaces';
import WarcraftAll from './characters/WarcraftAll';
import {charactersTest, asidePersons } from './state';



const App=(props) =>{

const charactersRouters = charactersTest.map((elem,index)=>{
  return <Route key={elem.person} path={'/'+elem.person.split(' ',1)[0]} element={<WarcraftAll warCh={elem}/>}/>;
});

const racesFilterHuman = charactersTest.filter((elem)=>{
  if(elem.race==='human') {return elem}
});
const racesFilterOrc= charactersTest.filter((elem)=>{
  if(elem.race==='orc') {return elem}
});
const racesFilterDwarf = charactersTest.filter((elem)=>{
  if(elem.race==='dwarf') {return elem}
});
const racesFilterWizard = charactersTest.filter((elem)=>{
  if(elem.race==='wizard') {return elem}
});
const racesFilterUruk= charactersTest.filter((elem)=>{
  if(elem.race==='uruk-hai') {return elem}
});
const racesFilterDarkWizard = charactersTest.filter((elem)=>{
  if(elem.race==='dark-wizard') {return elem}
});
const racesFilterElf = charactersTest.filter((elem)=>{
  if(elem.race==='elf') {return elem}
});
const racesFilterHobbit = charactersTest.filter((elem)=>{
  if(elem.race==='hobbit') {return elem}
});
const racesFilterTroll= charactersTest.filter((elem)=>{
  if(elem.race==='troll') {return elem}
});
const racesFilterGoblin= charactersTest.filter((elem)=>{
  if(elem.race==='goblin') {return elem}
});
const racesFilterSkinChanger= charactersTest.filter((elem)=>{
  if(elem.race==='skin-changer') {return elem}
});
const racesFilterEnt= charactersTest.filter((elem)=>{
  if(elem.race==='ent') {return elem}
});

  return (
    <BrowserRouter>
      <div className="App">
        <Header  />
        <Aside allLight={asidePersons.allLight} allDark={asidePersons.allDark} />
      
        <Routes>
          <Route path='/' element={<Main  />}/>
          <Route path='/quiz' element={<Quiz  />}/>
          <Route path='/login' element={<Login  />}/>   
          <Route path='/lotr1' element={<Lotr1  charactersTest={charactersTest}/>}/>     
          <Route path='/lotr2' element={<Lotr2  charactersTest={charactersTest}/>}/>    
          <Route path='/lotr3' element={<Lotr3  charactersTest={charactersTest}/>}/> 
          <Route path='/warcraft' element={<Warcraft charactersTest={charactersTest} />}/>
          <Route path='/hobbit1' element={<Hobbit1 charactersTest={charactersTest}/>}/>
          <Route path='/hobbit2' element={<Hobbit2 charactersTest={charactersTest}/>}/> 
          <Route path='/hobbit3' element={<Hobbit3 charactersTest={charactersTest}/>}/>   


          {charactersRouters}

          <Route path ='/humans' element={<AsideRaces persons={racesFilterHuman} />}/>
          <Route path ='/dwarves' element={<AsideRaces persons={racesFilterDwarf} />}/>
          <Route path ='/elves' element={<AsideRaces persons={racesFilterElf} />}/>
          <Route path ='/lwizards' element={<AsideRaces persons={racesFilterWizard}/>}/>
          <Route path ='/orcs' element={<AsideRaces persons={racesFilterOrc}/>}/>
          <Route path ='/hobbits' element={<AsideRaces persons={racesFilterHobbit}/>}/>
          <Route path ='/goblins' element={<AsideRaces persons={racesFilterGoblin}/>}/>
          <Route path ='/uruks' element={<AsideRaces persons={racesFilterUruk}/>}/>
          <Route path ='/trolls' element={<AsideRaces persons={racesFilterTroll}/>}/>
          <Route path ='/dwizards' element={<AsideRaces persons={racesFilterDarkWizard}/>}/>
          <Route path ='/ents' element={<AsideRaces persons={racesFilterEnt}/>}/>

        </Routes>
        
        <Footer  />
      </div>
    </BrowserRouter>
  );
}




export default App;
