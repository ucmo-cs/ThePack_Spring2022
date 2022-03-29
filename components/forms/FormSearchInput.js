import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import Error from './Error'
import Label from './Label'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

FormSearchInput.propTypes = {
	register: PropTypes.func.isRequired,
	id: PropTypes.string.isRequired,
	label: PropTypes.string.isRequired,
}

function FormSearchInput({ register, error, label, id, ...props }) {
	return (
		<Wrapper error={error}>
			<Label htmlFor={id}>{label}</Label>
			<input {...register(id)} {...props} />
			<FontAwesomeIcon icon={faMagnifyingGlass} color='#747378' />
			<Error>{error?.message}</Error>
		</Wrapper>
	)
}

const Wrapper = styled.div`
	display: flex;
	align-items: center;
	background-color: white;
	border-radius: 4px 4px 0 0;
	border: ${(props) => (props.error ? '1px solid red' : '1px solid #aaa')};
	padding: 0 10px;

	input {
		font-size: inherit;
		display: block;
		outline: none;
		margin-top: 0.5rem;
		padding: 0.5rem;
		border: none;
		width: 100%;
		&:focus {
			outline: none;
		}
	}

	icon {
		&:hover {
			color: red;
		}
	}

	margin-bottom: 1rem;
`

export default FormSearchInput
