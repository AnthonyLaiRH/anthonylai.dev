import React from "react";

import style from "../styles/notes.module.css"
import SEO from "../components/seo";
import Layout from "../components/layout/layout";

import data from "../assets/json/notes_info.json";

class NotesPage extends React.Component {
    render(){
        return(
            <Layout>
                <SEO title="Notes" />
                <div className={style.container}>
                    <h1>Course Notes</h1>
                    {data.map(course => {
                        return (
                            <div className={style.listing}>
                              <h2>{course.name}</h2> 
                              &nbsp;
                
                              <h4>{course.code}</h4>
                              
                              <p>{course.sem}</p>
                              
                              <br />
                              <a className={style.link} href={course.url} target="__blank">Go to Notion Page ➡</a>
                              <br />
                
                            </div>
                        )
                    })}
                </div>
            </Layout>
        );
    };
};

export default NotesPage