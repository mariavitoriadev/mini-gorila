import React from 'react'
import styled from 'styled-components'


const Wrapper = styled.div`
    width: 100%;
    background-color: #fff;
    `

const ContentHeader = styled.p`
    padding-right: 30px;
    padding-top: 20px;
    display: grid;
    grid-column-gap: 10px;
    grid-template-columns: 1fr 120px;
    
    @media(min-width: 768px) {
        padding-right: 122px;
    }
`

const ContentHeaderItem = styled.p`
    align-self: end;
    justify-self: end;
    margin-bottom: 7px;
    color: #888e8e;
    font-size: 10px;
    max-width: 85px;
    text-align: right;
    word-break: break;
    text-transform: uppercase;
`

const ProductItem = styled.div`
    display: flex;
    padding-bottom: 5px;
`

const ProductLabel = styled.div`
    padding: 2px 30px;
    display: flex;
    align-items: center;
    box-sizing: border-box;
    

    ${({ color }) => {
        if (color === 'orange')  {
            return `
            background: rgba(249, 165, 40, 0.2);
            border-left: 7px solid rgb(249, 165, 40);
            `
        }
        else if (color === 'pink') {
            return `
            background: rgba(237, 69, 129, 0.2);
            border-left: 7px solid rgb(237, 69, 129);
            `
        }
        else if (color === 'purple') {
            return `
            background: rgba(129, 90, 232, 0.2) ;
            border-left: 7px solid rgb(129, 90, 232);
            `
        }
    }}

    @media(min-width: 768px) {
        width: 390px;
    }
`

const ProductPercent = styled.p`
    color: #2d2d2d;
    font-size: 14px;
    font-weight: 300;
    margin-right: 15px;

    @media(min-width: 768px) {
        font-size: 36px;
    }
`

const ProductType = styled.p`
    color: #2d2d2d;
    font-weight: 500;
    font-size: 14px;
    line-height: 1.9;
    text-transform: uppercase;

    @media(min-width: 768px) {
        font-size: 20px;
    }
`

const ProductContent = styled.div`
    flex-grow: 1;
    display: grid;
    padding-right: 30px;
    grid-column-gap: 10px;
    grid-template-columns: 1fr 120px;
    background-color: #f0f0f0;

    @media(min-width: 768px) {
        padding-right: 122px;
    }
`

const ProductContentItem = styled.p`
    align-self: center;
    justify-self: end;
    color: #2d2d2d;
    font-size: 14px;
    line-height: 1.14;
    text-align: right;
`

export default function WalletContent(props) {
    return(
        <Wrapper>
            <ContentHeader>
                <ContentHeaderItem>Valor Atualizado</ContentHeaderItem>
                <ContentHeaderItem>Rentabilidade do período</ContentHeaderItem>
            </ContentHeader>
            <ProductItem>
                <ProductLabel color={props.color}>
                    <ProductPercent>{props.content}%</ProductPercent>
                    <ProductType>{props.type}</ProductType>
                </ProductLabel>
                <ProductContent>
                    <ProductContentItem>{props.value}</ProductContentItem>
                    <ProductContentItem>{props.profit}</ProductContentItem>
                </ProductContent>
            </ProductItem>
        </Wrapper>
    )
}
