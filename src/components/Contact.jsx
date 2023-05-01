import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
// import contacting from "../assets/img/contact-img.svg"
import contacting from "../assets/img/contact.png"
import emailjs from "emailjs-com"

const Contact = () => {

    const formInitialDetails={
        firstName:"",
        lastName:"",
        email:"",
        message:"",
        phone:""
    }

    const [formDetail,setFormDetail]=useState(formInitialDetails);
    const [buttonText,setButtonText]=useState('Send')
    const [status,setStatus]=useState({});

    const onFormUpdate=(category,value)=>{
        setFormDetail({
            ...formDetail,
            [category]:value
        })
    }

    const sendEmail=(e)=>{
        e.preventDefault();
        setButtonText("Sending....")
        emailjs.sendForm(
            'service_jsijdgn',
            'template_uhpuksk',
            e.target,
            "g2LyF6t2SZtG6kKU4"
        ).then(res=>{
            setStatus({success:true,message:"Message Sent Successfully"})
        }).catch(err=>{
            setStatus({success:false,message:"Something went Wrong. Please Try again Later"});
        })
        setButtonText("Send");
    }    
  return (
    <section className='contact' id="contact">
        <Container>
            <Row className="align-items-center">
                <Col md={6}>
                    <img src={contacting} alt='Contact Us'></img>
                </Col>
                <Col md={6}>
                    <h2>Get in Touch</h2>
                    <form onSubmit={sendEmail}>
                        <Row>
                            <Col sm={6} className='px-1'>
                                <input type="text" value={formDetail.firstName} name='first-name' placeholder='First Name' onChange={(e)=>onFormUpdate('firstName',e.target.value)}/>
                            </Col>
                            <Col sm={6} className='px-1'>
                                <input type="text" value={formDetail.lastName} name='last-name' placeholder='Last Name' onChange={(e)=>onFormUpdate('lastName',e.target.value)}/>
                            </Col>
                            <Col sm={6} className='px-1'>
                                <input type="email" value={formDetail.email} name='email' placeholder='Email' onChange={(e)=>onFormUpdate('email',e.target.value)}/>
                            </Col>
                            <Col sm={6} className='px-1'>
                            <input type="tel" value={formDetail.phone} name='phone' placeholder='Phone No.' onChange={(e)=>onFormUpdate('phone',e.target.value)}/>
                            </Col>
                            <Col>
                            <textarea rows={6} value={formDetail.message} name='message' placeholder='Type your Message' onChange={(e)=>onFormUpdate('message',e.target.value)}></textarea>
                            <button type="submit">{buttonText}</button>
                            </Col>
                            {
                                status.message &&
                                <Col>
                                    <p className={status.success===false?"danger":"success"}>{status.message}</p>
                                </Col>
                            }
                        </Row>
                    </form>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Contact