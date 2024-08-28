import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from '../assets/img/janith3.png';
import React from "react";
//import backgroundVideo from '../assets/vedio/VedioBg.mov';

export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(200);
    const toRotate = ["Web Developer", "Web Designer", "UX/UI Designer"];
    const period = 1500;
    
    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta);

        return () => { clearInterval(ticker) };
    }, [text]);

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting) {
            setDelta(prevDelta => prevDelta / 2);
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setDelta(period);
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(200 + Math.random() * 100);
        }
    }
    return(
        <section className="banner" id="home">
            
           
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                    <span className="tagline">Welcome to my Portfolio</span>
                    <h1>{'Hi I am a Software Engineer '}<br></br><span>{text}</span><span className="cursor">|</span></h1>
                    <p>Undergraduate student at Cardiff Metropolitan University, pursuing a Bachelor's degree in Software Engineering.Completed a higher Diploma In SE.</p>
                    <button onClick = {() => console.log ('connect')}>Lets connect<ArrowRightCircle size={25}></ArrowRightCircle></button>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                    <img src={headerImg} alt="Headder Img" />
                    </Col>
                </Row>
            </Container>

        </section>
    )
}