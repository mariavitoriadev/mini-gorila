import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
    max-width: 100px;
    text-align: center;
    cursor: pointer;
    margin-bottom: 15px;
`

const ItemTitle = styled.p`
    margin-top: 6px;
    color: #555b5b;
    font-size: 12px;
    text-align: center;
`

const ItemIconWrapper = styled.div`
    width: 46px;
    height: 46px;
    display: flex;
    justify-content: center;
    padding-top: 7px;
    border-radius: 50%;
    box-sizing: border-box;
    background-color: #888e8e;
    margin: 0 auto;

    &:hover {
        background-color: #11c0c6;
    }
`

const ItemIcon = styled.img`
    height: 32px;
    width: 32px;
    filter: brightness(0) saturate(100%) invert(89%) sepia(69%) saturate(2%) hue-rotate(110deg) brightness(116%) contrast(100%);
`

export default function ToolsDropdown(props) {
    return(
        <Wrapper>
            <ItemIconWrapper>
                <ItemIcon src={props.icon}></ItemIcon>
            </ItemIconWrapper>
            <ItemTitle>{props.title}</ItemTitle>
        </Wrapper>
    )
}