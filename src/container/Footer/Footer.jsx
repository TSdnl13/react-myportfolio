import React from 'react';

import './Footer.scss';

const Footer = () => {
   return (
      <div className='app__footer'>
         <div className='app__footer-line'></div>   
         <div className='app__footer-copyright'>
            <p className='p-text'>Copyright © 2022 Daniel Ricra</p>
         </div>
      </div>
   )
}

export default Footer