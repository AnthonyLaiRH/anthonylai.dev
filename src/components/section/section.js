import React, { Component } from "react";
import PropTypes from "prop-types"
import style from "./section.module.css";

import Lottie from 'react-lottie';

class Section extends Component {
  constructor (props){
    super(props)
    this.state = {
      width: 0,
      lottieWidth: 0,
    };
  }

  componentDidMount() {
    this.handleWindowSizeChange() // Set width
    window.addEventListener('resize', this.handleWindowSizeChange)
    
  }
  
  // make sure to remove the listener
  // when the component is not mounted anymore
  componentWillUnmount() {
    window.removeEventListener('resize', this.handleWindowSizeChange)
  }
  
  handleWindowSizeChange = () => {
    this.setState({ width: window.innerWidth })
    
    if(this.state.width <= 500){
      this.setState({lottieWidth: 275});
    }
    else{
      this.setState({lottieWidth: 350});
    }
  }
  
  

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
            <Lottie style={{margin: "0, 3rem"}} options={ defaultOptions } height={ this.state.lottieWidth } width={ this.state.lottieWidth }/>
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