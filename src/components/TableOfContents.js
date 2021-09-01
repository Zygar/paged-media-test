import React from "react"
import styled from "styled-components"
import { Link, StaticQuery, graphql } from "gatsby"

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
    return (
        <TocWrapper>
            {headings.map(heading => (
                <li>{heading}</li>
            ))}
        </TocWrapper>
    )
}
export default TableOfContents