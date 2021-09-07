import React from "react"
import styled from "styled-components"
import { Link, StaticQuery, graphql } from "gatsby"
import { bp } from "../utils/breakpoints"

var GithubSlugger = require('github-slugger')


const TocWrapper = styled.div`
  background-color: #fff;
  box-shadow: 0 4px 20px rgba(0,0,0,0.1);
  padding: 2rem;
  
 
  @media print {
      break-after: always;
      background-color: transparent;
  }
`
const TocList = styled.ol`
  counter-reset: tocCounter;
  margin-bottom:0;
  ${bp.medium} {
      column-count: 2
  }
  ${bp.mobile} {
      column-count: unset;
      font-size:1rem;
  }
  li {
    counter-increment: tocCounter;
    &:before {
        content: counter(tocCounter);
        display: inline-block;
    }
    a {
        color: #AF4B5A;
    }
  }
`
const TocHeading = styled.div`
  text-transform: uppercase;
  margin-bottom: 1em;
  letter-spacing: .1em;
`



function TableOfContents(props) {
    const headings = props.headings
    const slugger = new GithubSlugger()
    return (
        <TocWrapper>
            <TocHeading>Table of Contents</TocHeading>
            <TocList>
                {headings.map((heading, i) => (
                    <li key={heading}><a href={`#${slugger.slug(heading)}`}>{heading}</a></li>
                ))}
            </TocList>
        </TocWrapper>
    )
}
export default TableOfContents