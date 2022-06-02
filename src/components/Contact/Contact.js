import React, {useState} from 'react'
import './Contact.css'
import './ContactMQ.css'
import Buttons from '../Buttons/Buttons'
import contactImg from '../../assets/images/contact-us.jpg'

const Contact = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault()
       fetch('https://dryce-staging.herokuapp.com/api/contact', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: name,
            email: email,
            message: message
        })
    })
    .then(res => {
        if (res.status === 201) {
            alert('Message sent successfully')
            //refresh app
            window.location.reload()
        }
    })
    }


  return (
    <div className='container-contact'>
        <div className='contact-container' id="Contact">

            <div className='contact-content'>
                <form>
                    <h2>GET IN TOUCH</h2>
                    <label>Full name: </label><br/>
                    <input placeholder='enter your full name' onChange={(text) => {setName(text.target.value)}}></input><br/>

                    <label>Email: </label><br/>
                    <input placeholder='enter your email address'  onChange={(email) => {setEmail(email.target.value)}} ></input><br/>

                    <label>Your message: </label><br/>
                    <textarea rows={3} placeholder="enter message here"  onChange={(text) => {setMessage(text.target.value)}}></textarea>
                    <p></p>
                    <Buttons
                        title="Submit" 
                        color={"rgb(0, 0, 0)"} 
                        textColor={"white"}
                        border={'2px'}
                        bordercolor={'rgb(255, 255, 255'} 
                        bradius={'0'}
                        funct={handleSubmit}
                         >
                    </Buttons>

                </form>
            </div>
            <div className='contact-description'>
                <img src={contactImg} alt="contact-Img" height={400} width={500} className='contact-img'></img>
            </div>
            
            

        </div>
    </div>
  )
}

export default Contact