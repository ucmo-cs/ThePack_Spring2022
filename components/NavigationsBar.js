import Link from 'next/link'
import styled, { css } from 'styled-components'
import { useState, useRef } from 'react'
import FormInput from './forms/FormInput'
import { useForm } from 'react-hook-form'

export default function NavigationBar(props) {
  const [expanded, setExpanded] = useState(false)
  const myRef = useRef(null)
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    watch,
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
        <NavigationFirstHalf>
          <Link href="/" passHref>
            <StyledImg
              src="https://res.cloudinary.com/wuphf/image/upload/v1647982586/animal_svgs/dogThick_rieymv.svg"
              width={40}
              height={40}
            />
          </Link>
          <Search>
            <FormInput
              id="search"
              label=""
              register={register}
              error={errors.search}
            />
          </Search>
          <Hamburger expanded={expanded} onClick={toggleExpanded}>
            <HamburgerLine expanded={expanded} />
            <HamburgerLine expanded={expanded} />
            <HamburgerLine expanded={expanded} />
          </Hamburger>
        </NavigationFirstHalf>
        <StyledUl expanded={expanded}>
          <StyledLi expanded={expanded}>
            <Link href="/" passHref>
              <StyledA>Home</StyledA>
            </Link>
          </StyledLi>
          <StyledLi expanded={expanded}>
            <Link href="/user/johndoe" passHref>
              <StyledA>Profile</StyledA>
            </Link>
          </StyledLi>
          <StyledLi expanded={expanded}>
            <Link href="/settings" passHref>
              <StyledA>Account Settings</StyledA>
            </Link>
          </StyledLi>
        </StyledUl>
      </StyledNav>
    </NavWrapper>
  )
}

const StyledImg = styled.img`
  cursor: pointer;
`

const NavWrapper = styled.div`
  width: 100%;
  background-color: #e5e5e5;
  display: flex;
  justify-content: center;
`

const StyledNav = styled.nav`
  display: flex;
  height: 50px;
  max-width: 700px;
  width: 100%;
  @media (max-width: 768px) {
    top: 0;
    transition: 0.5s ease-in-out;
    height: 100vh;
    position: sticky;
    width: 100%;
    height: ${(props) => (props.expanded ? '100vh' : '50px')};
    z-index: 1;
    display: flex;
    flex-direction: column;
    align-items: end;
    margin: 0;
  }
`

const NavigationFirstHalf = styled.div`
  display: flex;
  width: 100%;
  padding: 0 20px;
  align-items: center;
`

const Search = styled.div`
  width: 100%;
  margin: 0 40px;

  div {
    margin: 0;
  }
`

const StyledUl = styled.ul`
  display: flex;
  width: 100%;
  justify-content: end;
  list-style: none;
  background-color: #e5e5e5;
  transition: 0.7s ease-in-out;
  padding: 0;
  margin: 0;
  @media (max-width: 768px) {
    overflow: hidden;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: ${(props) => (props.expanded ? '100%' : '0px')};
  }
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
    height: ${(props) => (props.expanded ? '33%' : '0px')};
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
    background-color: #e5e5e5;
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
      ${(props) =>
        props.expanded &&
        css`
          transform: rotate(45deg);
          top: 24px;
        `};
    }
    :nth-child(2) {
      top: 24px;
      opacity: ${(props) => (props.expanded ? '0' : '1')};
    }
    :nth-child(3) {
      top: 36px;
      ${(props) =>
        props.expanded &&
        css`
          transform: rotate(-225deg);
          top: 24px;
        `};
    }
  }
`
