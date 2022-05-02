import React, {Component} from 'react';
import './Header.css';
import './HeaderMQ.css';
import './Navlinks.js';
import { LinkNames } from './Navlinks';
import Buttons from '../Buttons/Buttons';
import Home from '../Home/Home';

class Header extends Component {
  
  // clickState condition variables
  state = {clicked: false}

  handleClick = () => {
      this.setState({ clicked: !this.state.clicked })
  }

  render () {
    return (
      <header>
          <nav className="navBar">
              <div className="navBar-container">
                <h1>DrYce</h1>
                {/*menu bar with js condition==> ? clicked "classMenu" : "bar or X"*/}
                <div className='navIcon' onClick={this.handleClick}>
                  <i class={this.state.clicked ? "fa-solid fa-xmark" : "fa-solid fa-bars" }></i>
                </div>
        
                <div className='buttons'>
                  {/*nav links, imported from Navlinks.js #used Links*/}
                  <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                      {LinkNames.map((link, index) =>{
                        return (
                          <li key={index}>
                            <a className={link.cName} href={link.url}>
                              {link.name}
                            </a>
                          </li>
                        );
                      })}
                    <Buttons 
                      title="Sign In" 
                      color={"rgb(255, 189, 23)"} 
                      textColor={"white"}  
                      className={"signIn"}
                      >

                    </Buttons>
                    <Buttons title="Get Started" color={"rgb(9, 69, 231)"} textColor={"white"} className={"getStarted"}></Buttons>
                  </ul>{/*navLinks End*/}
              </div>
              
            </div>

          </nav>
          <Home/>

      </header>
    )
  }
}

export default Header