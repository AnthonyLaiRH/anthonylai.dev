import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import Typical from "react-typical"
import { Container, Row, Col } from "react-bootstrap"

import headerStyles from "./header.module.css"
import resume from "../../assets/pdf/AnthonyLai-Resume.pdf"

const Header = ({ siteTitle }) => (
  <Container fluid className={headerStyles.container}>
    <Row className={headerStyles.row}>
      <Col className={headerStyles.title}>
        <Link
          className={headerStyles.titleLink}
          to="/">
          <Typical wrapper="b" steps={[siteTitle + " "]} />
        </Link>
        
      </Col>

      <Col className={headerStyles.col}>
        <Link
          className={headerStyles.link}
          to="/"
         
        >
          Home
        </Link>
        
        <Link
          className={headerStyles.link}
          to="/blog/"
        >
          Blog
        </Link>
       
        <Link
          className={headerStyles.link}
          to="/notes/"
        >
          Course Notes
        </Link>
        
        <a className={headerStyles.link} 
          href={ resume } target="_blank" 
          rel="noopener noreferrer"
        >
          Resume
        </a>
        
        <Link
          className={headerStyles.link}
          to="/contact/"
        >
          Contact
        </Link>
      </Col>

      
    </Row>
  </Container>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
