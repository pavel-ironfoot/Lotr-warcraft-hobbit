import React from "react";
import { NavLink } from "react-router-dom";
import './Lotr2.css';
import lotr2pic from './lotr2.jpg';

import orgrim from '../../Aside/asideImages/orgrim.png';
import durotan from '../../Aside/asideImages/durotan.png';
import aragorn from '../../Aside/asideImages/aragorn.png';
import arwen from '../../Aside/asideImages/arwen.png';
import azog from '../../Aside/asideImages/azog.png';
import balin from '../../Aside/asideImages/balin.png';
import bifur from '../../Aside/asideImages/bifur.png';
import bilbo from '../../Aside/asideImages/bilbo.png';
import bofur from '../../Aside/asideImages/bofur.png';
import bombur from '../../Aside/asideImages/bombur.png';
import boromir from '../../Aside/asideImages/boromir.png';
import denethor from '../../Aside/asideImages/denethor.png';
import dori from '../../Aside/asideImages/dori.png';
import dwalin from '../../Aside/asideImages/dwalin.png';
import elrond from '../../Aside/asideImages/elrond.png';
import beorn from '../../Aside/asideImages/beorn.png';
import bard from '../../Aside/asideImages/bard.png';
import master from '../../Aside/asideImages/master.png';
import radagast from '../../Aside/asideImages/radagast.png';
import smaug from '../../Aside/asideImages/smaug.png';
import bolg from '../../Aside/asideImages/bolg.png';
import eomer from '../../Aside/asideImages/eomer.png';
import eowyn from '../../Aside/asideImages/eowyn.png';
import faramir from '../../Aside/asideImages/faramir.png';
import fili from '../../Aside/asideImages/fili.png';
import kili from '../../Aside/asideImages/kili.png';
import frodo from '../../Aside/asideImages/frodo.png';
import galadriel from '../../Aside/asideImages/galadriel.png';
import gandalf from '../../Aside/asideImages/gandalf.png';
import gimli from '../../Aside/asideImages/gimli.png';
import gloin from '../../Aside/asideImages/gloin.png';
import gollum from '../../Aside/asideImages/gollum.png';
import gothmog from '../../Aside/asideImages/gothmog.png';
import grima from '../../Aside/asideImages/grima.png';
import kingofdeath from '../../Aside/asideImages/kingofdeath.png';
import legolas from '../../Aside/asideImages/legolas.png';
import lurtz from '../../Aside/asideImages/lurtz.png';
import merry from '../../Aside/asideImages/merry.png';
import nazgul from '../../Aside/asideImages/nazgul.png';
import nori from '../../Aside/asideImages/nori.png';
import oin from '../../Aside/asideImages/oin.png';
import ori from '../../Aside/asideImages/ori.png';
import pippin from '../../Aside/asideImages/pippin.png';
import sam from '../../Aside/asideImages/sam.png';
import saruman from '../../Aside/asideImages/saruman.png';
import sauron from '../../Aside/asideImages/sauron.png';
import theoden from '../../Aside/asideImages/theoden.png';
import thorin from '../../Aside/asideImages/thorin.png';
import tom from '../../Aside/asideImages/tom.png';
import bert from '../../Aside/asideImages/bert.png';
import ugluk from '../../Aside/asideImages/ugluk.png';
import witch from '../../Aside/asideImages/witch.png';
import greatgoblin from '../../Aside/asideImages/greatgoblin.png';
import william from '../../Aside/asideImages/william.png';
import tauriel from '../../Aside/asideImages/tauriel.png';
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
import dain from '../../Aside/asideImages/dain.png';
import thranduil from '../../Aside/asideImages/thranduil.png';
import treebeard from '../../Aside/asideImages/treebeard.png';

