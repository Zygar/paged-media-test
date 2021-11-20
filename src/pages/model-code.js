import React from "react"
import { graphql } from "gatsby"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
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
  margin-bottom: 10em;
  ${bp.medium} {
    position: unset;
    flex-direction: column;
    justify-content: stretch;
  }
`
const Sidebar = styled.aside`
  flex-basis: 15em;
  position: sticky;
  align-self: flex-start;
  top: 120px;
  margin-right: 4rem;
  font-size: 0.8rem;
  min-width: 240px;
  ${bp.medium} {
    position: unset;
    width: 100%;
    margin-bottom: 6em;
  }
`

export default function Template({ data }) {
  const pageTitle = "Home Cooking Policy Framework"

  const prevPage = {
    title: "Model Legislation",
    slug: "/model-legislation"
  }
  const allModelCode = data.allMarkdownRemark.edges;
  // console.log(allModelCode)
  const allSectionHeadings = allModelCode.map((edge) => {
    return edge.node.headings[0].value;
  })
  console.log(allSectionHeadings)
  return (
    <Layout title="Model Code" description="Based on the FDA Model Food Code, this is a detailed set of regulations that right-sizes the food code for the home kitchen. It is for use by state and regulatory agencies to ensure appropriate safeguards and to add detail to the model legislation." prev={prevPage}>
      <Hero id="hero">
        <Container>
          <div className="show-on-print">
            <StaticImage
              src="../assets/cook-alliance-logo.png"
              alt="COOK Alliance"
              placeholder="blurred"
              height={200}
              loading="eager"
            />
          </div>
          <HeroBox>
            <Eyebrow id="title-eyebrow">Model Code</Eyebrow>
            <Heading>A detailed set of regulations that right-sizes the food code for the home kitchen.</Heading>
            <ActionLink href={`/model-code.pdf`} className="hide-on-print">Download as PDF</ActionLink>
          </HeroBox>

        </Container>
      </Hero>
      <Container>
        <DocumentBody>


          <Sidebar id="sidebar">
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