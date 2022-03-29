import styled from 'styled-components'
import { darken } from 'polished'
import PropTypes from 'prop-types'

Button.propTypes = {
	variant: PropTypes.string.isRequired,
}

function Button({ children, ...props }) {
	return <StyledButton {...props}>{children}</StyledButton>
}

export default Button

const StyledButton = styled.button`
	font-size: inherit;
	padding: 0.5rem 1rem;
	background-color: ${({ variant, theme }) => handleBGType(variant, theme)};
	color: ${({ variant, theme }) => handleColorType(variant, theme)};
	border: none;
	border-radius: 25px;
	box-shadow: 0px 8px 8px rgba(0, 0, 0, 0.1);
	cursor: pointer;
	transition: all 0.2s ease 0s;
	&:hover {
		background-color: ${({ variant, theme }) =>
			darken(0.1, handleBGType(variant, theme))};
	}
	&:active {
		background-color: ${({ variant, theme }) =>
			darken(0.2, handleBGType(variant, theme))};
	}
	&:disabled {
		background-color: gray;
	}
`

const handleBGType = (variant, theme) => {
	switch (variant) {
		case 'primary':
			return theme?.button.primary.bg
		case 'secondary':
			return theme?.button.secondary.bg
		default:
			return '#fff'
	}
}

const handleColorType = (variant, theme) => {
	switch (variant) {
		case 'primary':
			return theme?.button.primary.text
		case 'secondary':
			return theme?.button.secondary.text
		default:
			return 'black'
	}
}
