import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const Container = styled.div`
  margin: 0 auto;
`

const Header = styled.header`
   display:flex;
   border-bottom: 1px solid #333;
   align-items: center;
   justify-content: space-between;
`

const Logo = styled.a`
   display: block;
   width: 240px;
   height: 100px;
   position: relative;
   text-align:center;
   line-height: 100px;
   background-color:#eee;
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

const NavLink = styled.li`
    margin:0;
    padding:0;
    font-size: 14px;
    margin-left: 14px;
`

export default function Layout({ children }) {
    return (
        <Container>
            <Header>
                <Logo>Logo</Logo>
                <Nav>
                    <NavLinks>
                        <NavLink><Link to="/">Home</Link></NavLink>
                        <NavLink><Link to="/model-legislation">Model Legislation</Link></NavLink>
                        <NavLink><Link to="/model-code">Model Code</Link></NavLink>
                    </NavLinks>
                </Nav>
            </Header>
            {children}
        </Container>
    )
}