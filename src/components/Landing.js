import React from "react"
import LinkedInIcon from "../../assets/linkedin-icon.svg"
import GithubIcon from "../../assets/github-icon.svg"
import TwitterIcon from "../../assets/twitter-icon.svg"

import style from "./Landing.module.css"

const Landing = () => {
    console.log(style)

    return (
        <div className={style.landing}>
            <div className={style.icons}>
                <a href="https://www.linkedin.com/in/c%C3%A9dric-merouani-symfony-react/" target="_blank" rel="noopener noreferrer"><span><LinkedInIcon /></span></a>
                <a href="https://github.com/Linkinou" target="_blank" rel="noopener noreferrer"><span><GithubIcon /></span></a>
                <a href="https://twitter.com/CedricMerouani" target="_blank" rel="noopener noreferrer"><span><TwitterIcon /></span></a>
            </div>
            <div className={style.jobTitle}>Web Developer</div>
        </div>
    )
}

export default Landing
