import React from "react";
import { NavLink } from "react-router-dom";
import './Hobbit3.css';
import hobbit3pic from './hobbit3.jpg';

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


const Hobbit3 = (props) => {
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
        }else if(pic==='orgrim'){
            return orgrim;
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
        const hobbit3Characters = props.charactersTest.filter((elem)=>{
            if(elem.movie1==='The Hobbit: The Battle of the Five Armies (2014)' || elem.movie2==='The Hobbit: The Battle of the Five Armies (2014)' || elem.movie3==='The Hobbit: The Battle of the Five Armies (2014)' || elem.movie4==='The Hobbit: The Battle of the Five Armies (2014)' || elem.movie5==='The Hobbit: The Battle of the Five Armies (2014)' || elem.movie6==='The Hobbit: The Battle of the Five Armies (2014)' || elem.movie7==='The Hobbit: The Battle of the Five Armies (2014)') return elem;
        });

        const hobbitCharacters = hobbit3Characters.filter((elem,index)=>{
            if(elem.race ==='hobbit') return true;
        }).map((elem,index)=>{
            return <div className="liImgMovie" key={elem.id}><NavLink className="hobbit3Nav" to={'/'+elem.person.split(' ',1)[0]}>
                    <div>{elem.person}</div>
                    <div className="imgMovieDiv"><img className="imgMovie" src={createPicture(elem.warPic)} alt="moviesPic"/></div>
                </NavLink> 
            </div>
        });

        const dragonCharacters = hobbit3Characters.filter((elem,index)=>{
            if(elem.race ==='dragon') return true;
        }).map((elem,index)=>{
            return <div className="liImgMovie" key={elem.id}><NavLink className="hobbit3Nav" to={'/'+elem.person.split(' ',1)[0]}>
                    <div>{elem.person}</div>
                    <div className="imgMovieDiv"><img className="imgMovie" src={createPicture(elem.warPic)} alt="moviesPic"/></div>
                </NavLink> 
            </div>
        });

        const skinChangerCharacters = hobbit3Characters.filter((elem,index)=>{
            if(elem.race ==='skin-changer') return true;
        }).map((elem,index)=>{
            return <div className="liImgMovie" key={elem.id}><NavLink className="hobbit3Nav" to={'/'+elem.person.split(' ',1)[0]}>
                    <div>{elem.person}</div>
                    <div className="imgMovieDiv"><img className="imgMovie" src={createPicture(elem.warPic)} alt="moviesPic"/></div>
                </NavLink> 
            </div>
        });

        const humanCharacters = hobbit3Characters.filter((elem,index)=>{
            if(elem.race ==='human') return true;
        }).map((elem,index)=>{
            return <div className="liImgMovie" key={elem.id}><NavLink className="hobbit3Nav" to={'/'+elem.person.split(' ',1)[0]}>
                    <div>{elem.person}</div>
                    <div className="imgMovieDiv"><img className="imgMovie" src={createPicture(elem.warPic)} alt="moviesPic"/></div>
                </NavLink> 
            </div>
        });
        const orcCharacters = hobbit3Characters.filter((elem,index)=>{
            if(elem.race ==='orc') return true;
        }).map((elem,index)=>{
            return <div className="liImgMovie" key={elem.id}><NavLink className="hobbit3Nav" to={'/'+elem.person.split(' ',1)[0]}>
                    <div>{elem.person}</div>
                    <div className="imgMovieDiv"><img className="imgMovie" src={createPicture(elem.warPic)} alt="moviesPic"/></div>
                </NavLink> 
            </div>
        });

        const elfCharacters = hobbit3Characters.filter((elem,index)=>{
            if(elem.race =='elf') return true;
        }).map((elem,index)=>{
            return <div className="liImgMovie" key={elem.id}><NavLink className="hobbit3Nav" to={'/'+elem.person.split(' ',1)[0]}>
                    <div>{elem.person}</div>
                    <div className="imgMovieDiv"><img className="imgMovie" src={createPicture(elem.warPic)} alt="moviesPic"/></div>
                </NavLink> 
            </div>
        });

    const dwarfCharacters = hobbit3Characters.filter((elem,index)=>{
        if(elem.race ==='dwarf') return true;
    }).map((elem,index)=>{
        return <div className="liImgMovie" key={elem.id}><NavLink className="hobbit3Nav" to={'/'+elem.person.split(' ',1)[0]}>
                <div>{elem.person}</div>
                <div className="imgMovieDiv"><img className="imgMovie" src={createPicture(elem.warPic)} alt="moviesPic"/></div>
            </NavLink> 
        </div>
    });

    const wizardCharacters = hobbit3Characters.filter((elem,index)=>{
        if(elem.race ==='wizard') return true;
    }).map((elem,index)=>{
        return <div className="liImgMovie" key={elem.id}><NavLink className="hobbit3Nav" to={'/'+elem.person.split(' ',1)[0]}>
                <div>{elem.person}</div>
                <div className="imgMovieDiv"><img className="imgMovie" src={createPicture(elem.warPic)} alt="moviesPic"/></div>
            </NavLink> 
        </div>
    });


    return (
        <div className='hobbit3MoviePage'>
            <h1>The Hobbit: The Battle of the Five Armies</h1>
            <hr  />
            <img className="hobbit3pic" src={hobbit3pic} alt="hobbitMovie3"/>
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
            <div>
                {orcCharacters}
            </div>
            <hr  />   
            <h3>Hobbits:</h3>
            <div>
                {hobbitCharacters}
            </div>
            <hr  />          
            <h3>Elves:</h3>
            <div>
                {elfCharacters}
            </div>
            <hr  />  
            <h3>Dwarfs:</h3>
            <div>
                {dwarfCharacters}
            </div>
            <hr  />  
            <h3>Wizards:</h3>
            <div>
                {wizardCharacters}
            </div>
            <hr  />  
            <h3>Humans:</h3>
            <div>
                {humanCharacters}
            </div>
            <hr  />  
            <h3>Skin-changer:</h3>
            <div>
                {skinChangerCharacters}
            </div>
            <hr  />  
            <h3>Dragons:</h3>
            <div>
                {dragonCharacters}
            </div>
        </div>
    );
}

export default Hobbit3;