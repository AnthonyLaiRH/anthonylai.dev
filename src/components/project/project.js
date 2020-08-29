import React, { Component } from "react";
import PropTypes from "prop-types";
import style from "./project.module.css";

class Project extends Component {
    render(){
        return(
            <div className={style.container}>
                <h2>{this.props.name}</h2>
                <div>{this.props.children}</div>
                
                {this.props.url ? <a className={style.link} 
                    target="_blank" rel="noopener noreferrer"
                    href={this.props.url}>
                    Codebase
                </a> : ""} 
                {this.props.link ? <a className={style.link} 
                    target="_blank" rel="noopener noreferrer"
                    href={this.props.link}>
                    Website
                </a> : ""} 
                {this.props.docs ? <a className={style.link} 
                    target="_blank" rel="noopener noreferrer"
                    href={this.props.docs}>
                    Documentation
                </a> : ""} 
            </div>
        );
    };
};

Project.propTypes = {
    name: PropTypes.string,
    link: PropTypes.string,
}

Project.defaultProps = {
    name: ``,
    link: ``,
}


export default Project;