import React from 'react'
import Container from '../common/container'
import logoGorila from '../../logo_gorila.svg';
import styled from 'styled-components'


const Header = styled.div`
    background-color: #FFF;
    padding: 8px 0;
`
const Logo = styled.img`
    width: 136px;
    height: 65px;
`

export default function AppHeader() {
    return(
        <Header>
            <Container>
                <Logo src={logoGorila} alt="Logo Gorila" />
            </Container>
        </Header>
    )
}