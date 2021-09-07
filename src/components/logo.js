import { StaticImage } from "gatsby-plugin-image"
import styled from "styled-components"
import { useSiteMetadata } from "../hooks/site-metadata"
import React from "react"
import { Link } from "gatsby"
import { bp } from "../utils/breakpoints"

const LogoWrapper = styled(props => <Link {...props} />)`
   display: flex;
   align-items: center;
   text-decoration: none;
   color: unset;
   font-weight: bold;
   line-height: 1.25;
   position: relative;
`

const ImageWrapper = styled.div`
   flex-basis: 6rem;
   min-width: 6rem;
   
`

const SiteTitle = styled.span`
    font-size: 1.25em;
    margin-left: 1em;
    ${bp.mobile} {
        font-size: 1em;
    }
    
`

export function Logo(props) {
    const { title } = useSiteMetadata()
    return <LogoWrapper to="/">

        <StaticImage
            src="../assets/cook-alliance-logo.png"
            alt="COOK Alliance"
            placeholder="blurred"
            height={200}
            objectFit="contain" />

        {/* <SiteTitle>{props.title}</SiteTitle> */}
    </LogoWrapper>


}