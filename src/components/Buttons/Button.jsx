import React from 'react';

import './Button.scss';

const Button = ({ text, classes, onClick }) => {
   return (
      <button className={`button ${classes}`} onClick={onClick}>
         {text}
      </button>
   );
}

export default Button;

  
