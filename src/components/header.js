import React from "react"
import headerStyles from './header.module.css'
import { Link, graphql, useStaticQuery } from "gatsby"

const Header = () => {
    const data = useStaticQuery(graphql`
            query {
                site {
                    siteMetadata {
                        title
                    }
                }
            }
        `)

  return (
    <header>
      <div className={headerStyles.links}>
        <div className={headerStyles.title}><Link to="/">{data.site.siteMetadata.title}</Link></div>
      </div>
    </header>
  )
}

export default Header
