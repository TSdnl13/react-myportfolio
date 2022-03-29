import React, { useState } from 'react'
import { client } from '../../client';
import { motion } from 'framer-motion';

import { PhoneIcon, EmailIcon } from '../../components';
import { Button } from '../../components';
import './Contact.scss';

const Contact = () => {

   const [formData, setFormData] = useState({name: '', email: '', message: ''});
   const [isFormSubmitted, setIsFormSubmitted] = useState(false);
   const [loading, setLoading] = useState(false);

   const { name, email, message } = formData;

   const handleChangeInput = (e) => {
      const {name, value } = e.target;
      setFormData({...formData, [name]: value });
   }

   const handleSubmit = () => {
      setLoading(true);
      
      const contact = {
         _type: 'contact',
         name: name,
         email: email,
         message: message
      }

      client.create(contact)
         .then(() => {
            setLoading(false);
            setIsFormSubmitted(true);
         });
   }

   return (
      <section className='app__contact app__flex' id='contacto'>
         <motion.h2 
            whileInView={{opacity: [0,1]}}
            transition={{duration: 1}}
            className='head-text'
         >Contactame</motion.h2>
         
         <div className='app__contact-content'>
            <motion.div 
               initial={{x:"-50%"}}
               whileInView={{x:0}}
               transition={{duration: 1, ease: 'easeInOut'}}
               className='app__contact-cards'
            >
               <div className='app__contact-card'>
                  <EmailIcon />
                  <a href="mailto:daniel.int@outlook.com" className='p-text'>daniel.int@outlook.com</a>
               </div>
               <div className='app__contact-card'>
                  <PhoneIcon />
                  <a href="mailto: +51 966321885" className='p-text'> +51 966321885</a>
               </div>
            </motion.div>
            {!isFormSubmitted ? 
               <motion.div 
                  className='app__contact-form app__flex'
                  initial={{x:"50%"}}
                  whileInView={{x:0}}
                  transition={{duration: 1, ease: 'easeInOut'}}
               >
                  <div className='app__flex'>
                     <input 
                        type="text" 
                        className='p-text'
                        placeholder='Nombre'
                        value={name}
                        name='name'
                        onChange={handleChangeInput}
                     />
                  </div>

                  <div className='app__flex'>
                     <input 
                        type="email" 
                        className='p-text'
                        placeholder='Email'
                        value={email}
                        name='email'
                        onChange={handleChangeInput}
                     />
                  </div>
                  <div className='app__flex'>
                     <textarea 
                        type="text" 
                        className='p-text'
                        placeholder='Mensaje'
                        name='message'
                        value={message}
                        onChange={handleChangeInput}
                     />
                  </div>
                  <Button 
                     text={loading ? 'Enviando':'Enviar Mensaje'} 
                     classes='big-button'
                     onClick={() => handleSubmit()}
                  />
                  
               </motion.div>
            :
               <motion.div 
                  initial={{x: 0, y: 40}}
                  className='successfull app__flex'
                  whileInView={{opacity: [0, 1], x: 0, y: 0}}
                  duration={{ duration: 1, ease: 'easeInOut'}}
               >
                  <p>Tu mensaje a sido enviado</p>
               </motion.div> 
            }

         </div>
      </section>
   )
}

export default Contact;