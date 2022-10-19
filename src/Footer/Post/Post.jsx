import human from './../images/human.png';
import orc from './../images/orc.png';
import mite from './../images/mite.png';
import wizard from './../images/wizard.png';
import hobbit from './../images/hobbit.png';
import dwarf from './../images/dwarf.png';
import elf from './../images/elf.png';
import troll from './../images/troll.jpg';
import goblin from './../images/goblin.jpg';
import nazgul from './../images/nazgul.png';

import objcss from './Post.module.css';




const Post =(props) =>{
    console.log(props.face);
function changePicture(){
    //let num =Math.floor(Math.random()*4+1) ;
    let num = props.face;
    if (num =='human' || num =='') {
        return human;
    }else if(num=='orc'){
        return orc;
    }else if(num=='mite'){
        return mite;
    }else if(num=='wizard'){
        return wizard;
    }else if(num=='hobbit'){
        return hobbit;
    }else if(num=='dwarf'){
        return dwarf;
    }else if(num=='elf'){
        return elf;
    }else if(num=='troll'){
        return troll;
    }else if(num=='nazgul'){
        return nazgul;
    }else if(num=='goblin'){
        return goblin;
    }
}    
    return (
        <div className={objcss.container}>
            <div className={objcss.img}>
                {/* <img src={changePicture()} alt='face Icon' /> */}
                <img src={changePicture()} alt='face icon'  />
            </div>
            <div>
                <div className={objcss.postName}>{props.name}</div>
                <div className={objcss.postText}>{props.text}</div>
            </div>
        </div>
    );
}  

export default Post;