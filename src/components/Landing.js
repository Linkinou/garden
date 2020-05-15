import React from "react"
import LinkedInIcon from "../../assets/linkedin-icon.svg"
import GithubIcon from "../../assets/github-icon.svg"
import TwitterIcon from "../../assets/twitter-icon.svg"

import style from "./Landing.module.css"

const Landing = () => {
    return (
        <div className={style.landing}>
            <div className={style.icons}>
                <a href="https://www.linkedin.com/in/c%C3%A9dric-merouani-symfony-react/" target="_blank"><span><LinkedInIcon /></span></a>
                <span><GithubIcon /></span>
                <span><TwitterIcon /></span>
            </div>
            <div className={style.jobTitle}>Développeur Web</div>
        </div>
    )
}

export default Landing
