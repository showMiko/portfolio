import React from 'react'
import projImg1 from "../assets/Projects/Yoda-vs-Vader.jpg"
import projImg2 from "../assets/Projects/password.jpg"
import projImg3 from "../assets/Projects/ai trainer.jpg"
import projImg4 from "../assets/Projects/calculator.jpg"
import projImg5 from "../assets/Projects/todolist.jpg"
import projImg6 from "../assets/Projects/food fiesta.jpg"
import projImg7 from "../assets/Projects/imdb.jpg"
import projImg8 from "../assets/Projects/Mouse.jpg"
import projImg9 from "../assets/Projects/UnityGame.jpg"
import { Col, Container, Nav, Row, Tab, TabContent } from 'react-bootstrap'
import ProjectCard from './ProjectCard'
import colorSharp2 from "../assets/img/color-sharp2-green.png"

const Projects = () => {

    const projects = [
        {
            title: "Star Wars",
            description: "Computer vision",
            imgUrl: projImg1
        },
        {
            title: "Password authentication system",
            description: "Computer vision",
            imgUrl: projImg2
        },
        {
            title: "Unity Game",
            description: "Unity Engine",
            imgUrl: projImg9
        },
        {
            title: "Mern App",
            description: "Web Development",
            imgUrl: projImg6
        },
        {
            title: "IMDB-CLONE",
            description: "Web Development",
            imgUrl: projImg7
        },
        {
            title: "Virtual Mouse",
            description: "Computer vision",
            imgUrl: projImg8
        },
        {
            title: "Todo List",
            description: "Web Development",
            imgUrl: projImg5
        },
        {
            
            title: `AI Trainer (in progress)`,
            description: "Computer vision",
            imgUrl: projImg3
        },
        {
            title: "Calculator",
            description: "Web Development",
            imgUrl: projImg4
        },
    ]

    return (
        <section className='project' id="project">
            <Container>
                <Row>
                    <Col>
                        <h2>Projects</h2>
                        <p>Welcome to my Projects Sections</p>

                        <Tab.Container id="projects-tabs" defaultActiveKey="first" style={{width:"100%"}}>
                            
                            <Tab.Content>
                                <Tab.Pane eventKey="first">
                                    <Row>
                                        {
                                            projects.map((project,index)=>{
                                                return(
                                                    <ProjectCard
                                                        key={index}
                                                        {...project}
                                                   />
                                                )
                                            })
                                        }
                                    </Row>
                                    <Tab.Pane eventKey="second"></Tab.Pane>
                                    <Tab.Pane eventKey="third">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit, aut?</Tab.Pane>
                                </Tab.Pane>
                            </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
            <img src={colorSharp2} alt="" srcset="" className='bakground-image-right' style={{height:"10vh"}}/>
        </section>
    )
}

export default Projects

{/* <Nav variant="pills" className='nav-pills mb-5 justify-content-center align-items-center' id="pills-tab"  >
                                <Nav.Item>
                                    <Nav.Link eventKey="first">Project 1</Nav.Link>
                                </Nav.Item>
                            </Nav> */}