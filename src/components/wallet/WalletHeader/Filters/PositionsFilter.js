import React, {useState} from 'react'
import styled from 'styled-components'

import { useDispatch } from 'react-redux'
import { setWallet } from '../../../../store/filterWalletContext'
import { setFilterPosition } from '../../../../store/filterPositionsContext'

import { useSelector } from 'react-redux'

const Wrapper = styled.div`
    position: relative;
    padding: 5px 0;
    background-color: #fff;
`

const FilterItem = styled.p`
    margin: 5px 0 5px 10px;
    font-size: 13px;
    background: white;
    cursor: pointer;
    padding: 5px 0 5px 10px;
    border-left: 3px solid transparent;
    
    &:hover {
        border-left: 3px solid #10c0c6;
    }

    ${({ active }) => active && `
        border-left: 3px solid #10c0c6;   
    `
    }
` 

export default function SelectFilter() {

    const dispatch = useDispatch()
    const filterPositionsSelected = useSelector(state => state.filterPositionsContext.value)

    function handleClick(position) {
        dispatch(setFilterPosition(position))
        dispatch(setWallet(null))
    }

    return(
        <Wrapper>
            <FilterItem onClick={() =>  handleClick('Abertas')} active={filterPositionsSelected === 'Abertas'}>Abertas</FilterItem>
            <FilterItem onClick={() =>  handleClick('Abertas e Fechadas')} active={filterPositionsSelected === 'Abertas e Fechadas'}>Abertas e Fechadas</FilterItem>
        </Wrapper>
    )
}