import React, { useEffect, useState } from 'react'
import { Col, Container,Row } from 'react-bootstrap'
import {ArrowRightCircle} from 'react-bootstrap-icons'
import headerImg from "../assets/img/pngwing.com (3).png"

const Banner = () => {
    
    const [loopNum,setLoopNum]=useState(0);
    const [isDeleting, setIsDeleting]=useState(false);
    const toDisp=["Web Developer ","Competitive Coder ","Problem Solver","Game Developer ",]
    const [text,setText]=useState('\n');
    const period=100;
    const [delta,setDelta]=useState(200);

    useEffect(()=>{
        let ticker=setInterval(()=>{
            tick();            
        },delta)
        return ()=>{clearInterval(ticker)};
    },[text])


    const tick=()=>{
        let i = loopNum%toDisp.length;
        let fullText=toDisp[i];
        let UpdateText=isDeleting? fullText.substring(0,text.length-1):fullText.substring(0,text.length+1);


        setText(UpdateText);

        if(isDeleting){
            setDelta(200);
        }

        if(!isDeleting && UpdateText==fullText){
            setIsDeleting(true);
            setDelta(period);
        }
        else if(isDeleting && UpdateText==='')
        {
            setIsDeleting(false);
            setLoopNum(loopNum+1);
            setDelta(200);
        }
    }

  return (
    <section className='banner' id="home">
        <Container>
            <Row className='align-items-center'>
                <Col xs={12} md={6} xl={7}>
                    <span className='tagline'>Welcome to My PortFolio</span>
                    <h1 className='header-files' style={{marginRight:"9%"}}>{`Hi I am Soumik I am a `}<span className='wrap'>{text}</span></h1>
                    <p>Hello. I am Soumik Samanta. I am Currently in my 3rd Year Pursuing my Btech from Academy Of Technology.</p>
                    <a href='https://drive.google.com/file/d/19yjHDbAthfSJczSEGN8SnwsFyluDm955/view?usp=drive_link' target='_blank'>
                    <button onClick={()=>console.log("connect")}>Resume<ArrowRightCircle/></button>
                    </a>
                </Col>
                <Col xs={12} md={6} xl={5}>
                    <img src={headerImg} style={{width:"70%"}} alt="Header Img" srcset="" />
                </Col>
            </Row>
        </Container>

    </section>
  )
}

export default Banner
