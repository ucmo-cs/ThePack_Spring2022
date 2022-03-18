import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

FormInput.propTypes = {
	register: PropTypes.func.isRequired,
	id: PropTypes.string.isRequired,
	label: PropTypes.string.isRequired,
}

function FormInput({ register, error, label, id, ...props }) {
	return (
		<Wrapper error={error}>
			<label htmlFor={id}>{label}</label>
			<input {...register(id)} {...props} />
			<p className='error'>{error?.message}</p>
		</Wrapper>
	)
}

const Wrapper = styled.div`
	label {
		margin-bottom: 0.5em;
	}

	input {
		font-size: inherit;
		display: block;
		outline: none;
		margin: 0.5em 0;
		padding: 0.5em;
		border-radius: 4px;
		width: 100%;
		border: ${(props) => (props.error ? '1px solid red' : '1px solid #aaa')};
		&:focus {
			outline: none;
		}
	}

	.error {
		margin: 0.5em 0;
		color: red;
	}

	margin-bottom: 1em;
`

export default FormInput
