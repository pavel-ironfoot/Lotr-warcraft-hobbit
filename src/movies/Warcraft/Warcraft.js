import React from "react";
import { NavLink } from "react-router-dom";
import './Warcraft.css';
import warcraftMovie from './warcraftMovie.jpg';

import orgrim from '../../Aside/asideImages/orgrim.png';
import durotan from '../../Aside/asideImages/durotan.png';
import pavel from '../../Aside/asideImages/pavel.png';
import muradin from '../../Aside/asideImages/muradin.png';
import magni from '../../Aside/asideImages/magni.png';
import llane from '../../Aside/asideImages/llane.png';
import anduin from '../../Aside/asideImages/anduin.png';
import khadgar from '../../Aside/asideImages/khadgar.png';
import medivh from '../../Aside/asideImages/medivh.png';
import garona from '../../Aside/asideImages/garona.png';
import blackhand from '../../Aside/asideImages/blackhand.png';
import guldan from '../../Aside/asideImages/guldan.png';
import darkscare from '../../Aside/asideImages/darkscare.png';


const Warcraft = (props) => {

    const createPicture=(pic)=>{
        if(pic==='durotan'){
            return durotan;
        }else if(pic==='orgrim'){
            return orgrim;
        }else if(pic==='pavel'){
            return pavel;
        }else if(pic==='llane'){
            return llane;
        }else if(pic==='anduin'){
            return anduin;
        }else if(pic==='guldan'){
            return guldan;
        }else if(pic==='garona'){
            return garona;  
        }else if(pic==='blackhand'){
            return blackhand;
        }else if(pic==='darkscare'){
            return darkscare;
        }else if(pic==='magni'){
            return magni;
        }else if(pic==='muradin'){
            return muradin;
        }else if(pic==='medivh'){
            return medivh;
        }else if(pic==='khadgar'){
            return khadgar;
        }
    };
    const warCharacters = props.charactersTest.filter((elem)=>{
        if(elem.movie1==='Warcraft, The Beginning' || elem.movie2==='Warcraft, The Beginning' || elem.movie3==='Warcraft, The Beginning' || elem.movie4==='Warcraft, The Beginning' || elem.movie5==='Warcraft, The Beginning' || elem.movie6==='Warcraft, The Beginning' || elem.movie7==='Warcraft, The Beginning') return elem;
    });

const orcCharacters = warCharacters.filter((elem,index)=>{
        if(elem.race ==='orc') return true;
}).map((elem,index)=>{
        return <div className="liImgMovie" key={elem.id}><NavLink className="warcraftNav" to={'/'+elem.person.split(' ',1)[0]}>
                <div>{elem.person}</div>
                <div className="imgMovieDiv"><img className="imgMovie" src={createPicture(elem.warPic)} alt="moviesPic"/></div>
            </NavLink> 
        </div>
});

const humanCharacters = warCharacters.filter((elem,index)=>{
    if(elem.race ==='human') return true;
}).map((elem,index)=>{
    return <div className="liImgMovie" key={elem.id}><NavLink className="warcraftNav" to={'/'+elem.person.split(' ',1)[0]}>
            <div>{elem.person}</div>
            <div className="imgMovieDiv"><img className="imgMovie" src={createPicture(elem.warPic)} alt="moviesPic"/></div>
        </NavLink> 
    </div>
});

const wizardCharacters = warCharacters.filter((elem,index)=>{
    if(elem.race ==='wizard') return true;
}).map((elem,index)=>{
    return <div className="liImgMovie" key={elem.id}><NavLink className="warcraftNav" to={'/'+elem.person.split(' ',1)[0]}>
            <div>{elem.person}</div>
            <div className="imgMovieDiv"><img className="imgMovie" src={createPicture(elem.warPic)} alt="moviesPic"/></div>
        </NavLink> 
    </div>
});

const dwarfCharacters = warCharacters.filter((elem,index)=>{
    if(elem.race ==='dwarf') return true;
}).map((elem,index)=>{
    return <div className="liImgMovie" key={elem.id}><NavLink className="warcraftNav" to={'/'+elem.person.split(' ',1)[0]}>
            <div>{elem.person}</div>
            <div className="imgMovieDiv"><img className="imgMovie" src={createPicture(elem.warPic)} alt="moviesPic"/></div>
        </NavLink> 
    </div>
});

    return (
        <div className="warcraftMoviePage">
            <h1>Warcraft, The Beginning</h1>
            <hr />
            <img src={warcraftMovie} alt="warcraftMovie" className="warcraftMovie" />
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
            <div className="divCharacters">
                {orcCharacters}
            </div> 
            <hr  />            
            <h3>Humans:</h3>
            <div className="divCharacters">
                {humanCharacters}
            </div>
            <hr  />  
            <h3>Dwarfs:</h3>
            <div className="divCharacters">
                {dwarfCharacters}
            </div>
            <hr  />  
            <h3>Wizards:</h3>
            <div className="divCharacters">
                {wizardCharacters}
            </div>
        </div>
    );
}

export default Warcraft