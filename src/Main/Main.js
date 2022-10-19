import './Main.css';
import hobbit1 from './images/hobbit1.jpg';
import hobbit2 from './images/hobbit2.jpg';
import hobbit3 from './images/hobbit3.jpg';
import lotr1 from './images/lotr1.jpg';
import lotr2 from './images/lotr2.jpg';
import lotr3 from './images/lotr3.jpg';
import warcraft from './images/warcraft.jpg';
import { NavLink } from 'react-router-dom';

const Main = () =>{
    return (
      <div className='main'>
        <h3>The Hobbit</h3>
        <div className='hobbitPic'>
          <NavLink className='mainDecoration' to='/hobbit1'>
            The Hobbit: An Unexpected Journey (2012)
          
            <div className='abs'>
              <img src={hobbit1}  />
            </div>
          </NavLink>  
        </div>
        
        <div className='hobbitPic'>
          <NavLink className='mainDecoration' to='/hobbit2'>
            The Hobbit: The Desolation of Smaug (2013)
          
            <div className='abs2'>
              <img src={hobbit2}  />
            </div>
          </NavLink>  
        </div>
        <div className='hobbitPic'>
          <NavLink className='mainDecoration' to='/hobbit3'>
            The Hobbit: The Battle of the Five Armies (2014)
           
            <div className='abs3'>
              <img src={hobbit3}  />
            </div>
          </NavLink>  
        </div>
        <h3>The Lord Of The Rings</h3>
        <div className='lotrPic'>
          <NavLink className='mainDecoration' to='/lotr1'> 
            The Fellowship of the Ring (2001) 
          
          <div className='abs4'>
            <img src={lotr1}  />
          </div>
          </NavLink>
        </div>
        <div className='lotrPic'>
          <NavLink className='mainDecoration' to='/lotr2'>
            The Two Towers (2002)
          
          <div className='abs5'>
            <img src={lotr2}  />
          </div>
          </NavLink> 
        </div>
        <div className='lotrPic'>
          <NavLink className='mainDecoration' to='/lotr3'>
            The Return of the King (2003)
          
          <div className='abs6'>
            <img src={lotr3}  />
          </div>
          </NavLink>
        </div>
        <h3>Warcraft</h3>
        <div className='warcraftPic'>
            <NavLink className='mainDecoration' to='/warcraft'>
              Warcraft: The Beginning
            
          <div className='abs7'>
            <img src={warcraft}  />
          </div>
        </NavLink>  
        </div>
      </div>
    );
  }


  
export default Main;  