import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import React, { useEffect, useState } from 'react'
import logo from "../assets/img/giphy.gif"
import navIcon1 from "../assets/img/nav-icon1.svg"
import navIcon2 from "../assets/img/nav-icon2.svg"
import navIcon3 from "../assets/img/nav-icon3.svg"
import navIcon4 from "../assets/img/github.png"
import navIcon5 from "../assets/img/Discord.png"
import { DragHandleIcon } from '@chakra-ui/icons'
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button
} from '@chakra-ui/react'

export default function NavBar() {

  const [activeLink, setActiveLink] = useState('home')
  const [scrolled, setscrolled] = useState(false)
  const { isOpen, onOpen, onClose } = useDisclosure()

  const onUpdateActiveLink = (event) => {
    setActiveLink(event)
  }
  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50)
        setscrolled(true)
      else
        setscrolled(false);
    }

    window.addEventListener("scroll", onScroll)

    return () => { window.removeEventListener("scroll", onScroll) }
  }, [])

  return (
    <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand href="#home">
          <img src={logo} alt="" srcset="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" >
          <span className='navbar-toogler-icon'>
          <Button colorScheme='teal' variant='solid'>
              <DragHandleIcon/>
          </Button>
          </span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
            <Nav.Link href="#tech-skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
            <Nav.Link href="#project" className={activeLink === 'project' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('project')}>Projects</Nav.Link>
            <Nav.Link href="#contact" className={activeLink === 'contact' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('contact')}>Contact Me</Nav.Link>
          </Nav>
          <span className='navbar-text'>
            <div className='social-icon'>
              <a href="https://www.linkedin.com/in/soumik-samanta-aa030918b/"><img src={navIcon1} alt="" srcset="" /></a>
              <a href="https://www.facebook.com/Soumik2017/"><img src={navIcon2} alt="" srcset="" /></a>
              <a href="https://www.instagram.com/_sou_mik/" target='_blank'><img src={navIcon3} alt="" srcset="" /></a>
            </div>
            <Button className='vvd' href="#footer" onClick={onOpen} ><span>Lets Connect</span></Button>
            <Modal onClose={onClose} isOpen={isOpen} isCentered>
              <ModalOverlay />
              <ModalContent backgroundColor={"#03a376"} mt={10} borderRadius={30}>
                <ModalHeader>Lets Connect</ModalHeader>
                <ModalCloseButton />
                <ModalBody className='social-icon'>
                  <a href="https://www.linkedin.com/in/soumik-samanta-aa030918b/"><img src={navIcon1} alt="" srcset="" /></a>
                  <a href="https://www.facebook.com/Soumik2017/"><img src={navIcon2} alt="" srcset="" /></a>
                  <a href="https://www.instagram.com/_sou_mik/" target='_blank'><img src={navIcon3} alt="" srcset="" /></a>
                  <a href="https://github.com/showMiko" target='_blank'><img src={navIcon4} alt="" srcset="" /></a>
                  <a href="https://discord.gg/VVrSfeyQ9T" target='_blank'><img src={navIcon5} alt="" srcset="" /></a>
                </ModalBody>
                <ModalFooter>
                  <Button onClick={onClose} colorScheme='ghost'>Close</Button>
                </ModalFooter>
              </ModalContent>
            </Modal>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}