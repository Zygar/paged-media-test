import React from "react"
import styled from "styled-components"
import { bp } from "../utils/breakpoints"
import { Link } from "gatsby"
const Hero = styled.div`
  background: #ff6e61;
  padding-top: 120px;
  padding-bottom: 120px;
  color: #fff;
`
const Heading = styled.h1`
  margin:0;
  padding:0;
  font-size: 2.83rem;
  ${bp.mobile}{
    font-size: 2.33rem;
  }
`

const HeroBox = styled.div`
  max-width: 50%;
  ${bp.medium} {
    max-width: 75%;
  }
  ${bp.tablet} {
    max-width: unset;
  }
  @media print {
    max-width: none;
  }
`

const Eyebrow = styled.span`
  font-family: sans-serif;
  text-transform:uppercase;
  font-weight: bold;
  font-size: 0.85rem;
`

const ActionLink = styled.a`
  color: unset;
  font-size: 1.25rem;
  display:inline-block;
  margin-top: 3em;
  color: #fff;
  border: 3px solid #fff;
  align-items: center;
  border-radius: 24px;
  box-sizing: border-box;
  justify-content: center;
  outline:none;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  text-transform: uppercase;
  letter-spacing:0.01em;
  font-size: 14px;
  font-weight: bold;
  line-height:1;
  cursor: pointer;
  transition: all 0.1s ease-in-out;
  white-space: nowrap;
  padding: 1rem 3rem;
  text-decoration: none;
  transition: all 0.1s ease-in-out;
  &:hover {
    color: #ff6e61;
    background-color:#fff;
  }
  &::after{
      content: " ↓";
  }
  @media print {
    display:none;
  }
`

export { Hero, Heading, HeroBox, Eyebrow, ActionLink }