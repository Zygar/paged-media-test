import React from "react"
import styled from "styled-components"
import { Link, StaticQuery, graphql } from "gatsby"
var GithubSlugger = require('github-slugger')

const TocWrapper = styled.ol`
  background-color:#eee;
  border: 1px solid #ddd;
  padding: 1rem;
  counter-reset: tocCounter;
  @media print {
      break-after: always;
      background-color: transparent;
  }
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
            {headings.map(heading => (
                <TocItem><a href={`#${slugger.slug(heading)}`}>{heading}</a></TocItem>
            ))}
        </TocWrapper>
    )
}
export default TableOfContents