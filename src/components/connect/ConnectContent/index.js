import React from 'react'
import styled from 'styled-components'

import Container from '../../common/Container'
import ConnectItem from './ConnectItem'

const Wrapper = styled.div`
    max-width: 1080px;
    margin: 0 auto;

    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;


    @media(min-width: 768px) {
        justify-content: space-between;
    }
`

export default function ConnectContent() {

    return(
        <Container>
            <Wrapper>
                <ConnectItem active={true} title="Genial" type="Serviço"></ConnectItem>
                <ConnectItem active={false} title="XP" type="Corretora"></ConnectItem>
                <ConnectItem active={true} title="Bitcoin Trade" type="Corretora de criptomoedas"></ConnectItem>
                <ConnectItem active={false} title="Foxbit" type="Corretora de criptomoedas"></ConnectItem>
            </Wrapper>
        </Container>
    )
}