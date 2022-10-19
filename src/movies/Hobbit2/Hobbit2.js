import React from "react";
import './Hobbit2.css';
import { NavLink } from "react-router-dom";
import hobbit2pic from './hobbit2.jpg';




const Hobbit2 = (props) => {
    const hobbit2Characters = props.charactersTest.filter((elem)=>{
        if(elem.movie1==='The Hobbit: The Desolation of Smaug (2013)' || elem.movie2==='The Hobbit: The Desolation of Smaug (2013)' || elem.movie3==='The Hobbit: The Desolation of Smaug (2013)' || elem.movie4==='The Hobbit: The Desolation of Smaug (2013)' || elem.movie5==='The Hobbit: The Desolation of Smaug (2013)' || elem.movie6==='The Hobbit: The Desolation of Smaug (2013)' || elem.movie7==='The Hobbit: The Desolation of Smaug (2013)') return elem;
    });

    const hobbitCharacters = hobbit2Characters.filter((elem,index)=>{
        if(elem.race =='hobbit') return true;
    }).map((elem,index)=>{
        return <li key={elem.id}><NavLink className="hobbit1Nav" to={'/'+elem.person.split(' ',1)[0]}>{elem.person}</NavLink> </li>
    });

    const skinChangerCharacters = hobbit2Characters.filter((elem,index)=>{
        if(elem.race =='skin-changer') return true;
    }).map((elem,index)=>{
        return <li key={elem.id}><NavLink className="hobbit2Nav" to={'/'+elem.person.split(' ',1)[0]}>{elem.person}</NavLink> </li>
    });

    const dragonCharacters = hobbit2Characters.filter((elem,index)=>{
        if(elem.race =='dragon') return true;
    }).map((elem,index)=>{
        return <li key={elem.id}><NavLink className="hobbit1Nav" to={'/'+elem.person.split(' ',1)[0]}>{elem.person}</NavLink> </li>
    });

    const humanCharacters = hobbit2Characters.filter((elem,index)=>{
        if(elem.race =='human') return true;
    }).map((elem,index)=>{
        return <li key={elem.id}><NavLink className="hobbit2Nav" to={'/'+elem.person.split(' ',1)[0]}>{elem.person}</NavLink> </li>
    });

    const orcCharacters = hobbit2Characters.filter((elem,index)=>{
        if(elem.race =='orc') return true;
    }).map((elem,index)=>{
        return <li key={elem.id}><NavLink className="hobbit2Nav" to={'/'+elem.person.split(' ',1)[0]}>{elem.person}</NavLink> </li>
    });

    const elfCharacters = hobbit2Characters.filter((elem,index)=>{
        if(elem.race =='elf') return true;
    }).map((elem,index)=>{
        return <li key={elem.id}><NavLink className="hobbit2Nav" to={'/'+elem.person.split(' ',1)[0]}>{elem.person}</NavLink> </li>
    });

    const dwarfCharacters = hobbit2Characters.filter((elem,index)=>{
        if(elem.race =='dwarf') return true;
    }).map((elem,index)=>{
        return <li key={elem.id}><NavLink className="hobbit2Nav" to={'/'+elem.person.split(' ',1)[0]}>{elem.person}</NavLink> </li>
    });

    const wizardCharacters = hobbit2Characters.filter((elem,index)=>{
        if(elem.race =='wizard') return true;
    }).map((elem,index)=>{
        return <li key={elem.id}><NavLink className="hobbit2Nav" to={'/'+elem.person.split(' ',1)[0]}>{elem.person}</NavLink> </li>
    });


    return (
        <div className="hobbit2MoviePage">
            <h1>The Hobbit: The Desolation of Smaug</h1>
            <hr  />
            <img src={hobbit2pic} />
            <p> The Hobbit: The Desolation of Smaug is a 2013 epic high fantasy adventure film directed by
                Peter Jackson from a screenplay by Fran Walsh, Philippa Boyens, Jackson, and Guillermo del Toro,
                based on the 1937 novel The Hobbit by J. R. R. Tolkien. The sequel to The Hobbit: An Unexpected
                Journey (2012), it is the second instalment in The Hobbit trilogy, acting as a prequel
                to Jackson's The Lord of the Rings trilogy.</p>
            <p> The film follows the titular character Bilbo Baggins as he accompanies Thorin Oakenshield and his
                fellow dwarves on a quest to reclaim the Lonely Mountain from the dragon Smaug. The film also
                features the vengeful pursuit of Azog the Defiler and Bolg, while Gandalf the Grey investigates
                a growing evil in the ruins of Dol Guldur.</p>
            <hr  />
            <h3>main characters:</h3>
            <h3>Orcs:</h3>
            <ul>
                {orcCharacters}
            </ul> 
            <hr  />         
            <h3>Elves:</h3>
            <ul>
                {elfCharacters}
            </ul>
            <hr  />  
            <h3>Hobbits:</h3>
            <ul>
                {hobbitCharacters}
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
            <hr  />  
            <h3>Humans:</h3>
            <ul>
                {humanCharacters}
            </ul>
            <hr  />  
            <h3>Skin-changer:</h3>
            <ul>
                {skinChangerCharacters}
            </ul>
            <hr  />  
            <h3>Dragons:</h3>
            <ul>
                {dragonCharacters}
            </ul>
        </div>
    );
}

export default Hobbit2;