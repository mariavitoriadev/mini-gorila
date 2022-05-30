import React, {useState} from 'react'
import HideIcon from '../../../assets/visibility-hide.svg'
import ShowIcon from '../../../assets/visibility-show.svg'
import styled from 'styled-components'

import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'; 

import { useDispatch } from 'react-redux'
import { setHide } from '../../../store/hideContext'

const Wrapper = styled.div`
    flex-grow: 1;
    cursor: pointer;
    margin-left: 20px;

    @media(min-width: 1024px) {
        margin-left: 40px;
    }
`

export default function ToggleVisibility() {
    const [visible, setVisible] = useState(true)
    const dispatch = useDispatch()

    const toggle = () => {
        setVisible(!visible)
        dispatch(setHide())
    }

    return (
        <Wrapper onClick={toggle} >
            <Tippy
            content={visible ? "Esconder Valores" : "Mostrar Valores"}
            >
            {visible ? 
                <img src={ShowIcon} alt="Visility Enabled"/> :
                <img src={HideIcon} alt="Visility Disabled"/> 
            }
            </Tippy>
        </Wrapper>
    )
}