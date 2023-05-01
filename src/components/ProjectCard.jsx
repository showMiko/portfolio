import React from 'react'
import { Col } from 'react-bootstrap'

const ProjectCard = ({title,description,imgUrl,projectlink}) => {
  return (
    <Col size={12} sm={6} md={4}>
            <a href={projectlink} target='_blank' style={{color:"white"}} >
        <div className='proj-imgbx' style={{display:"flexbox"}}>

            <img  src={imgUrl} alt="" srcset="" />
            <div className='proj-txtx'>
                <h4>{title}</h4>
                <span>{description}</span>
            </div>
        </div>
          </a>
    </Col>
  )
}

export default ProjectCard