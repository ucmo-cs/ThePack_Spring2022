import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import Error from './Error'
import Label from './Label'

TextArea.propTypes = {
	register: PropTypes.func.isRequired,
	id: PropTypes.string.isRequired,
	label: PropTypes.string.isRequired,
}

function TextArea({ register, error, label, id, ...props }) {
	return (
		<Wrapper error={error}>
			<Label htmlFor={id}>{label}</Label>
			<textarea {...register(id)} {...props} />
			<Error>{error?.message}</Error>
		</Wrapper>
	)
}

const Wrapper = styled.div`
	textarea {
		font-size: inherit;
		font-family: inherit;
		resize: none;
		display: block;
		outline: none;
		margin-top: 0.5em;
		padding: 0.5em;
		border-radius: 4px;
		width: 100%;
		border: ${(props) => (props.error ? '1px solid red' : '1px solid #aaa')};
		&:focus {
			outline: none;
		}
		height: 100%;
	}

	margin-bottom: 1em;
`

export default TextArea
