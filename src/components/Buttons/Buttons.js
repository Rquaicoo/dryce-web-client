import React from 'react';
import './Buttons.css';

const Buttons = ({title, color, textColor, bordercolor, border, bradius, shadow, funct}) => {
  return (

      <button onClick={funct}
      style={{
        backgroundColor: color, 
        color: textColor, 
        borderWidth: border,
        boxShadow: shadow,
        borderRadius: bradius,
        borderStyle: 'solid',
        borderColor: bordercolor}} className='btn' >
          {title}
      </button>
  )
}

export default Buttons