const Lotr2 = (props) => {
    const createPicture=(pic)=>{
        if(pic==='durotan'){
            return durotan;
        }else if(pic==='orgrim'){
            return orgrim;
        }else if(pic==='greatgoblin'){
            return greatgoblin;
        }else if(pic==='tom'){
            return tom;
        }else if(pic==='bert'){
            return bert;
        }else if(pic==='william'){
            return william;
        }else if(pic==='master'){
            return master;
        }else if(pic==='bard'){
            return bard;
        }else if(pic==='beorn'){
            return beorn;
        }else if(pic==='smaug'){
            return smaug;
        }else if(pic==='aragorn'){
            return aragorn;
        }else if(pic==='arwen'){
            return arwen;
        }else if(pic==='azog'){
            return azog;
        }else if(pic==='balin'){
            return balin;
        }else if(pic==='bifur'){
            return bifur;
        }else if(pic==='bilbo'){
            return bilbo;
        }else if(pic==='bofur'){
            return bofur;
        }else if(pic==='bombur'){
            return bombur;
        }else if(pic==='boromir'){
            return boromir;
        }else if(pic==='denethor'){
            return denethor;
        }else if(pic==='dori'){
            return dori;
        }else if(pic==='dwalin'){
            return dwalin;
        }else if(pic==='elrond'){
            return elrond;
        }else if(pic==='eomer'){
            return eomer;
        }else if(pic==='eowyn'){
            return eowyn;
        }else if(pic==='faramir'){
            return faramir;
        }else if(pic==='fili'){
            return fili;
        }else if(pic==='frodo'){
            return frodo;
        }else if(pic==='galadriel'){
            return galadriel;
        }else if(pic==='gandalf'){
            return gandalf;
        }else if(pic==='gimli'){
            return gimli;
        }else if(pic==='gloin'){
            return gloin;
        }else if(pic==='gollum'){
            return gollum;
        }else if(pic==='gothmog'){
            return gothmog;
        }else if(pic==='grima'){
            return grima;
        }else if(pic==='kili'){
            return kili;
        }else if(pic==='kingofdeath'){
            return kingofdeath;
        }else if(pic==='legolas'){
            return legolas;
        }else if(pic==='lurtz'){
            return lurtz;
        }else if(pic==='merry'){
            return merry;
        }else if(pic==='nazgul'){
            return nazgul;
        }else if(pic==='nori'){
            return nori;
        }else if(pic==='oin'){
            return oin;
        }else if(pic==='ori'){
            return ori;
        }else if(pic==='pippin'){
            return pippin;
        }else if(pic==='sam'){
            return sam;
        }else if(pic==='saruman'){
            return saruman;
        }else if(pic==='sauron'){
            return sauron;
        }else if(pic==='theoden'){
            return theoden;
        }else if(pic==='thorin'){
            return thorin;
        }else if(pic==='ugluk'){
            return ugluk;
        }else if(pic==='witch'){
            return witch;
        }else if(pic==='bolg'){
            return bolg;
        }else if(pic==='radagast'){
            return radagast;
        }else if(pic==='tauriel'){
            return tauriel;
        }else if(pic==='dain'){
            return dain;
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
        }else if(pic==='thranduil'){
            return thranduil;
        }else if(pic==='treebeard'){
            return treebeard;
        } 
    };
    const lotr2Characters = props.charactersTest.filter((elem)=>{
        if(elem.movie1==='The Two Towers (2002)' || elem.movie2==='The Two Towers (2002)' || elem.movie3==='The Two Towers (2002)' || elem.movie4==='The Two Towers (2002)' || elem.movie5==='The Two Towers (2002)' || elem.movie6==='The Two Towers (2002)' || elem.movie7==='The Two Towers (2002)') return elem;
    });

    const nazgulCharacters = lotr2Characters.filter((elem,index)=>{
        if(elem.race ==='nazgul') return true;
    }).map((elem,index)=>{
        return <div className="liImgMovie" key={elem.id}><NavLink className="lotr2Nav" to={'/'+elem.person.split(' ',1)[0]}>
                <div>{elem.person}</div>
                <div className="imgMovieDiv"><img className="imgMovie" src={createPicture(elem.warPic)} alt="moviesPic"/></div>
            </NavLink> 
        </div>
    });

    const humanCharacters = lotr2Characters.filter((elem,index)=>{
        if(elem.race ==='human') return true;
    }).map((elem,index)=>{
        return <div className="liImgMovie" key={elem.id}><NavLink className="lotr2Nav" to={'/'+elem.person.split(' ',1)[0]}>
                <div>{elem.person}</div>
                <div className="imgMovieDiv"><img className="imgMovie" src={createPicture(elem.warPic)} alt="moviesPic"/></div>
            </NavLink> 
        </div>
    });

    const urukCharacters = lotr2Characters.filter((elem,index)=>{
        if(elem.race ==='uruk-hai') return true;
    }).map((elem,index)=>{
        return <div className="liImgMovie" key={elem.id}><NavLink className="lotr2Nav" to={'/'+elem.person.split(' ',1)[0]}>
                <div>{elem.person}</div>
                <div className="imgMovieDiv"><img className="imgMovie" src={createPicture(elem.warPic)} alt="moviesPic"/></div>
            </NavLink> 
        </div>
    });

    const elfCharacters = lotr2Characters.filter((elem,index)=>{
        if(elem.race ==='elf') return true;
    }).map((elem,index)=>{
        return <div className="liImgMovie" key={elem.id}><NavLink className="lotr2Nav" to={'/'+elem.person.split(' ',1)[0]}>
                <div>{elem.person}</div>
                <div className="imgMovieDiv"><img className="imgMovie" src={createPicture(elem.warPic)} alt="moviesPic"/></div>
            </NavLink> 
        </div>
    });

    const dwarfCharacters = lotr2Characters.filter((elem,index)=>{
        if(elem.race ==='dwarf') return true;
    }).map((elem,index)=>{
        return <div className="liImgMovie" key={elem.id}><NavLink className="lotr2Nav" to={'/'+elem.person.split(' ',1)[0]}>
                <div>{elem.person}</div>
                <div className="imgMovieDiv"><img className="imgMovie" src={createPicture(elem.warPic)} alt="moviesPic"/></div>
            </NavLink> 
        </div>
    });

    const wizardCharacters = lotr2Characters.filter((elem,index)=>{
        if(elem.race ==='wizard') return true;
    }).map((elem,index)=>{
        return <div className="liImgMovie" key={elem.id}><NavLink className="lotr2Nav" to={'/'+elem.person.split(' ',1)[0]}>
                <div>{elem.person}</div>
                <div className="imgMovieDiv"><img className="imgMovie" src={createPicture(elem.warPic)} alt="moviesPic"/></div>
            </NavLink> 
        </div>
    });

    const hobbitCharacters = lotr2Characters.filter((elem,index)=>{
        if(elem.race ==='hobbit') return true;
    }).map((elem,index)=>{
        return <div className="liImgMovie" key={elem.id}><NavLink className="lotr2Nav" to={'/'+elem.person.split(' ',1)[0]}>
                <div>{elem.person}</div>
                <div className="imgMovieDiv"><img className="imgMovie" src={createPicture(elem.warPic)} alt="moviesPic"/></div>
            </NavLink> 
        </div>
    });

    const entCharacters = lotr2Characters.filter((elem,index)=>{
        if(elem.race ==='ent') return true;
    }).map((elem,index)=>{
        return <div className="liImgMovie" key={elem.id}><NavLink className="lotr2Nav" to={'/'+elem.person.split(' ',1)[0]}>
                <div>{elem.person}</div>
                <div className="imgMovieDiv"><img className="imgMovie" src={createPicture(elem.warPic)} alt="moviesPic"/></div>
            </NavLink> 
        </div>
    });


    return (
        <div className="lotr2MoviePage">
            <h1>The Lord of the Rings: The Two Towers</h1>
            <hr  />
            <img src={lotr2pic} className="lotr2pic" alt="lotr2"/>
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
            <div className="divCharacters">
                {hobbitCharacters}
            </div>
            <hr  />
            <h3>Uruk-hais:</h3>
            <div className="divCharacters">
                {urukCharacters}
            </div>
            <hr  />            
            <h3>Elves:</h3>
            <div className="divCharacters">
                {elfCharacters}
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
            <hr  />  
            <h3>Humans:</h3>
            <div className="divCharacters">
                {humanCharacters}
            </div>
            <hr  />  
            <h3>Nazguls:</h3>
            <div className="divCharacters">
                {nazgulCharacters}
            </div>
            <hr  />  
            <h3>Ents:</h3>
            <div className="divCharacters">
                {entCharacters}
            </div>
        </div>
    );
}

export default Lotr2;