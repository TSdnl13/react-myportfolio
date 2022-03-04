import React, { useState } from 'react';
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

   return (
      <nav className='app__navbar app__flex'>
         <div className='app__navbar-logo'>
            Daniel <span>Ricra</span>
         </div>

         <ul className='app__navbar-links app__flex'>
            {["Inicio", "Habilidades", "Proyectos", "Contacto"].map((item) => (
               <li className='app__navbar-link' key={`link-${item}`}>
                  <a href={`#${item}`} >{item}</a>
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
                           {["Inicio", "Habilidades", "Proyectos", "Contacto"].map((item) => (
                              <li className='app__navbar-link' key={`link-${item}`}>
                                 <a href={`#${item}`} onClick={() => animateToggle()} >{item}</a>
                              </li>
                           ))}
                        </ul>

                        <Button text="CV" />
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