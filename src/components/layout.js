import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import Navigation from "../../Navigation"
import { useSiteMetadata } from "../hooks/site-metadata"
import { Logo } from "./logo"

const Container = styled.div`
  margin: 0 auto;
`

const Header = styled.header`
   display:grid;
   border-bottom: 1px solid #333;
   align-items: center;
   justify-content: space-between;
   grid-template-columns: minmax(220px, 420px) 1fr;
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

export default function Layout({ children }) {
    const { title, menuLinks } = useSiteMetadata();
    console.log(menuLinks)
    return (
        <Container>
            <Header>
                <Logo></Logo>
                <Navigation menuLinks={menuLinks} />
                {/* <Nav>
                    <NavLinks>
                        <NavLink><Link to="/">Home</Link></NavLink>
                        <NavLink><Link to="/model-legislation">Model Legislation</Link></NavLink>
                        <NavLink><Link to="/model-code">Model Code</Link></NavLink>
                    </NavLinks>
                </Nav> */}
            </Header>
            <main>
                {children}
            </main>

        </Container>
    )
}