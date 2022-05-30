import React from 'react'
import styled from 'styled-components'

import ArrowDown from '../../../../assets/arrow-down.svg'
import ArrowUp from '../../../../assets/arrow-up.svg'

import { useSelector, useDispatch } from 'react-redux'
import { setWallet } from '../../../../store/filterWalletContext'

const Wrapper = styled.div`
    cursor: pointer;
    padding-right: 20px;
`

const FilterTitle = styled.p`
    font-size: 10px;
    line-height: 1.4;
    color: #888e8e;
    text-transform: uppercase;
`

const FilterPlaceholder = styled.span`
    font-size: 14px;
    color: #888e8e;
    margin-right: 5px;
`

const ArrowWrapper = styled.div`
    display: flex;
    align-items: flex-end;
`

const Arrow = styled.img`
    width: 14px;
    height: 14px;
`

export default function SelectFilter(props) {

    const filterWalletSelected = useSelector(state => state.filterWalletContext.value)
    const dispatch = useDispatch()

    function handleClick() {
        if (props.title === filterWalletSelected) {
            dispatch(setWallet(null))
        }
        else {
            dispatch(setWallet(props.title))
        }

    }

    return(
        <Wrapper onClick={() => handleClick()}>
            <FilterTitle>{props.title}</FilterTitle>
            <ArrowWrapper>
                <FilterPlaceholder>{props.placeholder}</FilterPlaceholder>
                {props.title === filterWalletSelected? 
                (<Arrow src={ArrowUp} alt="Seta para cima"></Arrow>) :
                (<Arrow src={ArrowDown} alt="Seta para baixo"></Arrow>)
                }    
            </ArrowWrapper>
        </Wrapper>
    )
}