import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import Navigation from "./Navigation"
import { useSiteMetadata } from "../hooks/site-metadata"
import { Logo } from "./logo"
import Box from "./Box"

const Container = styled.div`
  margin: 0 auto;
`

const Header = styled.header`
   border-bottom: 1px solid #333;
   background-color: #fff;
   position: sticky;
   width: 100%;
   top: 0;
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
export default function Layout({ children }) {
    const { title, menuLinks } = useSiteMetadata();
    console.log(menuLinks)
    return (
        <Container>
            <Header>
                <Box>
                    <HeaderGrid>
                        <Logo></Logo>
                        <p>Title</p>
                        <Navigation menuLinks={menuLinks} />
                    </HeaderGrid>
                </Box>
            </Header>

            <main>
                {children}
            </main>

            <Footer>

            </Footer>

        </Container>
    )
}