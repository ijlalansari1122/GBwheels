import React from "react";
// import  "../../src/components/Nav"
import   "./Nav.css"
// import logo from '../img/logo.svg'
import "react-bootstrap"
// import { Container, Row } from "react-bootstrap";
// import { Container } from "react-bootstrap";
// import {Row} from 'react-bootstrap';
// import {Col} from 'react-bootstrap';

function  Nav() {
    return(

<div className="menu"> 
<nav>
    
     <ul>
          <li><a href='#home'>Home</a></li>
          <li><a href='#form'>About</a></li>
          <li><a href='#gallery'>Gallery</a></li>
          <li><a href='#service'>Service</a></li>


          
          </ul>
          </nav> 
          </div>
        

    )


}
export default Nav;