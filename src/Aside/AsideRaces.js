import React from "react";
import './AsideRaces.css';
import { NavLink } from "react-router-dom";
import orgrim from './asideImages/orgrim.png';
import durotan from './asideImages/durotan.png';
import aragorn from './asideImages/aragorn.png';
import arwen from './asideImages/arwen.png';
import azog from './asideImages/azog.png';
import balin from './asideImages/balin.png';
import bifur from './asideImages/bifur.png';
import bilbo from './asideImages/bilbo.png';
import bofur from './asideImages/bofur.png';
import bombur from './asideImages/bombur.png';
import boromir from './asideImages/boromir.png';
import denethor from './asideImages/denethor.png';
import dori from './asideImages/dori.png';
import dwalin from './asideImages/dwalin.png';
import elrond from './asideImages/elrond.png';
import beorn from './asideImages/beorn.png';
import bard from './asideImages/bard.png';
import master from './asideImages/master.png';
import radagast from './asideImages/radagast.png';
import smaug from './asideImages/smaug.png';
import bolg from './asideImages/bolg.png';
import eomer from './asideImages/eomer.png';
import eowyn from './asideImages/eowyn.png';
import faramir from './asideImages/faramir.png';
import fili from './asideImages/fili.png';
import kili from './asideImages/kili.png';
import frodo from './asideImages/frodo.png';
import galadriel from './asideImages/galadriel.png';
import gandalf from './asideImages/gandalf.png';
import gimli from './asideImages/gimli.png';
import gloin from './asideImages/gloin.png';
import gollum from './asideImages/gollum.png';
import gothmog from './asideImages/gothmog.png';
import grima from './asideImages/grima.png';
import kingofdeath from './asideImages/kingofdeath.png';
import legolas from './asideImages/legolas.png';
import lurtz from './asideImages/lurtz.png';
import merry from './asideImages/merry.png';
import nazgul from './asideImages/nazgul.png';
import nori from './asideImages/nori.png';
import oin from './asideImages/oin.png';
import ori from './asideImages/ori.png';
import pippin from './asideImages/pippin.png';
import sam from './asideImages/sam.png';
import saruman from './asideImages/saruman.png';
import sauron from './asideImages/sauron.png';
import theoden from './asideImages/theoden.png';
import thorin from './asideImages/thorin.png';
import tom from './asideImages/tom.png';
import bert from './asideImages/bert.png';
import ugluk from './asideImages/ugluk.png';
import witch from './asideImages/witch.png';
import greatgoblin from './asideImages/greatgoblin.png';
import william from './asideImages/william.png';
import tauriel from './asideImages/tauriel.png';
import pavel from './asideImages/pavel.png';
import muradin from './asideImages/muradin.png';
import magni from './asideImages/magni.png';
import llane from './asideImages/llane.png';
import anduin from './asideImages/anduin.png';
import khadgar from './asideImages/khadgar.png';
import medivh from './asideImages/medivh.png';
import garona from './asideImages/garona.png';
import blackhand from './asideImages/blackhand.png';
import guldan from './asideImages/guldan.png';
import darkscare from './asideImages/darkscare.png';
import dain from './asideImages/dain.png';
import thranduil from './asideImages/thranduil.png';
import treebeard from './asideImages/treebeard.png';

const AsideRaces = (props) =>{
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
    const allPersons = props.persons.map(elem=> <div className="asideRacesMainBlockIn" key={elem.id}>
            <NavLink className="mainRacesWithPic" to={'/'+elem.person.split(' ',1)[0]}>
                
                    <div className="personName">{elem.person}</div>
                    <div><img alt='personPic' className="asideImgAll" src={createPicture(elem.warPic)}  /></div>
                
            </NavLink>
        </div>);
    let h1races = props.persons[0].race[0].toUpperCase()  + props.persons[0].race.slice(1) + 's';
    return (
        <div className="asideRacesContainer">
            <h1>{h1races}</h1>
            <hr  />
            <div className="asideRacesMainBlock">
                {allPersons}
            </div>
        </div>
    );
}

export default AsideRaces;