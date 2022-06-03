import React from 'react'
import './Services.css'
import './ServicesMQ.css'
import servicesImage from '../../assets/images/wash-machine.jpg'
import Buttons from '../Buttons/Buttons'
import Modal from '../Modal/Modal'
import { useState } from 'react'



const Services = () =>{
    const [show, setShow] = useState(false)

 const  handleModal = (event) => {
       
        console.log('Modal is clicked')
        setShow(!show)
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
                    <span style={{color: 'blue', fontWeight: 'bold'}}>Dryce</span> is a a very user freindly web application that is capable of performing all laundary services ranging from gents to ladies wear.
                    Users of dryce can make requests for their clothes to be washed. <br/>
                    This application accepts orders for all kinds of clothes. Ironing services are also available on the application
                    Depending on the type of clothes, there are price tags to it.
                    Express services require additional cost.
                    When the clothes are washed, clients can either pick it up themselves or it can be deliverd to their doorstep.
                    <br/>
                    HURRAY!!!!<br/>
                    Let's enjoy <span style={{color: 'blue', fontWeight: 'bold'}}>Dryce</span>
                    </p>

                    <Buttons 
                        title="Learn More" 
                        color={"rgb(9, 69, 231)"} 
                        textColor={"white"} 
                        bradius={"10px"} 
                        funct={handleModal}
                        >
                    </Buttons>
                </div>
                <Modal onClose={() => setShow(false)} show={show}/>

                

            </div>
        </div>
        )

}

export default Services