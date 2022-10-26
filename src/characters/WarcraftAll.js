import './Characters.css';
import orgrim from './images/orgrim.png';
import durotan from './images/durotan.png';
import aragorn from './images/aragorn.png';
import arwen from './images/arwen.png';
import azog from './images/azog.png';
import balin from './images/balin.png';
import bifur from './images/bifur.png';
import bilbo from './images/bilbo.png';
import bofur from './images/bofur.png';
import bombur from './images/bombur.png';
import boromir from './images/boromir.png';
import denethor from './images/denethor.png';
import dori from './images/dori.png';
import dwalin from './images/dwalin.png';
import elrond from './images/elrond.png';
import beorn from './images/beorn.png';
import bard from './images/bard.png';
import master from './images/master.png';
import radagast from './images/radagast.png';
import smaug from './images/smaug.png';
import bolg from './images/bolg.png';
import eomer from './images/eomer.png';
import eowyn from './images/eowyn.png';
import faramir from './images/faramir.png';
import fili from './images/fili.png';
import kili from './images/kili.png';
import frodo from './images/frodo.png';
import galadriel from './images/galadriel.png';
import gandalf from './images/gandalf.png';
import gimli from './images/gimli.png';
import gloin from './images/gloin.png';
import gollum from './images/gollum.png';
import gothmog from './images/gothmog.png';
import grima from './images/grima.png';
import kingofdeath from './images/kingofdeath.png';
import legolas from './images/legolas.png';
import lurtz from './images/lurtz.jpg';
import merry from './images/merry.png';
import nazgul from './images/nazgul.png';
import nori from './images/nori.png';
import oin from './images/oin.png';
import ori from './images/ori.png';
import pippin from './images/pippin.png';
import sam from './images/sam.png';
import saruman from './images/saruman.png';
import sauron from './images/sauron.png';
import theoden from './images/theoden.png';
import thorin from './images/thorin.jpg';
import tom from './images/tom.png';
import bert from './images/bert.png';
import ugluk from './images/ugluk.png';
import witch from './images/witch.png';
import greatgoblin from './images/greatgoblin.png';
import william from './images/william.png';
import tauriel from './images/tauriel.png';
import pavel from './images/pavel.jpg';
import muradin from './images/muradin.png';
import magni from './images/magni.png';
import llane from './images/llane.png';
import anduin from './images/anduin.png';
import khadgar from './images/khadgar.png';
import medivh from './images/medivh.png';
import garona from './images/garona.png';
import blackhand from './images/blackhand.png';
import guldan from './images/guldan.png';
import darkscare from './images/darkscare.png';
import dain from './images/dain.png';
import thranduil from './images/thranduil.png';
import treebeard from './images/treebeard.png';
import { NavLink } from 'react-router-dom';

