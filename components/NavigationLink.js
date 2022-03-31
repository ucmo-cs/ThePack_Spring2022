import Link from 'next/link'
import PropTypes from 'prop-types'
import styled from 'styled-components'

NavigationLink.prototype = {
    href: PropTypes.string,
    label: PropTypes.string,
    isShown: PropTypes.bool,
    onClick: PropTypes.func
}

export default function NavigationLink(props) {
    const { href, onClick, isShown } = props

    return (
        <StyledLi expanded={isShown}>
            <Link href={href} onClick={onClick} passHref>
                <StyledA>{onClick}</StyledA>
            </Link>
        </StyledLi>
    )
}

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
	color: #202e4a;
	text-decoration: none;
	height: 100%;
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
`