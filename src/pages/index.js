import React from "react";

import style from '../styles/home.module.css';
import * as programmerAnimation from '../assets/json/programmer.json';
import solaceIcon from '../assets/images/solace.png';
import wrIcon from '../assets/images/windriver.png';

import SEO from "../components/seo";
import Layout from "../components/layout/layout";
import Section from "../components/section/section";
import Project from "../components/project/project";

class IndexPage extends React.Component {
  render(){
    return(
      <Layout>
        <SEO title="Home" />
        <Section sectionTitle="Me, in a nutshell" 
          animationData={programmerAnimation}
        >
          I'm a third year software engineering student. I love to explore and learn
          about new technologies how they might influence the world around us.
          I like to build and tinker, best way to learn is exploration and just doing!
          <br /><br />
          I like to play video games, in fact it was one of the reasons I was so interested
          in software early on. I enjoy watching sports and cooking a nice meal.
          <br /><br />
          I'm always looking to learn and talk to others, so if you have any opputunities
          for me, or you would like to collaborate or get have a nice chat, feel free to contact me!
        </Section>

        <div className={style.expprj}>
          <h1>Experience</h1>
          <div className={style.expIcon}>
            <img src={solaceIcon} alt="Solace"/>
            <h3>Solace
              <br/>
              PubSub+ Cloud
              <br/>
              Full Stack Developer Intern
            </h3>
          </div> 

          <div className={style.expIcon}>
            <img src={wrIcon} alt="Wind River Systems"/>
            <h3>Wind River
              <br/>
              Helix Virtualization Platform
              <br/>
              Software Engineer Intern
            </h3>
          </div>  
        </div>


        <div className={style.expprj}>
          <h1>Projects</h1>
          <div className={style.projects}>
            <Project name="anthonylai.dev" 
              url="https://github.com/AnthonyLaiRH/anthonylai.dev"
            >
              <h6>React | Gatsby.js</h6>
              <p>My little website. Revamped with a whole new look as well as 
                new content including my blog and some of my course notes. 
                You're here now so check it out!</p>
            </Project>
            <Project name="Kinect Therapy" 
              url="https://github.com/AnthonyLaiRH/Kinect-Therapy-Game"
            >
              <h6>Unity | C# | XBox 360 Kinect </h6>
              <p>A physical rehabilitation game built for Saint-Vincent 
                continuing care hospital in Ottawa, Canada. Modeled as a 
                rhythm game, a patient moves their arms to match the notes
                on the screen</p>
            </Project>
          </div>
          
        </div>


      </Layout>
    );
  };
};

export default IndexPage
