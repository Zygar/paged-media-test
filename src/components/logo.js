import { StaticImage } from "gatsby-plugin-image"
import styled from "styled-components"
import { useSiteMetadata } from "../hooks/site-metadata"
import React from "react"
import { Link } from "gatsby"

const LogoWrapper = styled(props => <Link {...props} />)`
   display: flex;
   align-items: center;
   text-decoration: none;
   color: unset;
   font-weight: bold;
   line-height: 1.25;
   position: relative;
   margin-bottom: -2.5em;
`

const ImageWrapper = styled.div`
   flex-basis: 50%;
`

const SiteTitle = styled.span`
    font-size: 1.25em;
    margin-left: 1em;
`

export function Logo() {
    const { title } = useSiteMetadata()
    return <LogoWrapper to="/">
        <ImageWrapper>
            <StaticImage
                src="../assets/cook-alliance-logo.png"
                alt="COOK Alliance"
                placeholder="blurred"
                height={200}
                objectFit="contain" />
        </ImageWrapper>
        {/* <SiteTitle>{title}</SiteTitle> */}
    </LogoWrapper>


}