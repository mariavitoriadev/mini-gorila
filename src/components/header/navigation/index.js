import React, {useState} from 'react'
import DashIcon from '../../../assets/navigation/dashboard.svg'
import ToolIcon from '../../../assets/navigation/advanced-tools.svg'
import ConnectIcon from '../../../assets/navigation/connect-accounts.svg'
import HelpIcon from '../../../assets/navigation/help.svg'
import WalletIcon from '../../../assets/navigation/wallet.svg'
import styled from 'styled-components'

import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'; 

const Wrapper = styled.div`
    display: flex;
    justify-content: flex-end;
    
    @media(max-width: 767px) {
        width: 100%;
        border-top: 2px solid #fafafa;
    }

    @media(min-width: 768px) {
        margin-left: 60px;
    }
`

const NavItem = styled.a`
    width: 50px;
    height: 50px; 
    cursor: pointer;
    display: flex;
    box-sizing: border-box;
    align-items: center;
    justify-content: center;
    border-left: 1px solid #cacbcc;
    border-top: 5px solid transparent;

    ${({ active }) => active && `
        border-top: 5px solid #cacbcc;
        filter: brightness(0) invert(75%) sepia(24%) saturate(7167%) hue-rotate(134deg) brightness(93%) contrast(87%);
    `}

    @media(min-width: 768px) {
        width: 65px;
        height: 65px;
    }
`
const NavIcon = styled.img`
    width: 25px;
    height: 25px;
    
    @media(min-width: 768px) {
        width: 36px;
        height: 36px;
    }
`

const UserItem = styled.a`
    font-size: 20px;
    font-family: Lato;
    width: 50px;
    height: 50px;
    color: #fff;
    cursor: pointer;
    line-height: 55px;
    text-align: center;
    text-transform: uppercase;
    background-image: linear-gradient(225deg, #815ae8, #9278f4);
    
    @media(min-width: 768px) {
        height: 65px;
        width: 65px;
        font-size: 28px;
        line-height: 65px;
    }
`

export default function NavigationMenu() {

    const [navSelected, setNavSelected] = useState("dashboard")
 
    return (
        <Wrapper>
            <Tippy content="Dashboard">
                <NavItem 
                    onClick={() => setNavSelected('dashboard')} 
                    active={navSelected === "dashboard" ? true : false}
                >
                    <NavIcon src={DashIcon}/>
                </NavItem>
            </Tippy>
            <Tippy content="Carteira">
                <NavItem 
                    onClick={() => setNavSelected('wallet')}
                    active={navSelected === "wallet" ? true : false}
                >
                    <NavIcon src={WalletIcon}/>
                </NavItem>
            </Tippy>
            <NavItem 
                onClick={() => setNavSelected('tools')}
                active={navSelected === "tools" ? true : false}
            >
                <NavIcon src={ToolIcon}/>
            </NavItem>
            <Tippy content="Conectar Contas">
                <NavItem 
                    onClick={() => setNavSelected('connection')}
                    active={navSelected === "connection" ? true : false}
                >
                    <NavIcon src={ConnectIcon}/>
                </NavItem>
            </Tippy>
            <Tippy content="Ajuda">
                <NavItem 
                    onClick={() => setNavSelected('help')}
                    active={navSelected === "help" ? true : false}
                >
                    <NavIcon src={HelpIcon}/>
                </NavItem>
            </Tippy>
            <UserItem>
                MI
            </UserItem>
        </Wrapper>
    )
}