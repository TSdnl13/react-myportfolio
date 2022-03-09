import React, { useState, useEffect} from 'react';

import { client, urlFor } from '../../client';
import { motion } from 'framer-motion';
import './Skills.scss';

const Skills = () => {

   const [skills, setSkills] = useState([]);

   useEffect(() => {
      const query = '*[_type == "skills"]';
      
      client.fetch(query)
         .then(data => {
            setSkills(data);
         });
     
   }, []);
   

   return (
      <section className='app__skills app__flex' id='habilidades'>
         <h2 className='head-text'>Skills</h2>

         <div className='app__skills-list'>
            {skills.map((skill, index) => (
               <motion.div
                  initial={{x: (index % 2 == 0 ? "-50%":"50%")}}
                  whileInView={{opacity: [0, 1], x: 0 }}
                  transition={{duration: 0.8 }}
                  className='app__skills-item'
                  key={skill.name}
               >
                  <div>
                     <img src={urlFor(skill.icon)} alt={skill.name} />
                  </div>
                  <p className='p-text'>{skill.name}</p>
               </motion.div>
            ))}
         </div>
      </section>
   );
}

export default Skills;