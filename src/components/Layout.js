import React from "react"
import Header from "../components/header"
import Footer from "../components/footer"

import style from "../components/Layout.module.css"

const Layout = ({children, position}) => {
    return (
        <div className={style.layout}>
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
