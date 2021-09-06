import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import Navigation from "./Navigation"
import { useSiteMetadata } from "../hooks/site-metadata"
import { Logo } from "./logo"
import Box from "./Box"
import SEO from "./seo"

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
`
const HeaderGrid = styled.div`
    display:grid;
    align-items: center;
    justify-content: space-between;
    grid-template-columns: minmax(120px, 320px) 1fr min-content;
    grid-template-rows: 1fr;  
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
                        <Logo></Logo>
                        <div>
                            <p>{props.title}</p>
                            {prevPage.title != null && <Link to={prevPage.slug}>{prevPage.title}</Link>}
                            {nextPage.title != null && <Link to={nextPage.slug}>{nextPage.title}</Link>}
                        </div>
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