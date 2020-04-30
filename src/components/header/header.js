import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";

import Typical from 'react-typical';
import { Container, Row, Col } from 'react-bootstrap'

import headerStyles from "./header.module.css";

const Header = ({ siteTitle }) => (
  <div>
      <Container fluid>
        <Row className={headerStyles.row}>
          <Col className={headerStyles.col}>
            <Link className={headerStyles.link}
                to="/"
                activeStyle={{color: 'black'}}
            >
                Home
            </Link>
            <p style={{ margin: "0 2vw" }}>/</p>
            <Link className={headerStyles.link}
                to="/blog/"
                activeStyle={{color: 'black'}}
            >
                Blog
            </Link>
            <p style={{ margin: "0 2vw" }}>/</p>
            <Link className={headerStyles.link}
                to="/blog/"
                activeStyle={{color: 'black'}}
            >
                Course Notes
            </Link>
            <p style={{ margin: "0 2vw" }}>/</p>
            <Link className={headerStyles.link}
                to="/blog/"
                activeStyle={{color: 'black'}}
            >
                Resume
            </Link>
            <p style={{ margin: "0 2vw" }}>/</p>
            <Link className={headerStyles.link}
                to="/blog/"
                activeStyle={{color: 'black'}}
            >
                Contact
            </Link>
          </Col>
            
          <Col className={headerStyles.title}>
            <Typical
              wrapper='b'
              steps={[siteTitle + " "]} 
            />
          </Col>
        </Row>
      </Container>
      {/*<Navbar className={headerStyles.navbar} 
        fixed="top" bg="dark" variant="light"
      >

        <Nav className={headerStyles.nav}>
          <Nav.Item>
            <Link className={headerStyles.link}
                to="/"
                activeStyle={{color: 'black'}}
            >
                Home
            </Link>
          </Nav.Item>
          <Nav.Item>/</Nav.Item>
          <Nav.Item>
            <Link className={headerStyles.link}
                to="/blog/"
                activeStyle={{color: 'black'}}
            >
                Blog
            </Link>
          </Nav.Item>
          <Nav.Item>/</Nav.Item>
          <Nav.Item>
            <Link className={headerStyles.link}
                to="/blog/"
                activeStyle={{color: 'black'}}
            >
                Course Notes
            </Link>
          </Nav.Item>
          <Nav.Item>/</Nav.Item>
          <Nav.Item>
            <Link className={headerStyles.link}
                to="/blog/"
                activeStyle={{color: 'black'}}
            >
                Resume
            </Link>
          </Nav.Item>
          <Nav.Item>/</Nav.Item>
          <Nav.Item>
            <Link className={headerStyles.link}
                to="/blog/"
                activeStyle={{color: 'black'}}
            >
                Contact
            </Link>
          </Nav.Item>
        </Nav>

        <Navbar.Brand className={headerStyles.title}>
          <Typical
            wrapper='b'
            steps={[siteTitle + " "]} 
          />
        </Navbar.Brand>
      </Navbar>
          
        */}
  </div>


);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
