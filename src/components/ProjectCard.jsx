import React from 'react'
import { Col } from 'react-bootstrap'

const ProjectCard = ({title,description,imgUrl}) => {
  return (
    <Col size={12} sm={6} md={4}>
        <div className='proj-imgbx' style={{display:"flexbox"}}>
            <img style={{maxHeight:"30vh", maxWidth:"30vw", width:"100%"}} src={imgUrl} alt="" srcset="" />
            <div className='proj-txtx'>
                <h4>{title}</h4>
                <span>{description}</span>
            </div>
        </div>
    </Col>
  )
}

export default ProjectCard