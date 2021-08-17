import React from "react"
import { graphql } from "gatsby"
import { Link } from "gatsby"
import "../print.css"
export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  // const { markdownRemark } = data // data.markdownRemark holds your post data
  // const { frontmatter, html } = markdownRemark
  const allModelCode = data.allMarkdownRemark.edges;
  console.log(allModelCode)
  return (
    <div className="blog-post-container" >
      <div className="blog-post">
        <main>

          {
            allModelCode.map(edge => (

              <article id={`#section-${edge.node.frontmatter.numberingStart}`} className="post model-code" key={edge.node.id} dangerouslySetInnerHTML={{ __html: edge.node.html }}
                style={{ counterSet: `h1counter ${edge.node.frontmatter.numberingStart} ` }}>

              </article>

            ))
          }
        </main>

        {/* <article
          className={`post ${frontmatter.theme}`}
          style={{ counterSet: `h1counter ${frontmatter.numberingStart}` }}
          dangerouslySetInnerHTML={{ __html: html }}
        /> */}
      </div>
    </div >
  )
}

export const codeQuery = graphql`
query codeQuery {
  allMarkdownRemark(
    filter: {frontmatter: {theme: {eq: "model-code"}}}
    sort: {fields: frontmatter___numberingStart}
  ) {
    edges {
      node {
        id
        html
        frontmatter {
          title
          slug
          author
          theme
          numberingStart
        }
      }
    }
  }
}
`