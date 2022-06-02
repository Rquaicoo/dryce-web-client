import React from 'react'
import './Modal.css'



const Modal = props => {
    if (!props.show) {
        return null;
    }

  return (
    <div className='modal' onClick={props.onClose}>
        <div className='modal-content'>
            <span className='close' onClick={props.onClose}>&times;</span>
            <h2>Learn More</h2>
            <p>
                You can click on the 'register' button to join us as a vendor.
                You can also download our app on the playstore to start using Dryce.
            </p>
        </div>
    </div>
  )
}

export default Modal