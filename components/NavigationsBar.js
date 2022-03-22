import Link from 'next/link'
import styled, { css} from 'styled-components'
import { useState, useRef } from 'react'

const StyledNav = styled.nav`
    @media (max-width: 768px) {
        top: 0;
        transition: 0.5s ease-in-out;
        height: 100vh;
        position: sticky;
        background-color: #E5E5E5;
        width: 100%;
        height: ${props => props.expanded ? '100vh' : '30px'};
        z-index: 1;
        display: flex;
        flex-direction: column;
        align-items: end;
        margin: 0;
    }
`

const TopWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin: 0;
`

const StyledUl = styled.ul`
    display: flex;
    width: 100%;
    justify-content: end;
    list-style: none;
    background-color: #E5E5E5;
    transition: 0.7s ease-in-out;
    padding: 0;
    margin: 0;
    @media (max-width: 768px) {
        overflow: hidden;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        height: ${props => props.expanded ? '100%' : '0px'};
    }
`

const StyledLi = styled.li`
    text-decoration: none;
    &:hover {
        background-color: #72d0ed;
        color: #202e4a;
    }

    @media (max-width: 768px) {
        transition: 0.7s ease-in-out;
        height: ${props => props.expanded ? '33%' : '0px'};
        width: 100%;
        text-align: center;   
        display: flex;
        align-items: center;
        justify-content: center;
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
    const myRef = useRef(null)

    function toggleExpanded(e) {
        if(!expanded) {
            myRef.current.scrollIntoView()
        }
        setExpanded(!expanded)
    }

    return (
        <StyledNav expanded={expanded} ref={myRef}>
            <TopWrapper>
                <svg width="30" height="30" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path fill="#828282" d="M9 23h-6v-10l8.991-8.005 9.009 8.005v10h-6v-3c0-1.654-1.355-3.021-3.009-3.021-1.655 0-2.991 1.367-2.991 3.021v3zm2.252-11.015c.094-.002 1.385-.002 1.477 0 1.17.016 1.264-.998 2.259-.998.643 0 .995.524.999.999.005.474-.28.825-.622.995.327.177.619.527.622 1.002.003.475-.347.999-.999.999-.995 0-1.089-1.015-2.259-.998h-1.477c-1.17-.017-1.264.998-2.259.998-.652 0-1.002-.524-.999-.999.003-.475.295-.825.622-1.002-.342-.17-.627-.521-.622-.995.004-.475.356-.999.999-.999.995 0 1.089 1.014 2.259.998zm.748-10.985l12 10.632-1.328 1.493-10.672-9.481-10.672 9.481-1.328-1.481 12-10.644z"/></svg>
                <Hamburger expanded={expanded} onClick={toggleExpanded}>
                    <HamburgerLine expanded={expanded} />
                    <HamburgerLine expanded={expanded} />
                    <HamburgerLine expanded={expanded} />
                </Hamburger>
            </TopWrapper>
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
        </StyledNav>
    )
}