import React, { Component } from "react";
import PropTypes from "prop-types";
import style from "./project.module.css";

class Project extends Component {
    render(){
        return(
            <div className={style.container}>
                <h2>{this.props.name}</h2>
                <div>{this.props.children}</div>
                <a className={style.link} 
                    href={this.props.url}>
                    Codebase
                </a>
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