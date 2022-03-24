import Link from 'next/link'
import styled, { css } from 'styled-components'
import { useState, useRef } from 'react'
import FormInput from './forms/FormInput'
import { useForm } from 'react-hook-form'

const avatar = <img src='https://res.cloudinary.com/wuphf/image/upload/v1647982586/animal_svgs/dog_nau7in.svg' width={40} height={40} />

export default function NavigationBar() {
    const [expanded, setExpanded] = useState(false)
    const myRef = useRef(null)
    const {
        register,
        handleSubmit,
        formState: {errors, isSubmitting},
        watch
    } = useForm({
        mode: 'onTouched',
    })

    function toggleExpanded(e) {
        if (!expanded) {
            myRef.current.scrollIntoView()
        }
        setExpanded(!expanded)
    }

    return (
        <NavWrapper>
            <StyledNav expanded={expanded} ref={myRef}>
                <TopWrapper>
                    {avatar}
                    <Hamburger expanded={expanded} onClick={toggleExpanded}>
                        <HamburgerLine expanded={expanded} />
                        <HamburgerLine expanded={expanded} />
                        <HamburgerLine expanded={expanded} />
                    </Hamburger>
                </TopWrapper>
                <DesktopLinksListWrapper>
                    <DesktopLogoWrapper>
                        {avatar}
                    </DesktopLogoWrapper>
                    <Search>
                        <FormInput
                            id='search'
                            label=''
                            register={register}
                            error={errors.search}
                        />
                    </Search>
                    <StyledUl expanded={expanded}>
                        <StyledLi expanded={expanded}>
                            <Link href='/' passHref>
                                <StyledA>Home</StyledA>
                            </Link>
                        </StyledLi>
                        <StyledLi expanded={expanded}>
                            <Link href='/profile' passHref>
                                <StyledA>Profile</StyledA>
                            </Link>
                        </StyledLi>
                        <StyledLi expanded={expanded}>
                            <Link href='/settings' passHref>
                                <StyledA>Account Settings</StyledA>
                            </Link>
                        </StyledLi>
                    </StyledUl>
                </DesktopLinksListWrapper>
            </StyledNav>
        </NavWrapper>
    )
}

const NavWrapper = styled.div`
    width: 100%;
    background-color: #E5E5E5;
    display: flex;
    justify-content: center;
`

const StyledNav = styled.nav`
    height: 50px;
    max-width: 700px;
    width: 100%;
    @media (max-width: 768px) {
        top: 0;
        transition: 0.5s ease-in-out;
        height: 100vh;
        position: sticky;
        width: 100%;
        height: ${props => props.expanded ? '100vh' : '50px'};
        z-index: 1;
        display: flex;
        flex-direction: column;
        align-items: end;
        margin: 0;
    }
`

const TopWrapper = styled.div`
    display: none;
    justify-content: space-between;
    flex-direction: column;
    width: 100%;
    margin: 0;
    padding: 0 10px;

    @media (max-width: 768px) {
        display: flex;
        flex-direction: row;
        align-items: center;
    }
`

const Search = styled.div`
    width: 100%;
    margin-left: 40px;

    div {
        margin: 0;
    }

    @media (max-width: 768px) {
        display: none;
        height: 0;
    }
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

const DesktopLogoWrapper = styled.div`
    display: flex;
    align-items: center;
    background-color: #E5E5E5;
    @media (max-width: 768px) {
        display: none;
    }
`

const DesktopLinksListWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 100%;
`

const StyledLi = styled.li`
    text-decoration: none;
    &:hover {
        background-color: #72d0ed;
        color: #202e4a;
    }
    padding: 0 10px;

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

const StyledA = styled.a`
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`
const Hamburger = styled.div`
    display: none;
    @media (max-width: 768px) {
        display: block;
        background-color: #E5E5E5;
        border-radius: 5px;
        flex-direction: column;
        transition: 0.7s ease-in-out;
        width: 50px;
        height: 50px;
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
            top: 12px;
            ${props => props.expanded && css`transform: rotate(45deg); top: 24px;`};
        }
        :nth-child(2) {
            top: 24px;
            opacity: ${props => (props.expanded ? '0' : '1')};
        }
        :nth-child(3) {
            top: 36px;
            ${props => props.expanded && css`transform: rotate(-225deg); top: 24px;`};
        }
    } 
`