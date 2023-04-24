import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
// import contacting from "../assets/img/contact-img.svg"
import contacting from "../assets/img/contact.png"

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

    const handleSubmit= async(e)=>{
        e.preventDefault();
        setButtonText("Sending....")
        let response= await fetch("http://localhost:5000/contact",{
            method:"POST",
            headers:{
                "Content-Type":'Application/json'
            },
            body:JSON.stringify(formDetail)
        })
        setButtonText("Send");
        let result=response.json();
        setFormDetail(formInitialDetails);
        console.log(response.status)

        if(response.status===200)
        {
            setStatus({success:true,message:"Message Sent Successfully"})
        }
        else
        {
            setStatus({success:false,message:"Something went Wrong. Please Try again Later"});
        }
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
                    <form onSubmit={handleSubmit}>
                        <Row>
                            <Col sm={6} className='px-1'>
                                <input type="text" value={formDetail.firstName} placeholder='First Name' onChange={(e)=>onFormUpdate('firstName',e.target.value)}/>
                            </Col>
                            <Col sm={6} className='px-1'>
                                <input type="text" value={formDetail.lastName} placeholder='Last Name' onChange={(e)=>onFormUpdate('lastName',e.target.value)}/>
                            </Col>
                            <Col sm={6} className='px-1'>
                                <input type="email" value={formDetail.email} placeholder='Email' onChange={(e)=>onFormUpdate('email',e.target.value)}/>
                            </Col>
                            <Col sm={6} className='px-1'>
                            <input type="tel" value={formDetail.phone} placeholder='Phone No.' onChange={(e)=>onFormUpdate('phone',e.target.value)}/>
                            </Col>
                            <Col>
                            <textarea rows={6} value={formDetail.message} placeholder='Type your Message' onChange={(e)=>onFormUpdate('message',e.target.value)}></textarea>
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