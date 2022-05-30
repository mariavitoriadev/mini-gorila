import React from 'react'
import Container from '../../common/Container'
import styled from 'styled-components'

import InfoIcon from '../../../assets/information.svg'

import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'; 

const Wrapper = styled.div`
    margin-bottom: 40px;
    padding-top: 40px;
    
    @media(min-width: 768px) {
        margin-bottom: 80px;
    }
`

const Title = styled.h1`
    text-align: center;
    font-weight: 500;
    font-size: 48px;
    color: #2d2d2d;
    margin: 0 0 10px;
`

const Thiner = styled.span`
    font-weight: 300;
`

const SubTitle = styled.p`
    color: #555b5b;
    font-size: 16px;
    text-align: center;
    `

const Info = styled.img`
    width: 15px;
    height: 15px;
    padding-left: 5px;
`

export default function ConnectHeader() {

    return(
        <Wrapper>
            <Container>
                <Title><Thiner>Conectar </Thiner>contas</Title>
                <SubTitle>Conecte o Gorila com sua conta da B3 e corretoras. É fácil, simples e seguro. 
                    <Tippy
                    content="Seus dados serão criptografados antes de serem enviados para o nosso banco de dados."
                    >
                        <Info src={InfoIcon} />
                    </Tippy>
                </SubTitle>
            </Container>
        </Wrapper>
    )
}