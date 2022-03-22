import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import Label from './Label'

SelectInput.propTypes = {
	register: PropTypes.func.isRequired,
	id: PropTypes.string.isRequired,
	label: PropTypes.string.isRequired,
}

function SelectInput({ register, id, label, children }) {
	return (
		<Wrapper>
			<Label htmlFor={id}>{label}</Label>
			<select {...register(id)}>{children}</select>
		</Wrapper>
	)
}

const Wrapper = styled.div`
	select {
		font-size: inherit;
		appearance: none;
		background-color: #fff;
		border: 1px solid #aaa;
		border-radius: 0.25em;
		padding: 0.5em;
		margin-top: 0.5em;
		cursor: pointer;
		width: 100%;
		outline: none;
	}

	margin-bottom: 1em;
`

export default SelectInput
