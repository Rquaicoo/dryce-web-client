import React from 'react'
import Modal from 'react-modal';
import './Services.css'
import './ServicesMQ.css'
import servicesImage from '../../assets/images/wash-machine.jpg'
import Buttons from '../Buttons/Buttons'


const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };
  
Modal.setAppElement('Services');
const Services = () =>{

    let subtitle;
    const [modalIsOpen, setIsOpen] = React.useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function afterOpenModal() {
        // references are now sync'd and can be accessed.
        subtitle.style.color = '#f00';
    }

    function closeModal() {
        setIsOpen(false);
    }


    return (

        <div className='container-services'>
            <div className='services-container' id="Services">
                <div className='services-description'>
                    <img src={servicesImage} alt="services-img" height={400} width={500} className='services-img'></img>
                </div>

                <div className='services-content'>
                    <h2>SERVICES</h2>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    </p>
                    <Buttons 
                        title="Learn More" 
                        color={"rgb(9, 69, 231)"} 
                        textColor={"white"} 
                        bradius={"10px"} 
                        onClick={openModal}
                        >
                    </Buttons>
                    <Modal
                        isOpen={modalIsOpen}
                        onAfterOpen={afterOpenModal}
                        onRequestClose={closeModal}
                        style={customStyles}
                        contentLabel="Example Modal"
                    >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    </Modal>
                </div>

                

            </div>
        </div>
        )

}

export default Services