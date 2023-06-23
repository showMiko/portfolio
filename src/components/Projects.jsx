import React from 'react'
import projImg1 from "../assets/Projects/starwars.gif"
import projImg2 from "../assets/Projects/password.gif"
import projImg3 from "../assets/Projects/robot.gif"
import projImg4 from "../assets/Projects/calculater.gif"
import projImg5 from "../assets/Projects/todolist.gif"
import projImg6 from "../assets/Projects/food fiesta.gif"
import projImg7 from "../assets/Projects/imdb.gif"
import projImg9 from "../assets/Projects/UnityGame.gif"
import projImg10 from "../assets/Projects/Mouse.gif"
import { Col, Container, Nav, Row, Tab, TabContent } from 'react-bootstrap'
import ProjectCard from './ProjectCard'
import colorSharp2 from "../assets/img/color-sharp2-green.png"

const Projects = () => {

    const projects = [
        {
            title: "Star Wars",
            description: "Computer vision",
            imgUrl: projImg1,
            projectlink:"https://github.com/showMiko/Python-Projects/tree/main/Starwars-Gesture-Game"
        },
        {
            
            title: `Play using AI`,
            description: "Computer vision",
            imgUrl: projImg3,
            projectlink:"https://sas-app-official.vercel.app/"
        },
        {
            title: "Password authentication system",
            description: "Computer vision",
            imgUrl: projImg2,
            projectlink:"https://github.com/showMiko/Python-Projects/tree/main/passwordprotector"
        },
        {
            title: "Shooting Game",
            description: "Unity Engine",
            imgUrl: projImg9,
            projectlink:"https://github.com/showMiko/shooting-game"
        },
        {
            title: "Food Fiesta",
            description: "Web Development",
            imgUrl: projImg6,
            projectlink:"https://github.com/showMiko/MernFoodApp"
        },
        {
            title: "IMDB-CLONE",
            description: "Web Development",
            imgUrl: projImg7,
            projectlink:"https://showmiko.github.io/imdb-react/"
        },
        {
            title: "Virtual Mouse",
            description: "Computer vision",
            imgUrl: projImg10,
            projectlink:"https://github.com/showMiko/Python-Projects/tree/main/Mouse"
        },
        {
            title: "Todo List",
            description: "Web Development",
            imgUrl: projImg5,
            projectlink:"https://github.com/showMiko/OIBSIP/tree/main/To-Do%20APP"
        },
        {
            title: "Coin Collecting",
            description: "Unity Engine",
            imgUrl: projImg4,
            projectlink:"https://github.com/showMiko/coin-collection"
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
