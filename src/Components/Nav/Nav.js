import React, {useState,useEffect} from 'react'
import './style.css'


export const Nav = () => {
    // const [show, handleShow] = useState(false)
    // useEffect(() => {
    //   window.addEventListener("scroll", () =>{
    //       if(window.scrollY > 100 ){
    //         handleShow(true);
    //       } else handleShow(false);
    //   });
    //   return () => {
    //     window.removeEventListener("scroll");
    //   };
    // }, [])
    
  return (
    <div className="nav_main">
        <img 
        className='nav_logo'
        src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
        alt="Netflix Logo"
        />
        <img 
        className='nav_logo'
        src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
        alt="Netflix Logo"
        />
    </div>
  )
}
