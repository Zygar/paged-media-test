import React from "react"
import styled from "styled-components"
import { bp } from "../utils/breakpoints"

const ContainerStyled = styled.div`
    max-width: 1400px;  
    margin-left: auto;
    margin-right: auto;    
    padding-left: 32px;
    padding-right:32px;
    ${bp.medium} {
        padding-left: 64px;
        padding-right: 64px;
    }
    ${bp.mobile} {
        padding-left: 24px;
        padding-right: 24px;
    }
    @media print {
        padding: 0;
    }
`
const Container = function ({ children }) {
    return (
        <ContainerStyled>
            {children}
        </ContainerStyled>
    )
}

export default Container;