import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import { Button } from '../../components';
import './Navbar.scss';

const Navbar = () => {

   const [toggle, setToggle] = useState(false);
   const [active, setActive] = useState("")

   function animateToggle() {
      if (!active) {
         setActive("active");
         setToggle(true)
      }
      else { 
         setActive("")
         setToggle(false);
      }
   }

   useEffect(() => {
      if (document.body.className === '' && toggle)
         document.body.classList.add('hide-overflow');
      
     else {
         document.body.classList.remove('hide-overflow');
      }
   }, [active])
   

   return (
      <nav className='app__navbar app__flex'>
         <div className='app__navbar-logo'>
            Daniel
         </div>

         <ul className='app__navbar-links app__flex'>
            {["Inicio", "Acerca", "Proyectos", "Habilidades",  "Contacto"].map((item) => (
               <li className='app__navbar-link' key={`link-${item}`}>
                  <a href={`#${item.toLowerCase()}`} >{item}</a>
               </li>
            ))}
            
            <Button text="CV" /> 
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