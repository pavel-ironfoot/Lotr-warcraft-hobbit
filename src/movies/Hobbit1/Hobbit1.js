import React from "react";
import { NavLink } from "react-router-dom";
import './Hobbit1.css';
import hobbit1pic from './hobbit1.png';


const Hobbit1 = (props) => {
    const hobbit1Characters = props.charactersTest.filter((elem)=>{
        if(elem.movie1==='The Hobbit: An Unexpected Journey (2012)' || elem.movie2==='The Hobbit: An Unexpected Journey (2012)' || elem.movie3==='The Hobbit: An Unexpected Journey (2012)' || elem.movie4==='The Hobbit: An Unexpected Journey (2012)' || elem.movie5==='The Hobbit: An Unexpected Journey (2012)' || elem.movie6==='The Hobbit: An Unexpected Journey (2012)' || elem.movie7==='The Hobbit: An Unexpected Journey (2012)') return elem;
    });

    const hobbitCharacters = hobbit1Characters.filter((elem,index)=>{
        if(elem.race =='hobbit') return true;
    }).map((elem,index)=>{
        return <li key={elem.id}><NavLink className="hobbit1Nav" to={'/'+elem.person.split(' ',1)[0]}>{elem.person}</NavLink> </li>
    });

    const goblinCharacters = hobbit1Characters.filter((elem,index)=>{
        if(elem.race =='goblin') return true;
    }).map((elem,index)=>{
        return <li key={elem.id}><NavLink className="hobbit1Nav" to={'/'+elem.person.split(' ',1)[0]}>{elem.person}</NavLink> </li>
    });
    const trollCharacters = hobbit1Characters.filter((elem,index)=>{
        if(elem.race =='troll') return true;
    }).map((elem,index)=>{
        return <li key={elem.id}><NavLink className="hobbit1Nav" to={'/'+elem.person.split(' ',1)[0]}>{elem.person}</NavLink> </li>
    });

    const orcCharacters = hobbit1Characters.filter((elem,index)=>{
        if(elem.race =='orc') return true;
    }).map((elem,index)=>{
        return <li key={elem.id}><NavLink className="hobbit1Nav" to={'/'+elem.person.split(' ',1)[0]}>{elem.person}</NavLink> </li>
    });

    const elfCharacters = hobbit1Characters.filter((elem,index)=>{
        if(elem.race =='elf') return true;
    }).map((elem,index)=>{
        return <li key={elem.id}><NavLink className="hobbit1Nav" to={'/'+elem.person.split(' ',1)[0]}>{elem.person}</NavLink> </li>
    });

    const dwarfCharacters = hobbit1Characters.filter((elem,index)=>{
        if(elem.race =='dwarf') return true;
    }).map((elem,index)=>{
        return <li key={elem.id}><NavLink className="hobbit1Nav" to={'/'+elem.person.split(' ',1)[0]}>{elem.person}</NavLink> </li>
    });

    const wizardCharacters = hobbit1Characters.filter((elem,index)=>{
        if(elem.race =='wizard') return true;
    }).map((elem,index)=>{
        return <li key={elem.id}><NavLink className="hobbit1Nav" to={'/'+elem.person.split(' ',1)[0]}>{elem.person}</NavLink> </li>
    });


    return (
        <div className='hobbit1MoviePage'>
            <h1>The Hobbit: An Unexpected Journey</h1>
            <hr  />
            <img src={hobbit1pic} />
            <p> The Hobbit: An Unexpected Journey is a 2012 epic high fantasy adventure film directed
            by Peter Jackson from a screenplay by Fran Walsh, Philippa Boyens, Jackson, and Guillermo
            del Toro, based on the 1937 novel The Hobbit by J. R. R. Tolkien. It is the first instalment
            in The Hobbit trilogy, acting as a prequel to Jackson's The Lord of the Rings trilogy.</p>
            <p> The story is set in Middle-earth sixty years before the main events of The Lord of the Rings
            and portions of the film are adapted from the appendices to Tolkien's The Return of the King.
            An Unexpected Journey tells the tale of Bilbo Baggins (Martin Freeman), who is convinced by
            the wizard Gandalf (Ian McKellen) to accompany thirteen Dwarves, led by Thorin Oakenshield
            (Richard Armitage), on a quest to reclaim the Lonely Mountain from the dragon Smaug.</p>
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
            <h3>Dwarfs:</h3>
            <ul>
                {dwarfCharacters}
            </ul>
            <hr  />  
            <h3>Hobbits:</h3>
            <ul>
                {hobbitCharacters}
            </ul>
            <hr  /> 
            <h3>Wizards:</h3>
            <ul>
                {wizardCharacters}
            </ul>
            <hr  />  
            <h3>Goblins:</h3>
            <ul>
                {goblinCharacters}
            </ul>
            <hr  /> 
            <h3>Trolls:</h3>
            <ul>
                {trollCharacters}
            </ul>
        </div>
    );
}

export default Hobbit1;