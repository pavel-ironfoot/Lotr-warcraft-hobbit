import objcss from './Footer.module.css';
import React, { useRef,useState } from 'react';
import Post from './Post/Post';
import { useDispatch, useSelector } from 'react-redux';


const Footer =()=>{
  const [postName1,setPostName1] = useState([
    {id:1, name:'Some Human',text:'You can leave comments only about movie!',face:'mite'},
    {id:2, name:'Some Orc',text:'No politics and racism here!',face:'orc'},
  ]);
  const [newComment,setNewComment] = useState('enter the comment...');
  const [faceChoose,setFaceChoose] = useState('');
  
  const onChangeFunc=(e)=>{
    setNewComment(e.target.value);
    console.log(newComment);
  }
  const onClickFunc=(e)=>{
      setPostName1([
      {id:3, name:'Some Guest',text:newComment,face:faceChoose},
      ...postName1,
    ]);
    setNewComment('new comment...');
  }
  const changeFace=(e)=>{
    console.log(e.target.value);
    setFaceChoose(e.target.value)
  }

   const addBlock =(e)=>{
    if(e.key ==='Enter'){
      setPostName1([
        {id:3, name:'Some Guest',text:newComment,face:faceChoose},
        ...postName1,
      ]);
      setNewComment('new comment...');
    }
   } 
    let postNames = postName1.map((item,index,arr)=>{
        return item = <Post key={index} name={item.name} text={item.text} face={item.face} />
    });

      return (
        <div className={objcss.footer}>
          <h4>Your comment</h4>

        <select value={faceChoose} onChange={changeFace} >
          <option value='' disabled>Your race</option>
          <option value='orc'>Orc</option>
          <option value='human'>Human</option>
          <option value='dwarf'>Dwarf</option>
          <option value='wizard'>Wizard</option>
          <option value='hobbit'>Hobbit</option>
          <option value='elf'>Elf</option>
          <option value='nazgul'>Nazgul</option>
          <option value='troll'>Troll</option>
          <option value='goblin'>Goblin</option>
        </select>
        <br />
          <textarea onChange={onChangeFunc} onKeyDown={addBlock} cols={30} rows={2} value={newComment}></textarea>
          <button onClick={onClickFunc}>add comment</button>
          
        {postNames}

        </div>
      );
  }

  


export default Footer;