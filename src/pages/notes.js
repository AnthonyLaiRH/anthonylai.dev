import React from "react";

import style from "../styles/notes.module.css"
import SEO from "../components/seo";
import Layout from "../components/layout/layout";

class NotesPage extends React.Component {
    render(){

        return(
            <Layout>
                <SEO title="Notes" />
                <div className={style.container}>
                    <h1>Still in Development Sorry..</h1>
                </div>
            </Layout>
        );
    };
};

export default NotesPage