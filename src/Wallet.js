import React from 'react';
import styled from 'styled-components'

import Header from './components/header'
import WalletHeader from './components/wallet/WalletHeader';
import WalletItem from './components/wallet/WalletItem';

const ItemsWrapper = styled.div`
    overflow: auto;
`

export default function Wallet () {
    return (
        <>
            <Header></Header>
            <WalletHeader></WalletHeader>
            <ItemsWrapper>
                <WalletItem status="Abertas" title="Moedas" content="100" type="Criptomoedas" value="R$ 4,94" profit="-R$ 2,95" color="orange"></WalletItem>
                <WalletItem status="Fechadas" minor="Renda" title="Variavel" content="0" type="Ações" value="R$ 0,00" profit="R$ 0,00" color="pink"></WalletItem>
                <WalletItem status="Fechadas" minor="Renda" title="Fixa" content="0" type="LFT" value="R$ 0,00" profit="R$ 0,00" color="purple"></WalletItem>
            </ItemsWrapper>
        </>
    )
}
