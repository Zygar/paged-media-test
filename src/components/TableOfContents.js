import React from "react"
import styled from "styled-components"
import { Link, StaticQuery, graphql } from "gatsby"
import { bp } from "../utils/breakpoints"

var GithubSlugger = require('github-slugger')


const TocWrapper = styled.div`
  background-color:#f7f7f7;
  border: 1px solid #eee;
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
  }
`
const TocHeading = styled.div`
  text-transform: uppercase;
  margin-bottom: 1em;
  letter-spacing: .1em;
`
const TocItem = styled.li`
    counter-increment: tocCounter;
    &:before {
        content: counter(tocCounter);
        display: inline-block;
    }
    
`


function TableOfContents(props) {
    const headings = props.headings
    const slugger = new GithubSlugger()
    return (
        <TocWrapper>
            <TocHeading>Table of Contents</TocHeading>
            <TocList>
                {headings.map(heading => (
                    <TocItem><a href={`#${slugger.slug(heading)}`}>{heading}</a></TocItem>
                ))}
            </TocList>
        </TocWrapper>
    )
}
export default TableOfContents