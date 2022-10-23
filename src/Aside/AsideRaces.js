import React from "react";
import './AsideRaces.css';
import { NavLink } from "react-router-dom";

const AsideRaces = (props) =>{
    const allPersons = props.persons.map(elem=> <li key={elem.id}><NavLink className="asideRacesNav" to={'/'+elem.person.split(' ',1)[0]}>{elem.person}</NavLink></li>);
    let h1races = props.persons[0].race[0].toUpperCase()  + props.persons[0].race.slice(1) + 's';
    return (
        <div className="asideRacesContainer">
            <h1>{h1races}</h1>
            <hr  />
            <ul>
                {allPersons}
            </ul>
        </div>
    );
}

export default AsideRaces;