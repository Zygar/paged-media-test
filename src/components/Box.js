import React from "react"
import styled from "styled-components"

const ContainerStyled = styled.div`
    max-width: 1200px;  
    margin-left: auto;
    margin-right: auto;    
`
const Container = function ({ children }) {
    return (
        <ContainerStyled>
            {children}
        </ContainerStyled>
    )
}

export default Container;