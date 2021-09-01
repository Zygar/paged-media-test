import React from "react"
import { graphql } from "gatsby"
import { Link } from "gatsby"
import Layout from "../components/layout"
import "./print.css"
import ArticleBody from "../components/articleBody"
import styled from "styled-components"
import TableOfContents from "../components/TableOfContents"


export default function Template({ data }) {

  const allModelCode = data.allMarkdownRemark.edges;
  // console.log(allModelCode)
  const allSectionHeadings = allModelCode.map((edge) => {
    return edge.node.headings[0].value;
  })
  console.log(allSectionHeadings)
  return (
    <Layout>
      <section>
        <h1>Model Code</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut a faucibus metus. Morbi fermentum turpis ac sem porttitor ornare. Ut est mi, dictum et ultricies vel, accumsan id elit.  </p>
      </section>
      <section>
        <aside>
          <TableOfContents headings={allSectionHeadings}

          />
        </aside>
        <main>
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
        </main>
      </section>

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
        headings(depth: h1) {
          depth
          value
        }
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