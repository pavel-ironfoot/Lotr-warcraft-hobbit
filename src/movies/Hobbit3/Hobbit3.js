import React from "react";
import { NavLink } from "react-router-dom";
import './Hobbit3.css';
import hobbit3pic from './hobbit3.jpg';


const Hobbit3 = (props) => {
        const hb3 = props.charactersTest.filter((elem)=>{
            if(elem.movie1==='The Hobbit: The Battle of the Five Armies (2014)' || elem.movie2==='The Hobbit: The Battle of the Five Armies (2014)' || elem.movie3==='The Hobbit: The Battle of the Five Armies (2014)' || elem.movie4==='The Hobbit: The Battle of the Five Armies (2014)' || elem.movie5==='The Hobbit: The Battle of the Five Armies (2014)' || elem.movie6==='The Hobbit: The Battle of the Five Armies (2014)' || elem.movie7==='The Hobbit: The Battle of the Five Armies (2014)') return elem;
        });

    const hobbitCharacters = hb3.filter((elem,index)=>{
        if(elem.race =='hobbit') return true;
    }).map((elem,index)=>{
        return <li key={elem.id}><NavLink className="hobbit1Nav" to={'/'+elem.person.split(' ',1)[0]}>{elem.person}</NavLink> </li>
    });

    const dragonCharacters = hb3.filter((elem,index)=>{
        if(elem.race =='dragon') return true;
    }).map((elem,index)=>{
        return <li key={elem.id}><NavLink className="hobbit1Nav" to={'/'+elem.person.split(' ',1)[0]}>{elem.person}</NavLink> </li>
    });

    const skinChangerCharacters = hb3.filter((elem)=>{
        if(elem.race ==='skin-changer'){ return elem};
    }).map((elem,index)=>{
        return <li key={elem.id}><NavLink className="hobbit3Nav" to={'/'+elem.person.split(' ',1)[0]}>{elem.person}</NavLink> </li>
    });

    const humanCharacters = hb3.filter((elem,index)=>{
        if(elem.race ==='human') return elem;
    }).map((elem,index)=>{
        return <li key={elem.id}><NavLink className="hobbit3Nav" to={'/'+elem.person.split(' ',1)[0]}>{elem.person}</NavLink> </li>
    });
    const orcCharacters = hb3.filter((elem,index)=>{
        if(elem.race ==='orc') return elem;
    }).map((elem,index)=>{
        return <li key={elem.id}><NavLink className="hobbit3Nav" to={'/'+elem.person.split(' ',1)[0]}>{elem.person}</NavLink> </li>
    });

    const elfCharacters = hb3.filter((elem,index)=>{
        if(elem.race ==='elf') return elem;
    }).map((elem,index)=>{
        return <li key={elem.id}><NavLink className="hobbit3Nav" to={'/'+elem.person.split(' ',1)[0]}>{elem.person}</NavLink> </li>
    });

    const dwarfCharacters = hb3.filter((elem,index)=>{
        if(elem.race ==='dwarf') return elem;
    }).map((elem,index)=>{
        return <li key={elem.id}><NavLink className="hobbit3Nav" to={'/'+elem.person.split(' ',1)[0]}>{elem.person}</NavLink> </li>
    });

    const wizardCharacters = hb3.filter((elem,index)=>{
        if(elem.race ==='wizard') return elem;
    }).map((elem,index)=>{
        return <li key={elem.id}><NavLink className="hobbit1Nav" to={'/'+elem.person.split(' ',1)[0]}>{elem.person}</NavLink> </li>
    });


    return (
        <div className='hobbit3MoviePage'>
            <h1>The Hobbit: The Battle of the Five Armies</h1>
            <hr  />
            <img src={hobbit3pic} />
            <p> The Hobbit: The Battle of the Five Armies is a 2014 epic high fantasy adventure film directed
                by Peter Jackson from a screenplay by Fran Walsh, Philippa Boyens, Jackson, and Guillermo del
                Toro, based on the 1937 novel The Hobbit by J. R. R. Tolkien. The sequel to The Hobbit: The
                Desolation of Smaug (2013), it is the final instalment in The Hobbit trilogy, acting as a
                prequel to Jackson's The Lord of the Rings trilogy.</p>
            <p>The Hobbit: The Battle of the Five Armies premiered in London on 1 December 2014, and was then
                released on 11 December 2014 in New Zealand and on 17 December 2014 in the United States, by
                Warner Bros. Pictures. The film received mixed reviews from critics and grossed over $962.2 million
                worldwide, making it the second highest-grossing film of 2014. The film received numerous accolades;
                at the 87th Academy Awards, it was nominated for Best Sound Editing.</p>
            <hr  />
            <h3>main characters:</h3>
            <h3>Orcs:</h3>
            <ul>
                {orcCharacters}
            </ul>
            <hr  />   
            <h3>Hobbits:</h3>
            <ul>
                {hobbitCharacters}
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

export default Hobbit3;