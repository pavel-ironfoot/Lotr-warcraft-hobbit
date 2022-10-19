import React from "react";
import { NavLink } from "react-router-dom";
import './Lotr1.css';
import lotr1pic from './lotr1.png';


const Lotr1 = (props) => {
    const lotr1Characters = props.charactersTest.filter((elem)=>{
        if(elem.movie1==='The Fellowship of the Ring (2001)' || elem.movie2==='The Fellowship of the Ring (2001)' || elem.movie3==='The Fellowship of the Ring (2001)' || elem.movie4==='The Fellowship of the Ring (2001)' || elem.movie5==='The Fellowship of the Ring (2001)' || elem.movie6==='The Fellowship of the Ring (2001)' || elem.movie7==='The Fellowship of the Ring (2001)') return elem;
    });

    const nazgulCharacters = lotr1Characters.filter(elem=>elem.race==='nazgul').map((elem,index)=>{
        return <li key={elem.id}><NavLink className="lotr1Nav" to={'/'+elem.person.split(' ',1)[0]}>{elem.person}</NavLink> </li>
    });

    const humanCharacters = lotr1Characters.filter(elem=>elem.race==='human').map((elem,index)=>{
        return <li key={elem.id}><NavLink className="lotr1Nav" to={'/'+elem.person.split(' ',1)[0]}>{elem.person}</NavLink> </li>
    });
    const urukCharacters = lotr1Characters.filter(elem=>elem.race==='uruk-hai').map((elem,index)=>{
        return <li key={elem.id}><NavLink className="lotr1Nav" to={'/'+elem.person.split(' ',1)[0]}>{elem.person}</NavLink> </li>
    });

    const elfCharacters = lotr1Characters.filter(elem=>elem.race==='elf').map((elem,index)=>{
        return <li key={elem.id}><NavLink className="lotr1Nav" to={'/'+elem.person.split(' ',1)[0]}>{elem.person}</NavLink> </li>
    });

    const dwarfCharacters = lotr1Characters.filter(elem=>elem.race==='dwarf').map((elem,index)=>{
        return <li key={elem.id}><NavLink className="lotr1Nav" to={'/'+elem.person.split(' ',1)[0]}>{elem.person}</NavLink> </li>
    });

    const wizardCharacters = lotr1Characters.filter(elem=>elem.race==='wizard').map((elem,index)=>{
        return <li key={elem.id}><NavLink className="lotr1Nav" to={'/'+elem.person.split(' ',1)[0]}>{elem.person}</NavLink> </li>
    });

    const hobbitCharacters = lotr1Characters.filter(elem=>elem.race==='hobbit').map((elem,index)=>{
        return <li key={elem.id}><NavLink className="lotr1Nav" to={'/'+elem.person.split(' ',1)[0]}>{elem.person}</NavLink> </li>
    });


    return (
        <div className="lotr1MoviePage">
            <h1>Lotr1</h1>
            <hr  />
            <img src={lotr1pic} />
            <p> The Lord of the Rings: The Fellowship of the Ring is a 2001 epic fantasy adventure film
                directed by Peter Jackson from a screenplay by Fran Walsh, Philippa Boyens, and Jackson,
                based on 1954's The Fellowship of the Ring, the first volume of the novel The Lord of
                the Rings by J. R. R. Tolkien. The film is the first installment in The Lord of the Rings
                trilogy. It features an ensemble cast including Elijah Wood, Ian McKellen, Liv Tyler,
                Viggo Mortensen, Sean Astin, Cate Blanchett, John Rhys-Davies, Billy Boyd, Dominic Monaghan,
                Orlando Bloom, Christopher Lee, Hugo Weaving, Sean Bean, Ian Holm, and Andy Serkis.
                Set in Middle-earth, the story tells of the Dark Lord Sauron, who seeks the One Ring,
                which contains part of his might, to return to power. The Ring has found its way to
                the young hobbit Frodo Baggins. The fate of Middle-earth hangs in the balance as Frodo
                and eight companions (who form the Fellowship of the Ring) begin their journey
                to Mount Doom in the land of Mordor, the only place where the Ring can be destroyed.</p>           
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
        </div>
    );
}

export default Lotr1;