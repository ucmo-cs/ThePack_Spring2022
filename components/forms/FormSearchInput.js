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

function FormSearchInput({ register, error, label, id, isEmpty, ...props }) {
	return (
		<Wrapper error={error} isEmpty={isEmpty}>
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
	border-radius: 25px;
	border: ${(props) => (props.error ? '1px solid red' : '1px solid #aaa')};
	padding: 0 10px;

	input {
		font-size: inherit;
		display: block;
		background-color: white;
		outline: none;
		padding: 0.5rem;
		border: none;
		width: 100%;
		border-radius: 25px;
		&:focus {
			outline: none;
		}
	}

	icon {
		&:hover {
			color: red;
		}
	}

	/* margin-bottom: 1rem; */
`

export default FormSearchInput
