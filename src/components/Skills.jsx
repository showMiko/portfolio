import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Circular_Carousel from "./Carousel_Circular"

const Skills = () => {
      return (
        <>
        <section className='skill' id="tech-skills">
        <Container>
                <Row>
                    <Col>
                    <div className='skill-bx'>
                        <h2>Technical Skills</h2>
                        <p>My Technical skills which I know or am currently learning</p>
                        <Circular_Carousel/>
                    </div>
                    </Col>
                </Row>
            </Container>
        </section>    
        </>
      )
}

export default Skills