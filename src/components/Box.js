import React from "react"
import styled from "styled-components"

const ContainerStyled = styled.div`
    max-width: 1400px;  
    margin-left: auto;
    margin-right: auto;    
    padding-left: 32px;
    padding-right:32px;
`
const Container = function ({ children }) {
    return (
        <ContainerStyled>
            {children}
        </ContainerStyled>
    )
}

export default Container;