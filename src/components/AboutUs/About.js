import React from 'react'
import './About.css'
import './AboutMQ.css'
import Buttons from '../Buttons/Buttons'
import aboutImg from '../../assets/images/about-wash.jpg'

const About = () => {
  return (
    <div className='container-about'>
        <div className='about-container' id="About">

            <div className='about-content'>
                <h2>ABOUT US</h2>
                <p>
                We are dryce, an online laundry service platform which provides services to both vendors and customers alike nationwide. The service may differ per the individual be it a one that gives the service or one in need or the service.We also have a mobile application available for download on playstore as well as a website.
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