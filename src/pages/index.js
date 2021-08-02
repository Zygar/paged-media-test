import React from "react"
import { graphql } from 'gatsby'
import { Link } from "gatsby"
export default function Home({
  data: {
    allMarkdownRemark: { edges },
  },
}) {
  return <div>
    {
      edges.map(edge => (
        <li key={edge.node.id}>
          <Link to={`chapters/${edge.node.frontmatter.slug}`}>{edge.node.frontmatter.title}</Link> • <small style={{ fontSize: `11px` }}><Link to={`/chapters/${edge.node.frontmatter.slug}.pdf`}>Download PDF</Link> • <Link to={`/chapters/${edge.node.frontmatter.slug}/print`}>Printer friendly</Link> </small>
        </li>
      ))
    }
  </div>
}

export const query = graphql`query {
  allMarkdownRemark {
    edges {
      node {
        id
        frontmatter {
          title
          slug
        }
      }
    }
  }
}`