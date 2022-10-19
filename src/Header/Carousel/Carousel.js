import objHeader from './Carousel.module.css';
import React, {useState,useEffect} from 'react'

import lotr2 from './images/lotr2.jpg';
import lotr3 from './images/lotr3.jpg';
import lotr4 from './images/lotr4.jpg';
import lotr5 from './images/lotr5.jpg';
import lotr6 from './images/lotr6.jpg';
import lotr7 from './images/lotr7.jpg';
import lotr8 from './images/lotr8.jpg';
import lotr9 from './images/lotr9.jpg';
import lotr10 from './images/lotr10.jpg';
import lotr11 from './images/lotr11.jpg';
import lotr12 from './images/lotr12.jpg';
import lotr13 from './images/lotr13.jpg';
import lotr14 from './images/lotr14.jpg';
import lotr15 from './images/lotr15.jpg';
import lotr16 from './images/lotr16.png';
import lotr17 from './images/lotr17.jpg';
import lotr18 from './images/lotr18.jpg';
import lotr19 from './images/lotr19.jpg';
import lotr20 from './images/lotr20.jpg';
import lotr21 from './images/lotr21.jpg';
import lotr22 from './images/lotr22.jpg';
import lotr23 from './images/lotr23.jpg';
import lotr24 from './images/lotr24.jpg';
import lotr25 from './images/lotr25.jpg';
import lotr26 from './images/lotr26.jpg';
import lotr27 from './images/lotr27.jpg';
import lotr28 from './images/lotr28.jpg';
import lotr29 from './images/lotr29.jpg';
import lotr30 from './images/lotr30.jpg';


import war1 from './images/war1.jpg';
import war2 from './images/war2.jpg';
import war3 from './images/war3.jpg';
import war4 from './images/war4.jpg';
import war5 from './images/war5.jpg';
import war6 from './images/war6.jpg';
import war7 from './images/war7.jpg';
import war8 from './images/war8.jpg';

const Carousel = () => {
    const [imageWidth,setImageWidth] = useState(0);
    //const [pages,setPages] = useState([]);
    // 722   25992
    const handleLeftArrow =()=>{
        setImageWidth(imageWidth-100);
        if(imageWidth<=0){
            setImageWidth(3600);
        }
    }


    // function moveSlider(){
    //     handleRightArrow();
    //     console.log(imageWidth);
    //     setTimeout(moveSlider,4000);
    // }
    useEffect(()=>{
        const flagInterval = setInterval(()=>{
            handleRightArrow();
        },4000);

        return ()=> clearInterval(flagInterval);
    });


    const handleRightArrow =()=>{
        setImageWidth(imageWidth+100);
        if(imageWidth>=3600){
            setImageWidth(0);
        }
    }


    return (
      <div className={objHeader.twoHeader}>  
        <div className={objHeader.containerIn}>
            <div onClick={handleLeftArrow} className={`${objHeader.bt1} ${objHeader.bt}`}></div>
            <div className={objHeader.slider}>
                <div style={
                    {right:imageWidth+'%',}
                } className={objHeader.images}>
                    <img src={lotr2} alt='lotr' />
                    <img src={lotr3} alt='lotr' />
                    <img src={lotr4} alt='lotr' />
                    <img src={war1} alt='warcraft' />
                    <img src={lotr5} alt='lotr' />
                    <img src={lotr6} alt='lotr' />
                    <img src={lotr7} alt='lotr' />
                    <img src={war6} alt='warcraft' />
                    <img src={lotr8} alt='lotr' />
                    <img src={lotr9} alt='lotr' />
                    <img src={war8} alt='warcraft' />
                    <img src={lotr10} alt='lotr' />
                    <img src={lotr11} alt='lotr' />
                    <img src={lotr12} alt='lotr' />
                    <img src={lotr13} alt='lotr' />
                    <img src={war2} alt='warcraft' />
                    <img src={lotr14} alt='lotr' />
                    <img src={lotr15} alt='lotr' />
                    <img src={lotr16} alt='lotr' />
                    <img src={war5} alt='warcraft' />
                    <img src={lotr17} alt='lotr' />
                    <img src={lotr18} alt='lotr' />
                    <img src={lotr19} alt='lotr' />
                    <img src={war7} alt='warcraft' />
                    <img src={lotr20} alt='lotr' />
                    <img src={lotr21} alt='lotr' />
                    <img src={lotr22} alt='lotr' />
                    <img src={lotr23} alt='lotr' />
                    <img src={lotr24} alt='lotr' />
                    <img src={lotr25} alt='lotr' />
                    <img src={war4} alt='warcraft' />
                    <img src={lotr26} alt='lotr' />
                    <img src={lotr27} alt='lotr' />
                    <img src={lotr28} alt='lotr' />
                    <img src={lotr29} alt='lotr' />
                    <img src={war3} alt='warcraft' />
                    <img src={lotr30} alt='lotr' />
                </div>
            </div>
            <div onClick={handleRightArrow}  className={`${objHeader.bt2} ${objHeader.bt}`}></div>
        </div>         
      </div>

    );
  }


export default Carousel;


// const Carousel = () => {
//     return (
//       <div className={objHeader.twoHeader}>
//         <div className={objHeader.containerIn}>
//             <div className={`${objHeader.bt1} ${objHeader.bt}`}></div>
//             <div className={objHeader.slider}>
//                 <div className={objHeader.images}>
//                     <img src={lotr1} alt='lotr' />
//                 </div>
//             </div>
//             <div className={`${objHeader.bt2} ${objHeader.bt}`}></div>
//         </div>         
//       </div>

//     );
//   }