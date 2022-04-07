import React from 'react';
import './Buttons.css';

const Buttons = ({title, color, textColor, bordercolor, border, margin, bradius}) => {
  return (

      <button 
      style={{
        backgroundColor: color, 
        color: textColor, 
        borderWidth: border,
        borderRadius: bradius,
        borderStyle: 'solid',
        borderColor: bordercolor, 
        marginRight: margin}} className='btn' >
          {title}
      </button>
  )
}

export default Buttons