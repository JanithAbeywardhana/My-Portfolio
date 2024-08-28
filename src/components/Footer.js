import { Container,Col,Row } from "react-bootstrap";

import Logo from '../assets/img/Logo1.png';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';
import navIcon4 from '../assets/img/icons8-github-30.png';


export const Footer = () => {
    return(
        <footer className="footer">
            <Container>
                <Row className="align-items-center">
                 
                  <Col sm={6}>
                  <img src={Logo} alt="Logo" />
                  </Col>
                  
                  
                  <Col sm={6} className="text-center text-sm-end">
                  <div className="social-icon">
                    <a href=""><img src={navIcon1} /> </a>
                    <a href=""><img src={navIcon2} /> </a>
                    <a href=""><img src={navIcon3} /> </a>
                    <a href=""><img src={navIcon4} /> </a>
                  </div>
                  <p> CopyRight 2022, All Right Reserved </p>
                  </Col> 
                </Row>
            </Container>
        </footer>
    )
}