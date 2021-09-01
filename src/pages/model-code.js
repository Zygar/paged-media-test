import React from "react"
import { graphql } from "gatsby"
import { Link } from "gatsby"
import Layout from "../components/layout"
import "./print.css"
import ArticleBody from "../components/articleBody"
import styled from "styled-components"



export default function Template({ data }) {

  const allModelCode = data.allMarkdownRemark.edges;

  return (
    <Layout>
      <h1>Model Code</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut a faucibus metus. Morbi fermentum turpis ac sem porttitor ornare. Ut est mi, dictum et ultricies vel, accumsan id elit.  </p>
      {
        allModelCode.map(edge => (
          <ArticleBody
            html={edge.node.html}
            numberingStart={edge.node.frontmatter.numberingStart}
            key={edge.node.id}
            theme={edge.node.frontmatter.theme}
          />
        ))
      }
    </Layout>
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