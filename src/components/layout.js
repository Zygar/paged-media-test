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
   background-color: #fff;
  box-shadow: 0 4px 20px rgba(0,0,0,0.1);
   position: sticky;
   width: 100%;
   top: 0;
   z-index: 5;
   padding-top: 1rem;
   padding-bottom: 1rem;
   ${bp.tablet} {
       padding: .5rem 0 .5rem 0;
   }
`
const HeaderGrid = styled.div`
    display:grid;
    align-items: center;
    justify-content: space-between;
    grid-template-columns: 1fr min-content;
    grid-template-rows: minmax(4rem, 4rem);  
    /* margin-bottom:-1em; */
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
`

const PageTitle = styled.span`
  font-weight: bold;
  line-height: 1.25;
  font-size: 1.5em;
  max-width: 10em;
  overflow-wrap:normal;
  ${bp.tablet} {
      font-size: 1.25em;
  }
  ${bp.mobile} {
      font-size: 1.33em;
  }
`

const TitleWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: stretch;
`

const LogoWrapper = styled.div`
  min-width: 140px;
  flex-basis: 140px;
  margin-right: 1em;
  position: relative;
  ${bp.tablet} {
    min-width: 100px;
    flex-basis: 100px;
 }
  ${bp.mobile} {
      min-width: 80px;
      flex-basis: 80px;
  }
`

const MetaLinks = styled.div`
    display:flex;
    /* flex-direction: column; */
    ${bp.tablet} {
        flex-direction: row;
    }
  ${bp.mobile} {display:none;}
`

const NavWrapper = styled.div`
  display:flex;
  align-items: center;
`
const NextPrevLink = styled(props => <Link {...props} />)`
  display: flex;
  color: #AF4B5A;
  border: 3px solid #AF4B5A;
  align-items: center;
  border-radius: 24px;
  box-sizing: border-box;
  justify-content: center;
  outline:none;
  min-height: 42px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  text-transform: uppercase;
  letter-spacing:0.01em;
  font-size: 12px;
  font-weight: bold;
  line-height:1;
  cursor: pointer;
  transition: all 0.1s ease-in-out;
  white-space: nowrap;
  padding: 0 1rem;
  text-decoration: none;
  margin-right: .5em;
`

const NextPrevLabel = styled.div`
  ${bp.medium} {
      display:none;
  }
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

                            </PageTitleWrapper>
                        </TitleWrapper>

                        <NavWrapper>
                            <MetaLinks>
                                {prevPage.title != null && <NextPrevLink to={prevPage.slug}>← <NextPrevLabel>{prevPage.title}</NextPrevLabel></NextPrevLink>}
                                {nextPage.title != null && <NextPrevLink to={nextPage.slug}><NextPrevLabel>{nextPage.title}</NextPrevLabel> →</NextPrevLink>}
                            </MetaLinks>
                            <Navigation menuLinks={menuLinks} />
                        </NavWrapper>
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