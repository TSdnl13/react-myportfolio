import React, { useEffect, useState} from 'react';
import { motion } from 'framer-motion';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import { RiGithubLine } from 'react-icons/ri';
import { FiExternalLink } from 'react-icons/fi';

import { urlFor, client } from '../../client';
import './Projects.scss';

const Projects = () => {
   const [projects, setProjects] = useState([]);
   const [currentIndex, setCurrentIndex] = useState(0);

   useEffect(() => {
      const query = '*[_type == "works"]';
      
      client.fetch(query)
         .then(data => {
            setProjects(data);
         });
   }, []);

   const handleClick = (index) => {
      setCurrentIndex(index)
   }

   const selectedProject = projects[currentIndex];

   return (
      <div className='app__projects' id='proyectos' >
         <motion.div 
            initial={{x: "-50%" }}
            whileInView={{ x: 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className='bg-dark-purple app__flex'
         >
            <h2 className='head-text'>Mis Proyectos</h2>
            <div className='projects-container' >
               {projects.map((project, index)=> (
                  <div className={index === currentIndex ? 'app__projects-project slide active':'app__projects-project slide'}
                     key={`project-${index}`}
                  >
                     {index === currentIndex && (
                        <>
                        <div className='project-img'>
                           <img
                              src={urlFor(project.imgUrl)} 
                              alt={project.title} 
                           />
                        </div>
                        <div className='project-content'>
                           <h3>{project.title}</h3>
                           <p>{project.description}</p>
                           <ul>
                              {project.languages.map((language, index)=> (
                                 <li key={`language-${index}`}>
                                    <span>{language}</span>
                                 </li>
                              ))}
                           </ul>
                           <div className='project-content-tag'>
                              <p className='p-text'>{project.tags[0]}</p>
                           </div>

                           <div className='project-links'>
                              <a href={project.codeLink} alt="github" className='app__flex' target="_blank" rel="noreferrer">
                                 <RiGithubLine />
                              </a>
                              <a href={project.projectLink} alt="website" className='app__flex' target="_blank" rel="noreferrer">
                                 <FiExternalLink />
                              </a>
                           </div>
                        </div>
                        </>
                     )}
                  </div>
               ))}

               <div className='app__projects-buttons'>
                  <div className='app__flex' onClick={()=> handleClick(currentIndex <= 0 ? projects.length - 1: currentIndex - 1)}>
                     <HiChevronLeft />
                  </div>
                  <div className='app__flex'>
                     <HiChevronRight onClick={()=> handleClick(currentIndex >= projects.length - 1 ? 0: currentIndex + 1)} />
                  </div>
               </div>
            </div>
         </motion.div>
      </div>
   );
}

export default Projects;