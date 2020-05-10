import React, { Component } from "react";
import PropTypes from "prop-types"
import style from "./section.module.css";

import Lottie from 'react-lottie';

function getLottieDimensions(){
  const { innerWidth: width } = window;
  
  if(width <= 500){
    return 275;
  }
  else{
    return 350;
  }
}

class Section extends Component {
    render(){
        const defaultOptions = {
            loop: this.props.loop,
            autoplay: true, 
            animationData: this.props.animationData.default,
            rendererSettings: {
              preserveAspectRatio: 'xMidYMid slice'
            }
        };
        return (
            <div className={style.container}>
                <Lottie style={{margin: "0, 3rem"}} options={ defaultOptions } height={ getLottieDimensions() } width={ getLottieDimensions() }/>
                <div className={style.content}>
                    <h1>{this.props.sectionTitle}</h1>
                    <br></br>
                    <p>{this.props.children}</p>
                </div>
            </div>
        )
    };
};

Section.propTypes = {
    sectionTitle: PropTypes.string,
    animationData: PropTypes.object,
    loop: PropTypes.bool,
}

Section.defaultProps = {
    sectionTitle: ``,
    animationData: null,
    loop: true,
}


export default Section;