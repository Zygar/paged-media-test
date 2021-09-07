import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import Navigation from "./Navigation"
import { useSiteMetadata } from "../hooks/site-metadata"
import { Logo } from "./logo"
import Box from "./Box"
import SEO from "./seo"
import { bp } from "../utils/breakpoints"

const Container = styled.div`
  margin: 0 auto;
`

const Header = styled.header`
   border-bottom: 1px solid #333;
   background-color: #fff;
   position: sticky;
   width: 100%;
   top: 0;
   z-index: 5;
   padding-top: .5rem;
   padding-bottom: 0;
`
const HeaderGrid = styled.div`
    display:grid;
    align-items: center;
    justify-content: space-between;
    grid-template-columns: 1fr min-content;
    grid-template-rows: 1fr;  
    margin-bottom:-1em;
    ${bp.mobile} {
        margin-bottom:0;
    }
  
`
const Nav = styled.nav`
    font-size: 1rem;
`
const NavLinks = styled.ul`
    list-style: none;
    display: flex;
    justify-content: flex-end;
    padding: 0;
    margin: 0;  
`
const Title = styled.div`
  display:flex; 
  justify-content: center;

`
const NavLink = styled.li`
    margin:0;
    padding:0;
    font-size: 14px;
    margin-left: 14px;
`
const Footer = styled.footer`
    background-color: #585A67;
    min-height: 150px;
`

const PageTitleWrapper = styled.div`
  display:flex;
  flex-direction:column;
  padding-right: 1em;
`

const PageTitle = styled.span`
  font-weight: bold;
  line-height: 1.25;
  font-size: 2em;
  max-width: 10em;
  ${bp.tablet} {
      font-size: 1.25em;
  }
  ${bp.mobile} {
      font-size: 1em;
  }
`

const TitleWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`

const LogoWrapper = styled.div`
  max-width: 8.6rem;
  margin-right: 1em;
  position: relative;
  ${bp.mobile} {
      max-width: 5rem;
  }
`

const MetaLinks = styled.div`
  font-size: 0.8rem;
  text-transform:uppercase;
  letter-spacing: 0.1px;
  display:none;
`

export default function Layout(props) {
    const { title, menuLinks } = useSiteMetadata();
    console.log(menuLinks)

    const nextPage = props.next || { title: null, slug: null }
    const prevPage = props.prev || { title: null, slug: null }
    return (
        <Container>
            <SEO title={props.title} />
            <Header>
                <Box>
                    <HeaderGrid>
                        <TitleWrapper>
                            <LogoWrapper>
                                <Logo title={props.title}></Logo>
                            </LogoWrapper>
                            <PageTitleWrapper>
                                <PageTitle>{props.title}</PageTitle>
                                <MetaLinks>
                                    {prevPage.title != null && <Link to={prevPage.slug}>{prevPage.title}</Link>}
                                    {nextPage.title != null && <Link to={nextPage.slug}>{nextPage.title}</Link>}
                                </MetaLinks>
                            </PageTitleWrapper>
                        </TitleWrapper>

                        <Navigation menuLinks={menuLinks} />
                    </HeaderGrid>
                </Box>
            </Header>

            <main>
                {props.children}
            </main>

            <Footer>

            </Footer>

        </Container>
    )
}