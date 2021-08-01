import React from "react"
import { graphql } from "gatsby"
import { Link } from "gatsby"
import { Previewer } from "pagedjs";
import Chapter from "../chapterRenderer.js";
import "./print.css"

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  return (
    <div className="page-wrapper">
      <div className="blog-post">
        <Link to="/">Go home</Link>
        <h1>{frontmatter.title}</h1>
        <p>{frontmatter.author}</p>
        <Chapter html={html}></Chapter>

      </div>
    </div>
  )
}

export const pageQuery = graphql`
  query($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        slug
        title
        author
      }
    }
  }
`