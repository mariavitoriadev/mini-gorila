import React from 'react'
import styled from 'styled-components'


const Wrapper = styled.div`
    top: 130%;
    left: 0;
    min-width: 150px;
    color: #2d2d2d;
    padding: 10px 0;
    position: absolute;
    border-radius: 5px;
    background-color: #f1f1f1;
    box-shadow: 0 0 6px 0 rgb(0 0 0 / 40%);
`

const FilterContent = styled.div`
    background: white;
` 

export default function SelectFilter({children}) {

    return(
        <Wrapper>
            <FilterContent>
                {children}
            </FilterContent>
        </Wrapper>
    )
}