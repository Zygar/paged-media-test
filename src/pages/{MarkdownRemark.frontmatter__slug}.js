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

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html, headings } = markdownRemark
  const allSectionHeadings = headings.map((heading) => {
    return heading.value;
  })

  const nextPage = {
    title: frontmatter.nextTitle || null,
    slug: frontmatter.nextSlug || null
  }

  const prevPage = {
    title: frontmatter.prevTitle || null,
    slug: frontmatter.prevSlug || null
  }
  console.log(frontmatter)
  return (
    <Layout title={frontmatter.title} description={frontmatter.description} next={nextPage} prev={prevPage}>
      <Hero id="hero">
        <Container>
          <HeroBox>
            <Eyebrow>{frontmatter.title}</Eyebrow>
            <Heading>{frontmatter.excerpt}</Heading>

            {frontmatter.hasPdf == "true" && <ActionLink href={`/${frontmatter.slug}.pdf`}>Download as PDF</ActionLink>}
          </HeroBox>

        </Container>
      </Hero>
      <Container>

        <DocumentBody>
          {allSectionHeadings.length > 0 && <Sidebar>
            <TableOfContents headings={allSectionHeadings}
            />
          </Sidebar>}
          <main>
            <ArticleBody
              html={html}
              numberingStart="1"
              theme={frontmatter.theme}
            />
          </main>
        </DocumentBody>
      </Container>
      {/* <Link to={frontmatter.next.nextTitle}>Next</Link> */}
    </Layout>
  )
}

export const pageQuery = graphql`
      query($id: String!) {
        markdownRemark(id: {eq: $id }) {
        html
      headings(depth: h2) {
        depth
        value
      }
      frontmatter {
        slug
        title
      author
      theme
      numberingStart
      description
      excerpt
      nextTitle
      nextSlug

      hasPdf
      prevTitle
      prevSlug         
         
      }
    }
  }
      `