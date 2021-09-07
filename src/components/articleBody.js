import React from "react"
import styled from "styled-components"
import { Link, StaticQuery, graphql } from "gatsby"



function ArticleBody(props) {
    return (
        <article
            dangerouslySetInnerHTML={{ __html: props.html }}
            className={`post ${props.theme}`}
            style={{ counterReset: `h1counter ${props.numberingStart}  h2counter 0` }}
        >

        </article>
    )
}
export default ArticleBody