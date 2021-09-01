import React from "react"
import styled from "styled-components"
import { Link, StaticQuery, graphql } from "gatsby"
var GithubSlugger = require('github-slugger')

const TocWrapper = styled.ol`
  background-color:#eee;
  border: 1px solid #ddd;
  padding: 1rem;
  @media print {
      break-after: always;
      background-color: transparent;
  }
`

function TableOfContents(props) {
    const headings = props.headings
    const slugger = new GithubSlugger()
    return (
        <TocWrapper>
            {headings.map(heading => (
                <li><a href={`#${slugger.slug(heading)}`}>{heading}</a></li>
            ))}
        </TocWrapper>
    )
}
export default TableOfContents