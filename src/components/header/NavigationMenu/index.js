import React from 'react'
import { Link } from 'react-router-dom' 
import styled from 'styled-components'
import DashIcon from '../../../assets/navigation/dashboard.svg'
import ToolIcon from '../../../assets/navigation/advanced-tools.svg'
import ConnectIcon from '../../../assets/navigation/connect-accounts.svg'
import HelpIcon from '../../../assets/navigation/help.svg'
import WalletIcon from '../../../assets/navigation/wallet.svg'
import ToolsDropdown from '../ToolsDropdown'
import NavItem from './NavItem';

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
        margin-left: 30px;
    }

    @media(min-width: 1024px) {
        margin-left: 60px;
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

    return (
        <Wrapper>
            <Tippy content="Dashboard">
                <NavItem disabled={true} name="dashboard" icon={DashIcon}></NavItem>
            </Tippy>

            <Tippy content="Carteira">
                <Link to="/">
                    <NavItem name="wallet" icon={WalletIcon}></NavItem>
                </Link>
            </Tippy>
            
            <NavItem disabled={true} name="tool" icon={ToolIcon}>
                <ToolsDropdown></ToolsDropdown>
            </NavItem>
            
            <Tippy content="Conectar Contas">
                <Link to="/contas">
                    <NavItem name="connect" icon={ConnectIcon}></NavItem>
                </Link>
            </Tippy>
            
            <Tippy content="Ajuda">
                <NavItem disabled={true} name="help" icon={HelpIcon}></NavItem>
            </Tippy>
            
            <UserItem>
                MI
            </UserItem>
        </Wrapper>
    )
}