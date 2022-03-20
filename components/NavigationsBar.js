import Link from 'next/link'
import styled from 'styled-components'

// const styledLink = styled.a`

// `

const StyledUl = styled.ul`
    display: flex;
    width: 100%;
    justify-content: end;
    list-style: none;
    background-color: #f4f4f3;
    @media (max-width: 768px) {
        display: none;
    }
`

const StyledLi = styled.li`
    text-decoration: none;
    padding: 0.5rem 1rem;
    &:hover {
        background-color: #72d0ed;
        color: #202e4a;
    }
`
const Hamburger = styled.div`
    display: none;
    @media (max-width: 768px) {
        display: flex;
        background-color: #E5E5E5;
        border-radius: 5px;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
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
        width: 70%;
        border-radius: 5px;
        height: 2px;
        transition: 0.7s ease-in-out;
        top: ${props => (props.top ? '0' : 'auto')};
        bottom: ${props => (props.bottom ? '0' : 'auto')};
        transform: translateX(-5vw);

        :nth-child(1) {
            transform: ${props => (props.top ? 'rotate(45deg)' : 'rotate(-45deg)')};
        }
        :nth-child(2) {
            opacity: ${props => (props.top ? '0' : '1')};
        }
        :nth-child(3) {
            transform: ${props => (props.top ? 'rotate(-45deg)' : 'rotate(45deg)')};
        }
    } 
`

export default function NavigationBar() {
    return (
        <nav>
            <Hamburger>
                <HamburgerLine />
                <HamburgerLine />
                <HamburgerLine />
            </Hamburger>
            <StyledUl>
                <StyledLi>
                    <Link href='/'>
                        <a>Home</a>
                    </Link>
                </StyledLi>
                <StyledLi>
                    <Link href='/profile'>
                        <a>Profile</a>
                    </Link>
                </StyledLi>
                <StyledLi>
                    <Link href='/settings'>
                        <a>Account Settings</a>
                    </Link>
                </StyledLi>
            </StyledUl>
        </nav>
    )
}