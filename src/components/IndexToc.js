import React from "react"
import styled from "styled-components"
import { Link, StaticQuery, graphql } from "gatsby"
var GithubSlugger = require('github-slugger')

const TocWrapper = styled.ol`
  
  

  font-size: 0.8rem;
  counter-reset: tocCounter;
  display: grid;
  grid-template-columns: 50% 50% ;
  grid-template-rows: min-content min-content min-content;
`
const TocItem = styled.li`
    counter-increment: tocCounter;
    &:before {
        content: counter(tocCounter);
        display: inline-block;
    }
`


function IndexToc(props) {
    const headings = props.headings;
    const prefix = props.prefix;
    const slugger = new GithubSlugger()
    return (
        <TocWrapper>
            {headings.map(heading => (
                <TocItem><Link to={`/${prefix}#${slugger.slug(heading)}`}>{heading}</Link></TocItem>
            ))}
        </TocWrapper>
    )
}
export default IndexToc