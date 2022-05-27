import React from 'react'
import Container from '../common/container'
import ToggleVisibility from './hide'
import Registers from './registers'
import NavigationMenu from './navigation'
import LogoGorila from '../../assets/logo-gorila.svg'
import styled from 'styled-components'


const Header = styled.div`
    background-color: #FFF;
`

const HeaderWrapper = styled.div`
    display: flex; 
    align-items: center;
    justify-content: space-between;
    
    @media(max-width: 767px) {
        flex-wrap: wrap;
    }
    
    @media(min-width: 768px) {
        padding: 2px 0;
    }
`

const Logo = styled.img`
    width: 136px;
`

export default function AppHeader() {
    return(
        <Header>
            <Container>
                <HeaderWrapper>
                    <Logo src={LogoGorila} alt="Logo Gorila" />
                    <ToggleVisibility></ToggleVisibility>
                    <Registers></Registers>
                    <NavigationMenu></NavigationMenu>
                </HeaderWrapper>
            </Container>
        </Header>
    )
}