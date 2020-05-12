import React from "react";
import { graphql, Link } from 'gatsby';

import style from "./post.module.css";
import Layout from  "../components/layout/layout";

const Post = ({ data, pathContext }) => {
    const title = data.markdownRemark.frontmatter.title;
    const date = data.markdownRemark.frontmatter.date;
    const html = data.markdownRemark.html;
    const { next, prev } = pathContext;

    return (
      <Layout>
        <div className={style.container}>
          <Link className={style.nextprevlinks}
            to="/blog/">
              <span role="img" aria-label="point-left">
                ⬅️{' '}
              </span>
            Back
          </Link>

          <h1>{title}</h1>
          <h4>{date}</h4>
          <div className={style.blogpost} dangerouslySetInnerHTML={{__html: html}}/>
          <div className={style.nextprev}>
            <p>
              {prev && (
                <Link to={prev.frontmatter.path}
                  className={style.nextprevlinks}
                  >
                    <span role="img" aria-label="point-left">
                    ⬅️{' '}
                    </span>
                  {prev.frontmatter.title}
                </Link>
              )} 
            </p>
            <p>
              {next && (
                <Link to={next.frontmatter.path}
                  className={style.nextprevlinks}
                  >
                  {next.frontmatter.title}{' '}
                  <span role="img" aria-label="point-right">
                  ➡
                  </span>
                </Link>
              )}
            </p>
          </div>
        </div>
      </Layout>
    );
};

export const postQuery = graphql`
  query($pathSlug: String!){
    markdownRemark(frontmatter: {path: {eq: $pathSlug}}){
      html
      frontmatter {
        title
        date(formatString: "YYYY-MM-DD")
        path
        tags
        excerpt
      }
    }
  }
`

export default Post;