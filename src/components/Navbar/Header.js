import React, {Component} from 'react';
import './Header.css';
import './Navlinks.js';
import { LinkNames } from './Navlinks';
import Buttons from '../Buttons/Buttons';

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
            <h1>DrYce</h1>
            {/*menu bar with js condition==> ? clicked "classMenu" : "bar or X"*/}
            <div className='navIcon' onClick={this.handleClick}>
              <i class={this.state.clicked ? "fa-solid fa-bars" : "fa-solid fa-xmark"}></i>
            </div>
    
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
            </ul>{/*navLinks End*/}
            
            <div className='buttons'>
              <Buttons 
                title="Sign In" 
                color={"white"} 
                textColor={"black"} 
                margin={'20px'} 
                border={"1px"}
                bordercolor={"black"}>

              </Buttons>
              <Buttons title="Get Started" color={"rgb(9, 69, 231)"} textColor={"white"} ></Buttons>
            </div>

          </nav>

      </header>
    )
  }
}

export default Header