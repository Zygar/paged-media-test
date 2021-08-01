import React from "react"
import { graphql } from "gatsby"
import { Link } from "gatsby"
import { Previewer } from "pagedjs";
import chapterRenderer from "../chapterRenderer";
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
        <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: html }}
        />
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