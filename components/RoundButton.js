import styled from 'styled-components'
import PropTypes from 'prop-types'
import Button from './Button'

Button.propTypes = {
	variant: PropTypes.string.isRequired,
}

function RoundButton({ children, ...props }) {
	return <StyledRoundButton {...props}>{children}</StyledRoundButton>
}

export default RoundButton

const StyledRoundButton = styled(Button)`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 2.25rem;
	width: 2.25rem;
	border-radius: 100%;
`
