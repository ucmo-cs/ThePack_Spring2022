import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import Error from './Error'
import Label from './Label'

FormInput.propTypes = {
	register: PropTypes.func.isRequired,
	id: PropTypes.string.isRequired,
	label: PropTypes.string.isRequired,
}

function FormInput({ register, error, label, id, ...props }) {
	return (
		<Wrapper error={error}>
			<Label htmlFor={id}>{label}</Label>
			<input {...register(id)} {...props} />
			<Error>{error?.message}</Error>
		</Wrapper>
	)
}

const Wrapper = styled.div`
	input {
		font-size: inherit;
		display: block;
		outline: none;
		margin-top: 0.5rem;
		padding: 0.5rem;
		border-radius: 4px;
		width: 100%;
		border: ${(props) => (props.error ? '1px solid red' : '1px solid #aaa')};
		&:focus {
			outline: none;
		}
	}

	margin-bottom: 1rem;
`

export default FormInput
