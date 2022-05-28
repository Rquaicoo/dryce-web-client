import React from 'react'
import './Services.css'
import './ServicesMQ.css'
import servicesImage from '../../assets/images/wash-machine.jpg'
import Buttons from '../Buttons/Buttons'
import Modal from '../Modal/Modal'
import { useState } from 'react'



const Services = () =>{
    const [show, setShow] = useState(false)

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
                        onclick= {() => setShow(true)}
                        >
                    </Buttons>
                </div>
                <Modal onClose={() => setShow(false)} show={show}/>

                

            </div>
        </div>
        )

}

export default Services