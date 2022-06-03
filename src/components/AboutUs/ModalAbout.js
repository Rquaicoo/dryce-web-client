import React from 'react'
import './ModalAbout.css'



const ModalAbout = props => {
    if (!props.show) {
        return null;
    }

  return (
    <div className='modal' onClick={props.onClose}>
        <div className='modal-content'>
            <span className='close' onClick={props.onClose}>&times;</span>
            <h2>Learn More</h2>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </p>
        </div>
    </div>
  )
}

export default ModalAbout