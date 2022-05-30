import React from 'react'
import styled from 'styled-components'

import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'; 

const Wrapper = styled.div`
    position: relative;
    display: block;
    width: 250px;
    height: 256px;
    padding: 10px ;
    text-align: center;
    background: #fff;
    margin-bottom: 20px;
    box-sizing: border-box;
    box-shadow: 0 0 10px 0 rgb(0 0 0 / 15%);
`
const ItemTitle = styled.p`
    color: #10c0c6;
    background-color: #fff;
    border: solid 1px #f1f1f1;
    font-weight: 900;
    font-size: 20px;
    text-align: center;
    padding: 20px;
    margin-bottom: 13px;
`

const ItemType = styled.p`
    color: #636969;
    font-weight: bold;
    font-size: 12px;
    text-align: center;
    margin-bottom: 40px;
`

const ItemButton = styled.button`
    color: #FFF;
    border: none;
    cursor: pointer;
    font-size: 16px;
    font-family: Lato;
    line-height: 1.5;
    font-size: 14px;
    border-radius: 18px;
    padding: 8px 18px;
    background-color: #636969;
    box-shadow: 0 4px 10px 0 rgb(0 0 0 / 20%);
    
    &:hover {
        background-color: #2d2d2d;
    }
`

const ItemLabel = styled.p`
    color: #2d2d2d;
    font-size: 16px;
    font-family: Lato;
    line-height: 1.5;
`

const AccountMaintenence = styled.div`
    position: absolute;
    right: 4px;
    bottom: 4px;
    width: 10px;
    height: 10px;
    background: #f63855;
    border-radius: 50px;
`

const AccountMessage = styled.p`
    width: 100%;
    margin: 0 0 5px;
    color: #888e8e;
    font-size: 10px;
    text-align: left;
    text-transform: uppercase;
    max-width: 145px;
    position: absolute;
    bottom: 0;
`


export default function ConnectItem(props) {

    return(
        <Wrapper>
            <ItemTitle>{props.title}</ItemTitle>
            <ItemType>{props.type}</ItemType>
            {props.active ? 
                <>
                    <ItemButton>Conectar</ItemButton>
                    <AccountMessage>Conecte sua conta para sincronizar os dados.</AccountMessage>
                </>
                :
                <>
                    <ItemLabel>Em manutenção</ItemLabel>
                    <Tippy content="Conexão em manutenção. Por favor, tente mais tarde.">
                        <AccountMaintenence></AccountMaintenence>
                    </Tippy>
                </>
            }
        </Wrapper>
    )
}