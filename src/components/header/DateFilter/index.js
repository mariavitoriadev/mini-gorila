import React from 'react'
import Container from '../../common/Container'
import styled from 'styled-components'

import 'tippy.js/dist/tippy.css'; 

const Wrapper = styled.div`
    top: 67px;
    z-index: 1;
    position: sticky;
    display: flex;
    justify-content: flex-end;
    background-color: #fafafa;
`

const Date = styled.div`
    cursor: pointer;
    text-align: right;
    max-width: 265px;
    padding: 10px 10px 10px 50px;
    background-color: rgba(16,192,198,.2);
`

const Title = styled.div`
    color: #636969;
    font-size: 10px;
    font-family: Lato;
    line-height: 1.4;
`

const SubTitle = styled.div`
    color: #2d2d2d;
    font-size: 14px;
    font-family: Lato;
    line-height: 1.4;
`

export default function DateFilter() {
    return (
        <Wrapper>
            <Container>
                <Date>
                    <Title>Período selecionado</Title>
                    <SubTitle> 04/11/2021 a 27/05/2022 </SubTitle>
                </Date>
            </Container>
        </Wrapper>
    )
}