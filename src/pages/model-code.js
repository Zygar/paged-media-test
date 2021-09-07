import React from "react"
import { graphql } from "gatsby"
import { Link } from "gatsby"
import Layout from "../components/layout"
import "./print.css"
import ArticleBody from "../components/articleBody"
import styled from "styled-components"
import TableOfContents from "../components/TableOfContents"
import Container from "../components/Box"
import { Hero, Heading, HeroBox, Eyebrow, ActionLink } from "../components/hero"
import { bp } from "../utils/breakpoints"

// ABSTRACT ME OUT
const DocumentBody = styled.section`
  display: flex;
  align-items: flex-start;
  position: relative;
  margin-top: 4em;
  ${bp.mobile} {
    position: unset;
    flex-direction: column;
  }
`
const Sidebar = styled.aside`
  flex-basis: 15em;
  position: sticky;
  align-self: flex-start;
  top: 64px;
  margin-right: 4rem;
  font-size: 0.8rem;
  min-width: 240px;
  ${bp.mobile} {
    position: unset;
  }
`

export default function Template({ data }) {

  const allModelCode = data.allMarkdownRemark.edges;
  // console.log(allModelCode)
  const allSectionHeadings = allModelCode.map((edge) => {
    return edge.node.headings[0].value;
  })
  console.log(allSectionHeadings)
  return (
    <Layout title="Model Code">
      <Hero>
        <Container>

          <HeroBox>
            <Eyebrow>Model Code</Eyebrow>
            <Heading>A detailed set of regulations that right-sizes the food code for the home kitchen.</Heading>
            <ActionLink to={`/model-code.pdf`}>Download as PDF</ActionLink>
          </HeroBox>

        </Container>
      </Hero>
      <Container>
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
      </Container>
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