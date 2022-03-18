import styled from 'styled-components'
import { darken } from 'polished'
import PropTypes from 'prop-types'

SelectInput.propTypes = {
	variant: PropTypes.string.isRequired,
}

function Button({ children, ...props }) {
	return <StyledButton {...props}>{children}</StyledButton>
}

export default Button

const StyledButton = styled.button`
	padding: 0.5em 1em;
	/* background-color: ${(props) => handleBGType(props.variant)}; */
	background-color: ${({ variant, theme }) => handleBGType(variant, theme)};
	color: ${({ variant, theme }) => handleColorType(variant, theme)};
	border: none;
	border-radius: 25px;
	box-shadow: 0px 8px 8px rgba(0, 0, 0, 0.1);
	font-size: inherit;
	cursor: pointer;
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
		default:
			return '#fff'
	}
}

const handleColorType = (variant, theme) => {
	switch (variant) {
		case 'primary':
			return theme?.button.primary.text
		default:
			return 'black'
	}
}
