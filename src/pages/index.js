import React from "react"
import { graphql } from 'gatsby'
import { Link } from "gatsby"
import Layout from "../components/layout"
import styled from "styled-components"

const Chapter = styled.div`
  display: grid;
  /* align-items: flex-end;
  justify-content: space-between; */
  grid-template-columns: 1fr minmax(40px, 120px);
  grid-template-rows: min-content 1fr;
  grid-template-areas: "heading downloads"
  "summary summary";
  margin-bottom: 1rem;
  border-bottom: 1px solid #ddd;
  padding-bottom:1rem;
`

const ChapterHeading = styled.h3`
  font-weight: normal!important;
  margin: 0;
  max-width:60%;
`
const ChapterSummary = styled.p`
   font-size: 0.8rem;
   margin:1em 0 0 0 ;
   max-width: 60em;
   grid-area:summary;
   
   
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
        <div>
          <Chapter>
            <ChapterHeading>
              <Link to="introduction">Introduction</Link>
            </ChapterHeading>
            <div>
              <small style={{ fontSize: `11px` }}><Link to={`/introduction.pdf`}>Download PDF</Link> </small>
            </div>
            <ChapterSummary>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut a faucibus metus. Morbi fermentum turpis ac sem porttitor ornare. Ut est mi, dictum et ultricies vel, accumsan id elit.
            </ChapterSummary>
          </Chapter>

          <Chapter>
            <ChapterHeading>
              <Link to="model-legislation">Model Legislation</Link>
            </ChapterHeading>
            <div>
              <small style={{ fontSize: `11px` }}><Link to={`/model-legislation.pdf`}>Download PDF</Link> </small>
            </div>
            <ChapterSummary>
              Praesent pellentesque lorem at eros congue, quis rhoncus ante congue. Donec dictum nisi non orci volutpat porttitor. Aliquam pharetra, purus quis ullamcorper dictum, velit libero euismod velit, consequat aliquam arcu nunc consectetur orci. Integer porttitor lorem sit amet mauris pellentesque, elementum porttitor metus luctus.            </ChapterSummary>
          </Chapter>
          <Chapter>
            <ChapterHeading>
              <Link to="model-code">Model Code</Link>
            </ChapterHeading>
            <div>
              <small style={{ fontSize: `11px` }}><Link to={`/model-code.pdf`}>Download PDF</Link> </small>
            </div>
            <ChapterSummary>
              Proin tempus, sapien vehicula commodo egestas, nisi eros tincidunt ante, rutrum facilisis leo augue et risus. Quisque eros risus, lobortis ac vulputate sagittis, varius quis dolor.
            </ChapterSummary>
          </Chapter>
        </div>


        // edges.map(edge => (
        //   <Chapter key={edge.node.id}>
        //     <ChapterHeading>
        //       <Link to={`/${edge.node.frontmatter.slug}`}>{edge.node.frontmatter.title}</Link>
        //     </ChapterHeading>
        //     <div>
        //       <small style={{ fontSize: `11px` }}><Link to={`/${edge.node.frontmatter.slug}.pdf`}>Download PDF</Link> • <Link to={`/${edge.node.frontmatter.slug}/print`}>Printer friendly</Link> </small>
        //     </div>

        //   </Chapter>
        // ))
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