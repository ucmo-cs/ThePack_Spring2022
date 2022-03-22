import Link from 'next/link'
import styled, { css } from 'styled-components'
import { useState } from 'react'

// const styledLink = styled.a`

// `

const StyledUl = styled.ul`
    display: flex;
    width: 100%;
    justify-content: end;
    list-style: none;
    background-color: #f4f4f3;
    transition: 0.7s ease-in-out;
    padding: 0;
    margin: 0;
    @media (max-width: 768px) {
        overflow: hidden;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        height: ${props => props.expanded ? '90px' : '0px'};
    }
`

const StyledLi = styled.li`
    text-decoration: none;
    padding: 4px;
    &:hover {
        background-color: #72d0ed;
        color: #202e4a;
    }

    @media (max-width: 768px) {
        transition: 0.7s ease-in-out;
        height: ${props => props.expanded ? '30px' : '0px'};
        width: 100%;
        text-align: center;   
    }
`
const Hamburger = styled.div`
    display: none;
    @media (max-width: 768px) {
        display: block;
        background-color: #E5E5E5;
        border-radius: 5px;
        flex-direction: column;
        transition: 0.7s ease-in-out;
        width: 30px;
        height: 30px;
        position: relative;
        cursor: pointer;
        &:hover {
            // background-color: #72d0ed;
            color: #202e4a;
            justify-content: center;
        }
    }
`

const HamburgerLine = styled.div`
    @media (max-width: 768px) {
        background-color: #828282;
        position: absolute;
        width: 70%;
        border-radius: 5px;
        height: 2px;
        transition: 0.7s ease-in-out;
        left: 4.5px;

        :nth-child(1) {
            top: 6px;
            ${props => props.expanded && css`transform: rotate(45deg); top: 14px;`};
        }
        :nth-child(2) {
            top: 14px;
            opacity: ${props => (props.expanded ? '0' : '1')};
        }
        :nth-child(3) {
            top: 22px;
            ${props => props.expanded && css`transform: rotate(-225deg); top: 14px;`};
        }
    } 
`

export default function NavigationBar() {
    const [expanded, setExpanded] = useState(false)

    return (
        <nav>
            <Hamburger expanded={expanded} onClick={() => setExpanded(!expanded)}>
                <HamburgerLine expanded={expanded} />
                <HamburgerLine expanded={expanded} />
                <HamburgerLine expanded={expanded} />
            </Hamburger>
            <StyledUl expanded={expanded}>
                <StyledLi expanded={expanded}>
                    <Link href='/'>
                        <a>Home</a>
                    </Link>
                </StyledLi>
                <StyledLi expanded={expanded}>
                    <Link href='/profile'>
                        <a>Profile</a>
                    </Link>
                </StyledLi>
                <StyledLi expanded={expanded}>
                    <Link href='/settings'>
                        <a>Account Settings</a>
                    </Link>
                </StyledLi>
            </StyledUl>
        </nav>
    )
}