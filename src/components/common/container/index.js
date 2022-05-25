import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    margin: 0 24px;
`
export default function AppContainer({children}) {
    return (
        <Container>{children}</Container>
    )
}