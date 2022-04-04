import React from 'react';
import './Buttons.css';

const Buttons = ({title, color, textColor, bordercolor, border, margin}) => {
  return (

      <button 
      style={{
        backgroundColor: color, 
        color: textColor, 
        borderWidth: border,
        borderStyle: 'solid',
        borderColor: bordercolor, 
        marginRight: margin}} className='btn' >
          {title}
      </button>
  )
}

export default Buttons