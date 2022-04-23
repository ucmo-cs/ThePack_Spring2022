import React from 'react'

import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import PropTypes from 'prop-types'
import styled, { useTheme } from 'styled-components'

import Error from './Error'
import Label from './Label'

FormSearchInput.propTypes = {
	register: PropTypes.func.isRequired,
	id: PropTypes.string.isRequired,
	label: PropTypes.string.isRequired,
}

function FormSearchInput({ register, error, label, id, isEmpty, ...props }) {
	const theme = useTheme()

	return (
		<Wrapper error={error} isEmpty={isEmpty}>
			<Label htmlFor={id}>{label}</Label>
			<input {...register(id)} {...props} />
			<FontAwesomeIcon
				icon={faMagnifyingGlass}
				color={theme.colors.lightGrey}
			/>
			<Error>{error?.message}</Error>
		</Wrapper>
	)
}

const Wrapper = styled.div`
	display: flex;
	align-items: center;
	background-color: ${({ theme }) => theme.colors.body};
	border-radius: 25px;
	border: ${(props) =>
		props.error
			? '1.5px solid red'
			: `1.5px solid ${props.theme.colors.border}`};
	padding: 0 10px;

	input {
		font-size: inherit;
		color: inherit;
		display: block;
		background-color: ${({ theme }) => theme.colors.body};
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
