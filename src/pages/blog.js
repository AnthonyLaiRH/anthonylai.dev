import React from "react";
import { graphql, Link } from "gatsby";

import style from "../styles/blog.module.css"
import SEO from "../components/seo";
import Layout from "../components/layout/layout";

const BlogPage = ({ data }) => {
  const { edges } = data.allMarkdownRemark;
  return (
    <Layout>
      <SEO />
      <div className={style.container}>
        <h1>Blog</h1>
        {edges.map(edge => {
          const { frontmatter } = edge.node;
          return (
            <div className={style.listing} key={frontmatter.path}>
              <h2>{frontmatter.title}</h2> 
              &nbsp;

              <h4>{frontmatter.date}</h4>
              
              <p>{frontmatter.excerpt}</p>
              
              <br />
              <Link className={style.link} to={frontmatter.path}>Read more ➡</Link>
              <br />

            </div>
          )
        })}
      </div>
    </Layout>
  );
};

export const query = graphql`
  query BlogPageQuery {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "YYYY-MM-DD")
            path
            tags
            excerpt
          }
        }
      }
    }
  }
`

export default BlogPage;