import React from 'react'
import './About.css'
import Buttons from '../Buttons/Buttons'
import aboutImg from '../../assets/images/about-wash.jpg'

const About = () => {
  return (
    <div className='container-about'>
        <div className='about-container'>

            <div className='about-content'>
                <h2>ABOUT US</h2>
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
                    bradius={"10px"} >
                        
                </Buttons>
            </div>
            <div className='about-description'>
                <img src={aboutImg} alt="about-img" height={400} width={500} className='about-img'></img>
            </div>

            

        </div>
    </div>
  )
}

export default About