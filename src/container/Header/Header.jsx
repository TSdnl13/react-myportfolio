import React from 'react';
import { motion } from 'framer-motion'; 

import './Header.scss';
import { images } from '../../constants';

const Header = () => {
   return (
      <section className='app__home'>
         <div className='app__home-content'>
            <h2 className='p-text'>Hola, soy</h2>
            <h1 className='head-text'>Daniel Ricra</h1>
            <p className='p-text'>Ingeniero de Software, diseño y programo cosas bonitas y simples, y amo lo que ago.</p>
         </div>

         <div className='app__home-imgs app__flex'>
               <motion.img 
                  whileInView={{ scale:[0, 1] }}
                  transition={{ duration: 1, ease: 'easeInOut' }}    
                  className='app__home-img' 
                  src={ images.DLheader }
                  alt="profile-photo"
               />         

               <motion.img
                  whileInView={{ scale: [0, 1]}}
                  transition={{ duration: 1, ease: 'easeIn' }}
                  className='app__home-circle app__flex'
                  src={ images.circle }
                  alt="circle-bg"
               />
         </div>
         
         <motion.div 
            whileInView={{ scale: [0, 1] }}
            transition={{duration: 1 }}
            className='app__home-circles'
         >
            {[images.mainreact, images.mainjava, images.mainpython].map((item, index) => (
               <motion.div
                  whileHover={{rotate: 20 }}
                  transition={{duration: .3 }}
                  key={`circle-${index}`}
               >
                  <img src={item} alt={`icon-${index}`} />
               </motion.div>
            ))}
         </motion.div>
      </section>
   )
}

export default Header;