const WarcraftAll= (props) =>{
    const createPicture=()=>{
        if(props.warCh.warPic=='durotan'){
            return durotan;
        }else if(props.warCh.warPic=='orgrim'){
            return orgrim;
        }else if(props.warCh.warPic=='greatgoblin'){
            return greatgoblin;
        }else if(props.warCh.warPic=='tom'){
            return tom;
        }else if(props.warCh.warPic=='bert'){
            return bert;
        }else if(props.warCh.warPic=='william'){
            return william;
        }else if(props.warCh.warPic=='master'){
            return master;
        }else if(props.warCh.warPic=='bard'){
            return bard;
        }else if(props.warCh.warPic=='beorn'){
            return beorn;
        }else if(props.warCh.warPic=='smaug'){
            return smaug;
        }else if(props.warCh.warPic=='aragorn'){
            return aragorn;
        }else if(props.warCh.warPic=='arwen'){
            return arwen;
        }else if(props.warCh.warPic=='azog'){
            return azog;
        }else if(props.warCh.warPic=='balin'){
            return balin;
        }else if(props.warCh.warPic=='orgrim'){
            return orgrim;
        }else if(props.warCh.warPic=='bifur'){
            return bifur;
        }else if(props.warCh.warPic=='bilbo'){
            return bilbo;
        }else if(props.warCh.warPic=='bofur'){
            return bofur;
        }else if(props.warCh.warPic=='bombur'){
            return bombur;
        }else if(props.warCh.warPic=='boromir'){
            return boromir;
        }else if(props.warCh.warPic=='denethor'){
            return denethor;
        }else if(props.warCh.warPic=='dori'){
            return dori;
        }else if(props.warCh.warPic=='dwalin'){
            return dwalin;
        }else if(props.warCh.warPic=='elrond'){
            return elrond;
        }else if(props.warCh.warPic=='eomer'){
            return eomer;
        }else if(props.warCh.warPic=='eowyn'){
            return eowyn;
        }else if(props.warCh.warPic=='faramir'){
            return faramir;
        }else if(props.warCh.warPic=='fili'){
            return fili;
        }else if(props.warCh.warPic=='frodo'){
            return frodo;
        }else if(props.warCh.warPic=='galadriel'){
            return galadriel;
        }else if(props.warCh.warPic=='gandalf'){
            return gandalf;
        }else if(props.warCh.warPic=='gimli'){
            return gimli;
        }else if(props.warCh.warPic=='gloin'){
            return gloin;
        }else if(props.warCh.warPic=='gollum'){
            return gollum;
        }else if(props.warCh.warPic=='gothmog'){
            return gothmog;
        }else if(props.warCh.warPic=='grima'){
            return grima;
        }else if(props.warCh.warPic=='kili'){
            return kili;
        }else if(props.warCh.warPic=='kingofdeath'){
            return kingofdeath;
        }else if(props.warCh.warPic=='legolas'){
            return legolas;
        }else if(props.warCh.warPic=='lurtz'){
            return lurtz;
        }else if(props.warCh.warPic=='merry'){
            return merry;
        }else if(props.warCh.warPic=='nazgul'){
            return nazgul;
        }else if(props.warCh.warPic=='nori'){
            return nori;
        }else if(props.warCh.warPic=='oin'){
            return oin;
        }else if(props.warCh.warPic=='ori'){
            return ori;
        }else if(props.warCh.warPic=='pippin'){
            return pippin;
        }else if(props.warCh.warPic=='sam'){
            return sam;
        }else if(props.warCh.warPic=='saruman'){
            return saruman;
        }else if(props.warCh.warPic=='sauron'){
            return sauron;
        }else if(props.warCh.warPic=='theoden'){
            return theoden;
        }else if(props.warCh.warPic=='thorin'){
            return thorin;
        }else if(props.warCh.warPic=='ugluk'){
            return ugluk;
        }else if(props.warCh.warPic=='witch'){
            return witch;
        }else if(props.warCh.warPic=='bolg'){
            return bolg;
        }else if(props.warCh.warPic=='radagast'){
            return radagast;
        }else if(props.warCh.warPic=='tauriel'){
            return tauriel;
        }else if(props.warCh.warPic=='dain'){
            return dain;
        }else if(props.warCh.warPic=='pavel'){
            return pavel;
        }else if(props.warCh.warPic=='llane'){
            return llane;
        }else if(props.warCh.warPic=='anduin'){
            return anduin;
        }else if(props.warCh.warPic=='guldan'){
            return guldan;
        }else if(props.warCh.warPic=='garona'){
            return garona;  
        }else if(props.warCh.warPic=='blackhand'){
            return blackhand;
        }else if(props.warCh.warPic=='darkscare'){
            return darkscare;
        }else if(props.warCh.warPic=='magni'){
            return magni;
        }else if(props.warCh.warPic=='muradin'){
            return muradin;
        }else if(props.warCh.warPic=='medivh'){
            return medivh;
        }else if(props.warCh.warPic=='khadgar'){
            return khadgar;
        }else if(props.warCh.warPic=='thranduil'){
            return thranduil;
        }else if(props.warCh.warPic=='treebeard'){
            return treebeard;
        } 
    };
    return (
        <div className='mainCharacter'>
            <h1>{props.warCh.person}</h1>
            <hr  />
            <img className='characterImg' src={createPicture()} alt='warcraft'  />
            <h4>{props.warCh.h4}</h4>
            <h4>{props.warCh.h44}</h4>
            <hr  />
            <p> {props.warCh.about}</p>
            <p>{props.warCh.about1}</p>
            <p>{props.warCh.about2}</p>
            <hr  />
            <h4>Movies:</h4>
            <div className='movieNavs'>
                <div>
                    <NavLink className='characterMovie' to={props.warCh.to1}>{props.warCh.movie1}</NavLink>
                </div>
                <div>
                    <NavLink className='characterMovie' to={props.warCh.to2}>{props.warCh.movie2}</NavLink>
                </div>
                <div>
                    <NavLink className='characterMovie' to={props.warCh.to3}>{props.warCh.movie3}</NavLink>
                </div>
                <div>
                    <NavLink className='characterMovie' to={props.warCh.to4}>{props.warCh.movie4}</NavLink>
                </div>
                <div>
                    <NavLink className='characterMovie' to={props.warCh.to5}>{props.warCh.movie5}</NavLink>
                </div>
                <div>
                    <NavLink className='characterMovie' to={props.warCh.to6}>{props.warCh.movie6}</NavLink>
                </div>
                <div>
                    <NavLink className='characterMovie' to={props.warCh.to7}>{props.warCh.movie7}</NavLink>
                </div>
            </div>
        </div>
    );
}

export default WarcraftAll;