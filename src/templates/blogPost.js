import React from "react"
import Img from "gatsby-image"
import {graphql} from "gatsby"
import Layout from "../components/Layout"

import style from "./blogPost.module.css"

export const query = graphql`
    query($slug: String!, $img: String!) {
      markdownRemark(fields: {slug: {eq: $slug}}) {
        frontmatter {
          title
          img
          date
        }
        html
      }
      file(relativePath : {eq: $img}) {
          childImageSharp {
              fluid {
                  ...GatsbyImageSharpFluid
              }
          }
      }
    }
`

const BlogPost = ({data}) => {
    return (
        <Layout>
            <main className={style.post}>
                <Img className={style.cover} fluid={data.file.childImageSharp.fluid} alt={data.markdownRemark.frontmatter.title}/>
                <h1 className={style.title}>{data.markdownRemark.frontmatter.title}</h1>
                <span className={style.date}>{data.markdownRemark.frontmatter.date}</span>
                <div className={style.content}>
                    <div className={style.content} dangerouslySetInnerHTML={{__html: data.markdownRemark.html}}></div>
                </div>
            </main>
        </Layout>
    )
}

export default BlogPost
