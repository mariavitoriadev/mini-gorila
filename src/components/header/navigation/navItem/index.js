import React, {useState} from 'react'
import styled from 'styled-components'

const ItemWrapper = styled.a`
    width: 50px;
    height: 50px; 
    cursor: pointer;
    display: flex;
    box-sizing: border-box;
    align-items: center;
    justify-content: center;
    border-left: 1px solid #cacbcc;
    border-top: 5px solid transparent;

    ${({ active }) => active && `
        border-top: 5px solid #cacbcc;
        filter: brightness(0) invert(75%) sepia(24%) saturate(7167%) hue-rotate(134deg) brightness(93%) contrast(87%);
    `}

    @media(min-width: 768px) {
        width: 65px;
        height: 65px;
    }
`
const NavIcon = styled.img`
    width: 25px;
    height: 25px;
    
    @media(min-width: 768px) {
        width: 36px;
        height: 36px;
    }
`

export default function NavItem(props) {
    const [navSelected, setNavSelected] = useState("dashboard")

    return(
        <ItemWrapper 
        onClick={() => setNavSelected(props.name)} 
        active={navSelected === props.name ? true : false}
        >
            <NavIcon src={props.icon}/>
        </ItemWrapper>
    )
}