import React, {useState} from 'react'
import HideIcon from '../../../assets/visibility-hide.svg'
import ShowIcon from '../../../assets/visibility-show.svg'
import styled from 'styled-components'

import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'; 

export default function ToggleVisibility() {
    const [visible, setVisible] = useState(true)

    const toggle = () => {
        setVisible(!visible)
    }

    const Wrapper = styled.div`
        cursor: pointer;
        margin-left: 20px;
    `

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