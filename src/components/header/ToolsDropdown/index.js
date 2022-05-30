import React from 'react'
import styled from 'styled-components'

import ToolItem from './ToolItem'

import AdvancedProfitabilityIcon from '../../../assets/tools-dropdown/advanced-profitability-white.svg'
import CorporateEventsIcon from '../../../assets/tools-dropdown/corporate-events-white.svg'
import ReportIcon from '../../../assets/tools-dropdown/report-white.svg'
import TransactionsListIcon from '../../../assets/tools-dropdown/transactions-list-white.svg'

const Wrapper = styled.div`
    background-color: #ffffff;
    position: absolute;
    top: 64px;

    box-shadow: 0 0 6px 0 rgb(0 0 0 / 40%);
    display: grid;
    border-radius: 5px;
    grid-column-gap: 14px;
    grid-template-columns: 1fr 1fr;
    margin-top: 4px;
    padding: 25px 15px;
    background-color: rgba(255, 255, 255, 0.95);
`

export default function ToolsDropdown() {
    return(
        <Wrapper>
            <ToolItem title="Rentabilidade Avançada" icon={AdvancedProfitabilityIcon}></ToolItem>
            <ToolItem title="Eventos da Carteira" icon={CorporateEventsIcon}></ToolItem>
            <ToolItem title="Lista de Transações" icon={TransactionsListIcon}></ToolItem>
            <ToolItem title="Relatório por Período" icon={ReportIcon}></ToolItem>
        </Wrapper>
    )
}   