import React, {useState} from 'react'
import styled from 'styled-components'

import Container from '../../common/container'
import WalletContent from './WalletContent'

import ArrowDown from '../../../assets/arrow-down.svg'
import ArrowUp from '../../../assets/arrow-up.svg'

const Wrapper = styled.div`
    cursor: pointer;
    width: 100%;
    margin-bottom: 20px;
    padding-bottom: 10px;
`

const HeaderItem = styled.p`
    height: 80px;
    display: flex;
`

const LabelWrapper = styled.p`
    position: relative;
    padding-left: 80px;
    width: 200px;
    color: #fff;
    font-size: 28px;
    font-weight: 400;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-transform: uppercase;
    background-color: #2d2d2d;
`

const ValueWrapper = styled.p`
    font-size: 58px;
    line-height: 80px;
    font-weight: 300;
    color: #fff;
    flex-grow: 1;
    text-align: right;
    padding-right: 20px;
    text-transform: uppercase;
    background: rgba(45, 45, 45, 0.25);
    
    ${({ active }) => active && `
        background: linear-gradient(to left, rgb(249, 165, 40) 0%, rgb(249, 165, 40) 100%);
    `}
`
const MinorTitle = styled.span`
    font-size: 0.7em;
`

const Arrow = styled.img`
    width: 20px;
    height: 20px;
    left: 40px;
    position: absolute;
`

export default function WalletItem(props) {

    const [opened, setOpened] = useState(false)

    return(
        <Container>
            <Wrapper>
                <HeaderItem onClick={() => setOpened(!opened)}>
                        <LabelWrapper>
                            { opened ?        
                                (<Arrow src={ArrowUp} alt="Seta para cima"></Arrow>) :
                                (<Arrow src={ArrowDown} alt="Seta para baixo"></Arrow>)
                            }
                            {props.minor && <MinorTitle>{props.minor}</MinorTitle>}
                            {props.title}
                        </LabelWrapper>
                        <ValueWrapper active={props.content > 0} >{props.content}%</ValueWrapper>
                </HeaderItem>
                {opened &&
                    <WalletContent value={props.value} profit={props.profit} content={props.content} type={props.type} color={props.color}></WalletContent>
                }
            </Wrapper>
        </Container>
    )
}