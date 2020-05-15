import React from "react"
import style from "./footer.module.css"
import {graphql, useStaticQuery} from "gatsby"

const Footer = () => {
    const data = useStaticQuery(graphql`
            query {
                site {
                    siteMetadata {
                        author
                    }
                }
            }
        `)
    return (
        <footer className={style.footer}>
            <p>created by {data.site.siteMetadata.author} - Copyright 2020</p>
        </footer>
    )
}

export default Footer
