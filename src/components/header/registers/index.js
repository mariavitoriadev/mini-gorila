import React from 'react'
import styled, {css} from 'styled-components'
import AddIcon from '../../../assets/add-white.svg'
import LessIcon from '../../../assets/less-white.svg'

import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'; 

const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
`

const Button = styled.a`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 35px;
    height: 35px;
    margin-left: 20px;
    border-radius: 50%;
    cursor: pointer;
    background-color: #888e8e;
    box-shadow: 0 4px 10px 0 rgb(0 0 0 / 20%);
    transition: background-color 0.25s ease-in-out;
`

const Icon = styled.img`
    width: 20px;
    height: 20px;
`

export default function Registers () {
    
    return (
        <Wrapper>
             <Tippy content="Registrar compra">
                <Button>
                    <Icon src={AddIcon} alt="Add Icon" />
                </Button>
            </Tippy>
            <Tippy content="Registrar venda">
                <Button>
                    <Icon src={LessIcon} alt="Less Icon" />
                </Button>
            </Tippy>
        </Wrapper>        
    )
}
