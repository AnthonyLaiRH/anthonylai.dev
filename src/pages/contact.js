import React from "react";

import style from "../styles/contact.module.css";
import { Image } from "react-bootstrap";
import linkedInIcon from "../assets/images/linkedin.png"

import SEO from "../components/seo"
import Layout from "../components/layout/layout";
import Section from "../components/section/section";

import * as contactAnimation from "../assets/json/contact.json"; 

class ContactPage extends React.Component {
    render(){

        return(
            <Layout>
                <SEO title="Contact" />
                <div style={{margin: "4vh 0"}}>
                    <Section sectionTitle="Let's Chat!" 
                        animationData={contactAnimation}
                        loop={false}
                        >
                        <h3>Shoot me an email at </h3>
                        <a href="mailto:lai.anthony.rh@gmail.com"
                            className={style.email}>lai.anthony.rh@gmail.com ➡️ </a> 
                        

                        <h3>Or connect with me on LinkedIn! </h3>
                        <a href="https://www.linkedin.com/in/anthony-lai-rh/">
                                <Image src={linkedInIcon} className={style.icon} />
                            </a>
                    </Section>
                </div>
            </Layout>
        );
    };
};

export default ContactPage;