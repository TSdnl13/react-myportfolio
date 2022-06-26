import React from 'react';
import { motion } from 'framer-motion';
import Tilt  from 'react-vanilla-tilt';

import { images } from '../../constants';
import './About.scss';

const About = () => {

   return (
      <section className='app__about app__flex' id='acerca'>
         <motion.div 
            initial={{x: "-100%"}}
            whileInView={{ x: 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className='app__about-images'
         >
            
            <Tilt 
               className='app__about-image'
               options={{ max: 45, speed: 300, glare: true, "max-glare": 1}}
               style={{}}
            >
               <div className='about-overlay'></div>
               <img src={images.DRabout} alt="about" />
               
               <div className='app__about-grids'>
                  <img src={images.grid} alt="grid" />
                  <img src={images.grid} alt="grid" />
                  <img src={images.grid} alt="grid" />
                  <img src={images.grid} alt="grid" />
               </div>
            </Tilt>
         </motion.div>

         <motion.div
            whileInView={{ x: [200, 0], opacity: [0, 1] }}
            transition={{ duration:1, ease: "easeInOut" }}
            className='app__about-content'
         >  
            <h2 className='head-text'>Sobre mi</h2>
            <p className='p-text'>Honesto, comprometido con el trabajo, apto para todo tipo de labor en el campo de Desarrollo de Software. Curioso y siempre con ganas de aprender nuevas tecnologias y mejorar mis conocimientos en el campo</p>
            <ul>
               <li>
                  <img src={images.check} alt="check" />
                  <span>Ideas Creativas</span>
               </li>
               <li>
                  <img src={images.check} alt="check" />
                  <span>Resolver problemas comunes</span>
               </li>
               <li>
                  <img src={images.check} alt="check" />
                  <span>Investigar problemas</span>
               </li>
            </ul>
         </motion.div>
      </section>
   )
}

export default About