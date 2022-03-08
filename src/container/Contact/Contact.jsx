import React, { useState } from 'react'
import { client } from '../../client';

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
      console.log("senfing")

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
         <h2 className='head-text'>Contactame</h2>
         
         <div className='app__contact-content'>
            <div className='app__contact-cards'>
               <div className='app__contact-card'>
                  <PhoneIcon />
                  <a href="mailto:daniel.int@outlook.com" className='p-text'>daniel.int@outlook.com</a>
               </div>
               <div className='app__contact-card'>
                  <EmailIcon />
                  <a href="mailto: +51 966321885" className='p-text'> +51 966321885</a>
               </div>
            </div>
            {!isFormSubmitted ? 
               <div className='app__contact-form app__flex'>
                  <div className='app__flex'>
                     <input 
                        type="text" 
                        className='p-text'
                        placeholder='Nombre'
                        name={name}
                        onChange={handleChangeInput}
                     />
                  </div>

                  <div className='app__flex'>
                     <input 
                        type="email" 
                        className='p-text'
                        placeholder='Email'
                        name={email}
                        onChange={handleChangeInput}
                     />
                  </div>
                  <div className='app__flex'>
                     <textarea 
                        type="text" 
                        className='p-text'
                        placeholder='Mensaje'
                        name={message}
                        onChange={handleChangeInput}
                     />
                  </div>
                  <Button 
                     text={loading ? 'Enviando':'Enviar Mensaje'} 
                     classes='big-button'
                     onClick={handleSubmit}
                  />
                  
               </div>
            :
               <div className='successfull app__flex'>
                  <p>Tu mensaje a sido enviado</p>
               </div> 
            }

         </div>
      </section>
   )
}

export default Contact;