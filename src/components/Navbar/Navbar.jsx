import React, { useState } from 'react';
import { motion } from 'framer-motion';

import './Navbar.scss';

const Navbar = () => {

   const [toggle, setToggle] = useState(false);

   return (
      <div className='app__navbar'>
         <div className='app__navbar-logo'>
            Daniel <span>Ricra</span>
         </div>

         <ul className='app__navbar-links'>
            {["Inicio", "Habilidades", "Proyectos", "Contacto"].map((item) => (
               <li className='app__navbar-link' key={`link-${item}`}>
                  <a href={`#${item}`} >{item}</a>
               </li>
            ))}
         </ul>

         <div className='app__navbar-menu'>
            <div>Menu</div>
            { toggle && (
               <motion.div>
                  {["Inicio", "Habilidades", "Proyectos", "Contacto"].map((item) => (
                     <li className='app__navbar-link' key={`link-${item}`}>
                        <a href={`#${item}`} >{item}</a>
                     </li>
                  ))}

               </motion.div>
            )}
         </div>
      </div>
   )
}

export default Navbar;