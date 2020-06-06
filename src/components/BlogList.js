import React from "react"
import BlogPostCard from "../components/BlogPostCard"
import {graphql, useStaticQuery} from "gatsby"

import style from "./BlogList.module.css"


const BlogList = () => {
    const data = useStaticQuery(graphql`
        query {
            allMarkdownRemark {
                edges {
                    node {
                        frontmatter {
                            title
                            date
                            intro
                            image {
                                childImageSharp {
                                    fluid {
                                        ...GatsbyImageSharpFluid
                                    }
                                }
                            }
                        }
                        html,
                        excerpt
                        fields {
                            slug
                        }
                    }
                }
            }
        }
    `)

    return (
        <section className={style.list}>
            {data.allMarkdownRemark.edges.map(edge =>
                <BlogPostCard
                    img={edge.node.frontmatter.image.childImageSharp.fluid}
                    title={edge.node.frontmatter.title}
                    date={edge.node.frontmatter.date}
                    intro={edge.node.frontmatter.intro}
                    slug={edge.node.fields.slug}
                />
            )}
        </section>
    )
}

export default BlogList
