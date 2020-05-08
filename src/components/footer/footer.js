import React from "react"
import { Link } from "gatsby"

import { Row, Col, Image, Container } from "react-bootstrap"

import footerStyles from "./footer.module.css"
import githubIcon from "../../assets/images/github.png"
import linkedInIcon from "../../assets/images/linkedin.png"
import instaIcon from "../../assets/images/instagram.png"

//<p style={{ margin: "0 3.5vw" }}>/</p>  💻  💝  

const Footer = () => (
  <Container fluid className={footerStyles.container}>
    <Row className={footerStyles.row}>
      <Col className={footerStyles.text}>Made with 愛 by Anthony Lai</Col>

      <Col className={footerStyles.col}>
        <a href="https://github.com/AnthonyLaiRH" 
          className={footerStyles.link}>
          <Image src={githubIcon} className={footerStyles.icon} />
          
        </a>
        
        <a href="https://www.linkedin.com/in/anthony-lai-rh/"
          className={footerStyles.link}>
          <Image src={linkedInIcon} className={footerStyles.icon} />
          
        </a>
        
        <a href="https://www.instagram.com/rhanthonyl/?hl=en" 
          className={footerStyles.link}>
          <Image src={instaIcon} className={footerStyles.icon} />
          
        </a>
      </Col>
    </Row>
  </Container>
)

export default Footer
