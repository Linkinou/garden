import React from "react"
import style from "./BlogPostCard.module.css"
import { Link, graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

const BlogPostCard = ({img, title, date, intro, slug}) => {
    const data = useStaticQuery(graphql`
        query {
            file(relativePath : {
                eq: "topic.jpg"
            }) {
                childImageSharp {
                    fluid {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    `)

    return (
        <div className={style.card}>
            <Img fluid={data.file.childImageSharp.fluid} alt={title}/>
            <Link to={`/blog/${slug}`}><h1>{title}</h1></Link>
            <span>{date}</span>
            <p>
                {intro}
            </p>
        </div>
    )
}

export default BlogPostCard
