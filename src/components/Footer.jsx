import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import navIcon1 from "../assets/img/nav-icon1.svg"
import navIcon2 from "../assets/img/nav-icon2.svg"
import navIcon3 from "../assets/img/nav-icon3.svg"
import navIcon4 from "../assets/img/github.png"
import navIcon5 from "../assets/img/Discord.png"

const Footer = () => {
  return (
    <footer className='footer' id='footer'>
      
        <Container>
            <Row>
                  <Col ><a href="https://www.linkedin.com/in/soumik-samanta-aa030918b/" target='_blank'><img src={navIcon1} alt="" srcset="" /></a></Col>
                  <Col ><a href="https://www.facebook.com/Soumik2017/" target='_blank'><img src={navIcon2} alt="" srcset="" /></a></Col>
                  <Col><a  href="https://www.instagram.com/_sou_mik/" target='_blank'><img src={navIcon3} alt="" srcset="" /></a></Col>
                  <Col > <a href="https://github.com/showMiko" target='_blank'><img src={navIcon4} alt="" srcset="" /></a></Col>
                  <Col ><a href="https://discord.gg/VVrSfeyQ9T" target='_blank'> <img src={navIcon5} alt="" srcset="" /></a></Col>
            </Row>
        </Container>
    </footer>
  )
}

export default Footer