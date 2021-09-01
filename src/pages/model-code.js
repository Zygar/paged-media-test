import React from "react"
import { graphql } from "gatsby"
import { Link } from "gatsby"
import Layout from "../components/layout"
import "./print.css"
import ArticleBody from "../components/articleBody"
import styled from "styled-components"
import TableOfContents from "../components/TableOfContents"

const DocumentBody = styled.section`
  display: flex;
  align-items: flex-start;
  position: relative;
`
const Sidebar = styled.aside`
  flex-basis: 15em;
  position: sticky;
  align-self: flex-start;
  top: 64px;
  margin-right: 4rem;
  font-size: 0.8rem;
  min-width: 240px;
  margin-top: 6.44rem; //remove me later 
`

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
      <DocumentBody>
        <Sidebar>
          <TableOfContents headings={allSectionHeadings}
          />
        </Sidebar>
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
      </DocumentBody>

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