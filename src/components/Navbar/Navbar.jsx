import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import { Button } from '../../components';
import { images } from '../../constants';
import './Navbar.scss';
import PDF from'../../assets/CV_Daniel-Ricra.pdf';

const Navbar = () => {

   const [toggle, setToggle] = useState(false);
   const [active, setActive] = useState("");
   const [navClass, setNavClass] = useState("");

   function animateToggle() {
      if (!active) {
         setActive("active");
         setToggle(true);
      }
      else { 
         setActive("");
         setToggle(false);
      }
   }

   useEffect(() => {
      let lastScrollY = window.scrollY;
      window.addEventListener("scroll", () => {
         if (lastScrollY < window.scrollY) {
            setNavClass("hide-nav");
         } else {
            setNavClass("");
         }
         if (window.scrollY <= 10) setNavClass("static-nav")
         lastScrollY = window.scrollY;
      });

      return () => {
         window.removeEventListener("scroll", null);
      };

   }, []);

   useEffect(() => {
      if (document.body.className === '' && toggle)
         document.body.classList.add('hide-overflow');
      
     else {
         document.body.classList.remove('hide-overflow');
      }
   // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [active]);

   return (
      <nav className={`app__navbar app__flex ${navClass}`}>
         <a href="/" className='app__navbar-logo'>
            <img src={images.logo} alt="logo" />
         </a>

         <ul className='app__navbar-links app__flex'>
            {["Inicio", "Acerca", "Proyectos", "Habilidades",  "Contacto"].map((item) => (
               <li className='app__navbar-link' key={`link-${item}`}>
                  <a href={`#${item.toLowerCase()}`} >{item}</a>
               </li>
            ))}
            
            <a className='button' href={PDF} target='_blank' rel='noopener noreferrer'>CV</a> 
         </ul>

         <div className='app__navbar-menu'>
            <div 
               className={`menu-toggle ${active}`} 
               onClick={() => animateToggle()}
            >
               <span></span>
               <span></span>
               <span></span>   
            </div>
            { toggle && (
               <>
                  <div className='app__navbar-menu-aside' >
                     <motion.nav
                        whileInView={{ opacity: [0, 1], scale: [0, 1] }}
                        transition={{ delay: 0.3}}
                        className="app__flex"
                     >
                        <ul>
                           {["Inicio", "Acerca", "Proyectos", "Habilidades",  "Contacto"].map((item) => (
                              <li className='app__navbar-link' key={`link-${item}`}>
                                 <a href={`#${item.toLowerCase()}`} onClick={() => animateToggle()} >{item}</a>
                              </li>
                           ))}
                        </ul>

                        <Button text="CV" classes='aside-button' />
                     </motion.nav>
                  </div>
                  <div 
                     className='menu-overlay'
                     onClick={() => animateToggle()}
                  ></div>
               </>
            )}
         </div>
      </nav>
   )
}

export default Navbar;