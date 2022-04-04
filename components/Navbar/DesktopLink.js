import Link from 'next/link'
import PropTypes from 'prop-types'
import styled from 'styled-components'

DesktopLink.prototype = {
	url: PropTypes.string,
	text: PropTypes.string,
	isShown: PropTypes.bool,
	onClick: PropTypes.func,
}

function capitalize(text) {
	return text.charAt(0).toUpperCase() + text.slice(1)
}

export default function DesktopLink(props) {
	const { url, text, onClick, isShown } = props

	return (
		<StyledLi expanded={isShown}>
			<Link href={url} passHref>
				<StyledA onClick={onClick}>{capitalize(text)}</StyledA>
			</Link>
		</StyledLi>
	)
}

const StyledLi = styled.li`
	text-decoration: none;
	display: flex;

	background-color: inherit;
	padding: 0 0.5rem;
	width: 100%;

	&:hover {
		background-color: #72d0ed;
		color: #202e4a;
		cursor: pointer;
	}
`

const StyledA = styled.a`
	color: #202e4a;
	text-decoration: none;
	display: flex;
	height: 100%;
	width: 100%;
	justify-content: center;
	align-items: center;
`
