import React from "react"
import { graphql } from "gatsby"
import { Link } from "gatsby"
import "./print.css"
export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  return (
    <div className="blog-post-container">
      <div className="blog-post">
        <div className='hide-on-print' style={{ marginBottom: "1.5em", borderBottom: "1px solid #999" }}>
          <nav>
            <Link to="/">← Go home</Link><br />
            <Link to={`/${frontmatter.slug}.pdf`}>Download PDF</Link> • <Link to={`/${frontmatter.slug}/print`}>Printer friendly</Link>
          </nav>
        </div>
        {/* <h1>{frontmatter.title}</h1>
                <p>{frontmatter.author}</p> */}
        <article
          className={`post ${frontmatter.theme}`}
          style={{ counterSet: `h1counter ${frontmatter.numberingStart}` }}
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
    </div >
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
        theme
        numberingStart
      }
    }
  }
`