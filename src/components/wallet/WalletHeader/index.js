import React from 'react'
import Container from '../../common/container'
import styled from 'styled-components'

import InfoIcon from '../../../assets/information.svg'
import SelectFilter from '../WalletHeader/SelectFilter'
import FilterWrapper from './FilterWrapper'
import PositionsFilter from './Filters/PositionsFilter'
import DueDate from './Filters/DueDate'
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'; 

import { useSelector } from 'react-redux'

const Wrapper = styled.div`
    padding: 24px 0;
    z-index: 1;
    position: relative;
    background-color: #ffffff;
    margin-bottom: 30px;
    box-shadow: 0 4px 10px 0 rgb(0 0 0 / 5%);
`
const FlexRowTop = styled.div`
    display: flex;
    border-bottom: 1px solid #888e8e;
`

const FlexRowBottom = styled.div`
    display: flex;
    padding-top: 9px;
`

const PageTitle = styled.h1`
    margin: 0 5px 0 0;
    color: #2d2d2d;
    font-size: 50px;
    font-weight: 300;
    text-align: left;
`

const Boldify = styled.strong`
    font-weight: 500;
`

const PositionCount = styled.p`
    margin: 3px 0 0;
    color: #888e8e;
    font-size: 16px;
    line-height: 1.5;
`
const FilterItem = styled.div`
    position: relative;
`

export default function WalletHeader() {

    const walletSelected = useSelector(state => state.walletContext.value)

    return(
        <Wrapper>
            <Container>
                <FlexRowTop>
                    <PageTitle>
                        Minha <Boldify>Carteira</Boldify>
                    </PageTitle>
                    <div>
                        <Tippy content="Aqui você verá todos os ativos que constam na sua carteira na data selecionada, incluindo o detalhamento das transações que compõem a posição.">
                            <img src={InfoIcon} alt='Icone de Informação' />
                        </Tippy>
                        <PositionCount>2 ativos cadastrados</PositionCount>
                    </div>
                </FlexRowTop>
                <FlexRowBottom>
                    <FilterItem>
                        <SelectFilter title="Posições" placeholder="Abertas e Fechadas"></SelectFilter>
                        {'Posições' === walletSelected && 
                            (<FilterWrapper>
                                <PositionsFilter></PositionsFilter>
                            </FilterWrapper>)
                        }
                    </FilterItem>
                    <FilterItem>
                        <SelectFilter title="Vencimento" placeholder="Tudo"></SelectFilter>
                        {'Vencimento' === walletSelected &&
                            (<FilterWrapper>
                                <DueDate></DueDate>
                            </FilterWrapper>)
                        }   
                    </FilterItem>
                </FlexRowBottom>
            </Container>
        </Wrapper>
    )
}