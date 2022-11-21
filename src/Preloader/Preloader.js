import styles from './Preloader.module.css';
import oneRingPreloader from './oneRing.png';
import React from 'react';
const Preloader = () => {
    const [displayPr,setDisplayPt] = React.useState('block');

    let timePreloader= setTimeout(()=>{
            console.log('set');
            setDisplayPt('none');          
        },3000)


    return (
        <div style={{ display: displayPr}} className={styles.Preloader}>
            <img className={styles.preloaderImg} src={oneRingPreloader} alt="one ring"></img>
        </div>
);
}
export default Preloader;