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
          I like to do lots of diffent things, I like to hang out with friends, cook, play video games, build software, but
          most of all I like to learn. Learn about how things work, how things are, and why. Whether that be in technology,
          in sports, in physics, or in history and politics.

          <br /><br />
          I think it is always important to expand your world-view, I love to talk to people about new technology or different
          cultures or current events. When I want to develop a new project, I always want to try to experiment with different
          technologies to learn different ways of building software.

          <br /><br />
          So I'm Anthony Lai, a software engineering student. I like to build web and mobile applications, but I also have keen 
          interests in software security and project management. I'm always looking for opportunities learn more, chat more and 
          build more; if you have any opportunities for me, feel free to contact me!
          
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
