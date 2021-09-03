import React from "react"
import { graphql } from "gatsby"
import { Link } from "gatsby"
import Layout from "../components/layout"
import "./print.css"
import ArticleBody from "../components/articleBody"
import styled from "styled-components"
import TableOfContents from "../components/TableOfContents"

// ABSTRACT ME OUT
// ABSTRACT ME OUT
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

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html, headings } = markdownRemark
  const allSectionHeadings = headings.map((heading) => {
    return heading.value;
  })
  console.log(allSectionHeadings)
  return (
    <Layout>
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
      <Link to={frontmatter.next}>Next</Link>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($id: String!) {
    markdownRemark(id: { eq: $id }) {
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
        next
        prev
      }
    }
  }
`