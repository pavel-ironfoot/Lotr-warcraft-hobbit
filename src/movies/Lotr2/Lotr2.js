import React from "react";
import { NavLink } from "react-router-dom";
import './Lotr2.css';
import lotr2pic from './lotr2.jpg';


const Lotr2 = (props) => {
    const lotr2Characters = props.charactersTest.filter((elem)=>{
        if(elem.movie1==='The Two Towers (2002)' || elem.movie2==='The Two Towers (2002)' || elem.movie3==='The Two Towers (2002)' || elem.movie4==='The Two Towers (2002)' || elem.movie5==='The Two Towers (2002)' || elem.movie6==='The Two Towers (2002)' || elem.movie7==='The Two Towers (2002)') return elem;
    });

    const nazgulCharacters = lotr2Characters.filter(elem=>elem.race==='nazgul').map((elem,index)=>{
        return <li key={elem.id}><NavLink className="lotr2Nav" to={'/'+elem.person.split(' ',1)[0]}>{elem.person}</NavLink> </li>
    });

    const humanCharacters = lotr2Characters.filter(elem=>elem.race==='human').map((elem,index)=>{
        return <li key={elem.id}><NavLink className="lotr2Nav" to={'/'+elem.person.split(' ',1)[0]}>{elem.person}</NavLink> </li>
    });
    const urukCharacters = lotr2Characters.filter(elem=>elem.race==='uruk-hai').map((elem,index)=>{
        return <li key={elem.id}><NavLink className="lotr2Nav" to={'/'+elem.person.split(' ',1)[0]}>{elem.person}</NavLink> </li>
    });

    const elfCharacters = lotr2Characters.filter(elem=>elem.race==='elf').map((elem,index)=>{
        return <li key={elem.id}><NavLink className="lotr2Nav" to={'/'+elem.person.split(' ',1)[0]}>{elem.person}</NavLink> </li>
    });

    const dwarfCharacters = lotr2Characters.filter(elem=>elem.race==='dwarf').map((elem,index)=>{
        return <li key={elem.id}><NavLink className="lotr2Nav" to={'/'+elem.person.split(' ',1)[0]}>{elem.person}</NavLink> </li>
    });

    const wizardCharacters = lotr2Characters.filter(elem=>elem.race==='wizard').map((elem,index)=>{
        return <li key={elem.id}><NavLink className="lotr2Nav" to={'/'+elem.person.split(' ',1)[0]}>{elem.person}</NavLink> </li>
    });

    const hobbitCharacters = lotr2Characters.filter(elem=>elem.race==='hobbit').map((elem,index)=>{
        return <li key={elem.id}><NavLink className="lotr2Nav" to={'/'+elem.person.split(' ',1)[0]}>{elem.person}</NavLink> </li>
    });

    const entCharacters = lotr2Characters.filter(elem=>elem.race==='ent').map((elem,index)=>{
        return <li key={elem.id}><NavLink className="lotr3Nav" to={'/'+elem.person.split(' ',1)[0]}>{elem.person}</NavLink> </li>
    });


    return (
        <div className="lotr2MoviePage">
            <h1>The Lord of the Rings: The Two Towers</h1>
            <hr  />
            <img src={lotr2pic} />
            <p> The Lord of the Rings: The Two Towers is a 2002 epic fantasy adventure film directed by
                Peter Jackson from a screenplay by Fran Walsh, Philippa Boyens, Stephen Sinclair, and
                Jackson, based on 1954's The Two Towers, the second volume of the novel The Lord of the
                Rings by J. R. R. Tolkien. The sequel to 2001's The Lord of the Rings: The Fellowship
                of the Ring, the film is the second instalment in The Lord of the Rings trilogy.</p> 
            <p>Continuing the plot of the previous film, it intercuts three storylines. Frodo and Sam
                continue their journey towards Mordor to destroy the One Ring, meeting and joined by Gollum,
                the ring's former keeper. Aragorn, Legolas, and Gimli come to the war-torn nation of Rohan
                and are reunited with the resurrected Gandalf, before fighting against the legions of the
                treacherous wizard Saruman at the Battle of Helm's Deep. Merry and Pippin escape capture,
                meet Treebeard the Ent, and help to plan an attack on Isengard, fortress of Saruman.</p>              
            <hr  />
            <h3>main characters:</h3>
            <h3>Hobbits:</h3>
            <ul>
                {hobbitCharacters}
            </ul>
            <hr  />
            <h3>Uruk-hais:</h3>
            <ul>
                {urukCharacters}
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

export default Lotr2;