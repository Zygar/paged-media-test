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
   @media print {
       position: static;
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
    color:#fff; 
    
    >div {
        display: flex;
        padding-top:6.44rem;
        padding-bottom:4rem;
    }
    
    a {color:#fff;}
    >div>div {
        margin-left:0; 
        font-size:0.8rem!important; 
        &:first-child {
            padding-right: 1.61rem;
        }
        &:last-child {
            padding-left: 1.61rem;}
        h4 {font-size:0.8rem;} 
    }
    ${bp.tablet} {
        >div {
            font-size: 1rem;
            margin-left: auto;
            flex-direction: column;
            h4 {font-size: 1rem; }
            >div{
                padding-left:0!important;
                padding-right: 0!important;
                margin-bottom:1rem;
            }
        }
    }
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


    const nextPage = props.next || { title: null, slug: null }
    const prevPage = props.prev || { title: null, slug: null }
    return (
        <Container>
            <SEO title={props.title} description={props.description} />
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

            <Footer><Box>

                <div>
                    <h4>Published by the <a href="https://www.cookalliance.org/">COOK Alliance</a></h4>
                    <p><a href="https://www.cookalliance.org/">The COOK Alliance</a> is a nonprofit whose mission is to establish just &amp; people-powered food systems. We believe that legalizing home restaurants in the United States creates more economic access for cooks, healthy food options for customers, and cultural exchange for communities. </p>
                    <p>As the primary sponsor behind the first home restaurants bills in the US, we are now working to ensure equitable, accessible implementation in early adopting states and to extend the same opportunity to more home cooks across the nation. We are also increasingly active in supporting new Cottage Food policies and other local food movement initiatives. </p>
                    <p>We can be reached for technical assistance, partnership, or philanthropic inquiries at <a href="mailto:hello@cookalliance.org">hello@cookalliance.org</a> </p>
                </div>
                <div>
                    <h4>License &amp; Feedback</h4>
                    <p>These documents are offered under <a href="https://creativecommons.org/licenses/by-sa/4.0/">Creative Commons Attribution-ShareAlike 4.0 International license</a> so that they can be used and edited by advocates and legislators.</p>
                    <p>We hope to release new versions of these model documents periodically as the legislative landscape evolves and we continue to learn from early states’ experiences with implementation. Additional input is welcome and can be shared with us at any time by emailing <a href="mailto:advocacy@cookalliance.org">advocacy@cookalliance.org</a> with “Model Legislation Feedback” in the subject line. </p>
                </div>
            </Box>
            </Footer>

        </Container>
    )
}