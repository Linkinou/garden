import React from "react"
import { Helmet } from "react-helmet"
import Header from "../components/header"
import Footer from "../components/footer"

import style from "../components/Layout.module.css"

const Layout = ({children, position}) => {
    console.log(typeof(position))
    console.log(typeof(children))
    return (
        <div className={style.layout}>
            <Helmet>
              <meta charSet="utf-8" />
              <title>Cédric Merouani - Web Developer</title>
              <link rel="canonical" href="https://cedric.merouani.net" />
            </Helmet>
            <Header/>
                {children}
            <Footer />
        </div>
    )
}

Layout.defaultProps = {
    position: "contentCenter"
}

export default Layout
