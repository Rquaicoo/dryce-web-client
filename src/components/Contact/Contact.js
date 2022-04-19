import React from 'react'
import './Contact.css'
import Buttons from '../Buttons/Buttons'
import contactImg from '../../assets/images/contact-us.jpg'

const Contact = () => {
  return (
    <div className='container-contact'>
        <div className='contact-container'>

            <div className='contact-content'>
                <form>
                    <h2>GET IN TOUCH</h2>
                    <label>Full name: </label><br/>
                    <input placeholder='enter your full name'></input><br/>

                    <label>Email: </label><br/>
                    <input placeholder='enter your email address'></input><br/>

                    <label>Your message: </label><br/>
                    <textarea rows={3} placeholder="enter message here"></textarea>
                    <p></p>
                    <Buttons
                        title="Submit" 
                        color={"rgb(0, 0, 0)"} 
                        textColor={"white"}
                        border={'2px'}
                        bordercolor={'rgb(255, 255, 255'} 
                        bradius={'0'}
                         >
                    </Buttons>

                </form>
                

                {/* <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                </p> */}
                {/* <Buttons 
                    title="Learn More" 
                    color={"rgb(9, 69, 231)"} 
                    textColor={"white"} 
                    bradius={"10px"} >
                        
                </Buttons> */}
            </div>
            <div className='contact-description'>
                <img src={contactImg} alt="contact Image" height={400} width={500} className='contact-img'></img>
            </div>

            

        </div>
    </div>
  )
}

export default Contact