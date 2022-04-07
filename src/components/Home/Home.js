import React from 'react'
import homeImage from '../../assets/images/home-image.png'
import './Home.css'
import Buttons from '../Buttons/Buttons'

const Home = () => {
  return (
    <div className='container'>
        <div className='home-container'>

            <div className='home-description'>
                <h1>Welcome to DRYCE laundry services</h1>
                <h3>
                    We OFFER top notch laundry services
                </h3>
                <p>We offer laudry services to all people across the country. Explore our services and get started today!</p>
                <Buttons title="Explore Services" color={"rgb(9, 69, 231)"} textColor={"white"} bradius={"10px"}></Buttons>
            </div>

            <div className='home-img'>
                <img src={homeImage} width={"800px"} height={"700px"} alt="people washing"></img>
            </div>

        </div>
    </div>
  )
}

export default Home