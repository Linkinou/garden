import React from "react"
import style from "./BlogPostCard.module.css"
import { Link } from "gatsby"

const BlogPostCard = ({img, title, date, intro, slug}) => {
    return (
        <div className={style.card}>
            <img src={img} alt={title} />
            <Link to={`/blog/${slug}`}><h1>{title}</h1></Link>
            <span>{date}</span>
            <p>
                {intro}
            </p>
        </div>
    )
}

export default BlogPostCard
