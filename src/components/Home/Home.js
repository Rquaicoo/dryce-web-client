import React from 'react'
import homeImage from '../../assets/images/home-image.png'
import './Home.css'
import './HomeMq.css'
import Buttons from '../Buttons/Buttons'

const Home = () => {
  return (
    <div className='container-home'>
        <div className='home-container' id="Home">

            <div className='home-description'>
                <h1>WELCOME TO DRYCE LAUNDRY SERVICES</h1>
                <h3>
                    We OFFER top notch laundry services
                </h3>
                <p>We offer laudry services to all people across the country. Explore our services and get started today!</p>
                <Buttons 
                    title="Explore Services" 
                    color={"rgb(9, 69, 231)"} 
                    textColor={"white"} 
                    bradius={"10px"} 
                    shadow={"2px 2px 3px rgb(255, 189, 23)"}>
                        
                </Buttons>

            </div>

            <div className='home-img'>
                <img src={homeImage} width={"600px"} height={"600px"} alt="people washing"></img>
            </div>

        </div>
    </div>
  )
}

export default Home