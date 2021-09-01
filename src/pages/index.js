import React from "react"
import { graphql } from 'gatsby'
import { Link } from "gatsby"
import Layout from "../components/layout"
import styled from "styled-components"

const Chapter = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  margin-bottom: 1rem;
  border-bottom: 1px solid #ddd;
  padding-bottom:1rem;
`

const ChapterHeading = styled.h3`
  font-weight: normal!important;
  margin: 0;
  max-width:60%;
`

export default function Home({
  data: {
    allMarkdownRemark: { edges },
  },
}) {
  return <Layout>
    <section>
      <h1>Home Cooking Equity Framework</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut a faucibus metus. Morbi fermentum turpis ac sem porttitor ornare. Ut est mi, dictum et ultricies vel, accumsan id elit. </p>
    </section>
    <section>
      <h2>Table of contents</h2>
      {
        edges.map(edge => (
          <Chapter key={edge.node.id}>
            <ChapterHeading>
              <Link to={`/${edge.node.frontmatter.slug}`}>{edge.node.frontmatter.title}</Link>
            </ChapterHeading>
            <div>
              <small style={{ fontSize: `11px` }}><Link to={`/${edge.node.frontmatter.slug}.pdf`}>Download PDF</Link> • <Link to={`/${edge.node.frontmatter.slug}/print`}>Printer friendly</Link> </small>
            </div>

          </Chapter>
        ))
      }
    </section>
  </Layout>
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