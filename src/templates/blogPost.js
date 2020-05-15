import React from "react"
import {graphql} from "gatsby"
import Layout from "../components/Layout"

import style from "./blogPost.module.css"

export const query = graphql`
    query($slug: String!) {
      markdownRemark(fields: {slug: {eq: $slug}}) {
        frontmatter {
          title
          img
          date
        }
        html
      }
    }
`

const BlogPost = ({data}) => {
    return (
        <Layout>
            <main className={style.post}>
                <img className={style.cover} src={data.markdownRemark.frontmatter.img} alt={data.markdownRemark.frontmatter.title} />
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
