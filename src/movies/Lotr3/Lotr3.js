import React from "react";
import { NavLink } from "react-router-dom";
import './Lotr3.css';
import lotr3pic from './lotr3.jpg';


const Lotr3 = (props) => {
    const lotr3Characters = props.charactersTest.filter((elem)=>{
        if(elem.movie1==='The Return of the King (2003)' || elem.movie2==='The Return of the King (2003)' || elem.movie3==='The Return of the King (2003)' || elem.movie4==='The Return of the King (2003)' || elem.movie5==='The Return of the King (2003)' || elem.movie6==='The Return of the King (2003)' || elem.movie7==='The Return of the King (2003)') return elem;
    });

    const entCharacters = lotr3Characters.filter(elem=>elem.race==='ent').map((elem,index)=>{
        return <li key={elem.id}><NavLink className="lotr3Nav" to={'/'+elem.person.split(' ',1)[0]}>{elem.person}</NavLink> </li>
    });

    const nazgulCharacters = lotr3Characters.filter(elem=>elem.race==='nazgul').map((elem,index)=>{
        return <li key={elem.id}><NavLink className="lotr3Nav" to={'/'+elem.person.split(' ',1)[0]}>{elem.person}</NavLink> </li>
    });

    const humanCharacters = lotr3Characters.filter(elem=>elem.race==='human').map((elem,index)=>{
        return <li key={elem.id}><NavLink className="lotr1Nav" to={'/'+elem.person.split(' ',1)[0]}>{elem.person}</NavLink> </li>
    });
    const orcCharacters = lotr3Characters.filter(elem=>elem.race==='orc').map((elem,index)=>{
        return <li key={elem.id}><NavLink className="lotr3Nav" to={'/'+elem.person.split(' ',1)[0]}>{elem.person}</NavLink> </li>
    });

    const elfCharacters = lotr3Characters.filter(elem=>elem.race==='elf').map((elem,index)=>{
        return <li key={elem.id}><NavLink className="lotr3Nav" to={'/'+elem.person.split(' ',1)[0]}>{elem.person}</NavLink> </li>
    });

    const dwarfCharacters = lotr3Characters.filter(elem=>elem.race==='dwarf').map((elem,index)=>{
        return <li key={elem.id}><NavLink className="lotr3Nav" to={'/'+elem.person.split(' ',1)[0]}>{elem.person}</NavLink> </li>
    });

    const wizardCharacters = lotr3Characters.filter(elem=>elem.race==='wizard').map((elem,index)=>{
        return <li key={elem.id}><NavLink className="lotr3Nav" to={'/'+elem.person.split(' ',1)[0]}>{elem.person}</NavLink> </li>
    });

    const hobbitCharacters = lotr3Characters.filter(elem=>elem.race==='hobbit').map((elem,index)=>{
        return <li key={elem.id}><NavLink className="lotr3Nav" to={'/'+elem.person.split(' ',1)[0]}>{elem.person}</NavLink> </li>
    });


    return (
        <div className="lotr3MoviePage">
            <h1>The Lord of the Rings: The Return of the King</h1>
            <hr  />
            <img src={lotr3pic} />
            <p> The Lord of the Rings: The Return of the King is a 2003 epic fantasy adventure film directed by
                Peter Jackson from a screenplay by Fran Walsh, Philippa Boyens, and Jackson, based on 1955's
                The Return of the King, the third volume of the novel The Lord of the Rings by J. R. R. Tolkien.
                The sequel to 2002's The Lord of the Rings: The Two Towers, the film is the final installment
                 in The Lord of the Rings trilogy.</p> 
            <p>Continuing the plot of the previous film, Frodo, Sam and Gollum are making their final way toward
                Mount Doom in Mordor in order to destroy the One Ring, unaware of Gollum's true intentions, while
                Merry, Pippin, Gandalf, Aragorn, Legolas, Gimli and the rest are joining forces together against
                Sauron and his legions in Minas Tirith. The Return of the King was financed and distributed by
                American studio New Line Cinema, but filmed and edited entirely in Jackson's native New Zealand,
                concurrently with the other two parts of the trilogy. It premiered on 1 December 2003 at the
                Embassy Theatre in Wellington and was theatrically
                released on 17 December 2003 in the United States, and on 18 December 2003 in New Zealand.</p>              
            <hr  />
            <h3>main characters:</h3>
            <h3>Hobbits:</h3>
            <ul>
                {hobbitCharacters}
            </ul>
            <hr  />
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
            <h3>Nazguls:</h3>
            <ul>
                {nazgulCharacters}
            </ul>
            <hr  />  
            <h3>Ents:</h3>
            <ul>
                {entCharacters}
            </ul>
        </div>
    );
}

export default Lotr3;