import React from "react"
import { Link } from "gatsby"

import { Row, Col, Image, Container } from "react-bootstrap"

import footerStyles from "./footer.module.css"
import githubIcon from "../../../icons/github.png"
import linkedInIcon from "../../../icons/linkedin3.png"
import resumeIcon from "../../../icons/resume2.png"

const Footer = () => (
  <div>
    <Container fluid>
      <Row className={footerStyles.row}>
        <Col className={footerStyles.text}>
          brought to you by Anthony Lai
        </Col>

        <Col className={footerStyles.col}>
          <a
            href="https://github.com/AnthonyLaiRH"
            className={footerStyles.link}
          >
            <Image src={githubIcon} className={footerStyles.icon} />
            Github
          </a>
          <p style={{ margin: "0 3.5vw" }}>/</p>
          <a
            href="https://www.linkedin.com/in/anthony-lai-rh/"
            className={footerStyles.link}
          >
            <Image src={linkedInIcon} className={footerStyles.icon} />
            LinkedIn
          </a>
          <p style={{ margin: "0 3.5vw" }}>/</p>
          <a
            href="https://github.com/AnthonyLaiRH"
            className={footerStyles.link}
          >
            <Image src={resumeIcon} className={footerStyles.icon} />
            Resume
          </a>
        </Col>
      </Row>
    </Container>
  </div>
)

export default Footer
