import React from 'react'
import styled from 'styled-components'


const Wrapper = styled.div`
    position: relative;
    padding: 5px 0;
    background-color: #fff;
`

const FilterItem = styled.p`
    margin: 5px 0 5px 10px;
    font-size: 13px;
    background: white;
    cursor: pointer;
    padding: 5px 0 5px 10px;
    border-left: 3px solid transparent;
    
    &:hover {
        border-left: 3px solid #10c0c6;
    }

    ${({ active }) => active && `
        border-left: 3px solid #10c0c6;   
    `
    }
` 

export default function SelectFilter({children}) {

    return(
        <Wrapper>
            <FilterItem>Abertas</FilterItem>
            <FilterItem active={true}>Abertas e Fechadas</FilterItem>
        </Wrapper>
    )
}