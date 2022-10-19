import React from "react";
import { NavLink } from "react-router-dom";
import './Warcraft.css';
import warcraftMovie from './warcraftMovie.jpg';



const Warcraft = (props) => {
    const warCharacters = props.charactersTest.filter((elem)=>{
        if(elem.movie1==='Warcraft, The Beginning' || elem.movie2==='Warcraft, The Beginning' || elem.movie3==='Warcraft, The Beginning' || elem.movie4==='Warcraft, The Beginning' || elem.movie5==='Warcraft, The Beginning' || elem.movie6==='Warcraft, The Beginning' || elem.movie7==='Warcraft, The Beginning') return elem;
    });

const orcCharacters = warCharacters.filter((elem,index)=>{
    if(elem.race =='orc') return true;
}).map((elem,index)=>{
    return <li key={elem.id}><NavLink className='warcraftNav' to={'/'+elem.person.split(' ',1)[0]}>{elem.person}</NavLink> </li>
});
const humanCharacters = warCharacters.filter((elem,index)=>{
    if(elem.race =='human') return true;
}).map((elem,index)=>{
    return <li key={elem.id}><NavLink className='warcraftNav' to={'/'+elem.person.split(' ',1)[0]}>{elem.person}</NavLink> </li> 
});
const wizardCharacters = warCharacters.filter((elem,index)=>{
    if(elem.race =='wizard') return true;
}).map((elem,index)=>{
    return <li key={elem.id}><NavLink className='warcraftNav' to={'/'+elem.person.split(' ',1)[0]}>{elem.person}</NavLink> </li>
});
const dwarfCharacters = warCharacters.filter((elem,index)=>{
    if(elem.race =='dwarf') return true;
}).map((elem,index)=>{
    return <li key={elem.id}><NavLink className='warcraftNav' to={'/'+elem.person.split(' ',1)[0]}>{elem.person}</NavLink> </li>
});

    return (
        <div className="warcraftMoviePage">
            <h1>Warcraft, The Beginning</h1>
            <hr />
            <img style={{width:'50%'}} src={warcraftMovie} alt="warcraftMovie" className="warcraftMovie" />
            <p>Warcraft (alternatively known as Warcraft: The Beginning) is a 2016 action fantasy film based
            on the video game series and franchise of the same name. Directed by Duncan Jones and written
            by Charles Leavitt and Jones, it stars Travis Fimmel, Paula Patton, Ben Foster, Dominic Cooper,
            Toby Kebbell, Ben Schnetzer, Robert Kazinsky, Clancy Brown, and Daniel Wu. The film follows
            Anduin Lothar of Stormwind and Durotan of the Frostwolf clan as heroes set on opposite sides
            of a growing war, as the warlock Gul'dan leads the Horde to invade Azeroth using a magic
            portal. Together, a few human heroes and dissenting Orcs must attempt to stop the true
            evil behind this war and restore peace.
            </p>
            <hr />
            <h3>main characters:</h3>
            <h3>Orcs:</h3>
            <ul>
                {orcCharacters}
            </ul> 
            <hr  />            
            <h3>Humans:</h3>
            <ul>
                {humanCharacters}
            </ul>
            <hr  />  
            <h3>Dwarfs:</h3>
            <ul>
                {dwarfCharacters}
            </ul>
            <hr  />  
            <h3>Wizards:</h3>
            <ul>
                {wizardCharacters}
            </ul>
        </div>
    );
}

export default Warcraft