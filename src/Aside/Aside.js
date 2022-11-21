import { NavLink } from 'react-router-dom';
import obj from './Aside.module.css';



const Aside = (props) =>{

  let lightRase = props.allLight.map((item,index)=>{
    return <RaseLight key={index} pass={item.pass} rase={item.rase} />
  });
  let darkRase = props.allDark.map((item,index)=>{
    return <RaseDark key={index} pass={item.pass} rase={item.rase} />
  });

    return (
      <div className={obj.aside}>
        <NavLink className={obj.movies} to='/Lotr-warcraft-hobbit'>All Movies</NavLink>
        <h3>Light side</h3>
        
          {lightRase}

        <h3>Dark side</h3>

          {darkRase}

      </div>
    );
  }

 function RaseLight(props) {
  let l = '/' + props.pass;
  return (
    <NavLink className={obj.lightSide} to={l}>
      {props.rase}
    </NavLink>
  );
 } 

 function RaseDark(props){
  let l ='/'+props.pass;
    return (
      <NavLink className={obj.darkSide} to={l}>
        {props.rase}
      </NavLink>
    );
 } 

export default Aside;  