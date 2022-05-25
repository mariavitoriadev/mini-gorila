import React from 'react'
import Container from '../common/container'
import ToggleVisibility from './hide'
import Registers from './registers'
import LogoGorila from '../../assets/logo-gorila.svg'
import styled from 'styled-components'


const Header = styled.div`
    background-color: #FFF;
    `

const HeaderWrapper = styled.div`
    padding: 12px 0;
    display: flex; 
    align-items: center;
    justify-content: space-between;
`

const Logo = styled.img`
    width: 100px;
`

export default function AppHeader() {
    return(
        <Header>
            <Container>
                <HeaderWrapper>
                    <Logo src={LogoGorila} alt="Logo Gorila" />
                    <ToggleVisibility></ToggleVisibility>
                    <Registers></Registers>
                </HeaderWrapper>
            </Container>
        </Header>
    )
}