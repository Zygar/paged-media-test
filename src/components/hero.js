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
`

const HeroBox = styled.div`
  max-width: 50%;
  ${bp.medium} {
    max-width: 75%;
  }
  ${bp.tablet} {
    max-width: unset;
  }
`

const Eyebrow = styled.span`
  font-family: sans-serif;
  text-transform:uppercase;
  font-weight: bold;
  font-size: 0.85rem;
`

const ActionLink = styled(props => <Link {...props} />)`
  color: unset;
  font-size: 1.25rem;
  display:block;
  margin-top: 1em;
  &::after{
      content: " ↓";
  }
`

export { Hero, Heading, HeroBox, Eyebrow, ActionLink }