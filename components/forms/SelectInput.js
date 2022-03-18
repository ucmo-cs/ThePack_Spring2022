import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

SelectInput.propTypes = {
	register: PropTypes.func.isRequired,
	id: PropTypes.string.isRequired,
	label: PropTypes.string.isRequired,
}

function SelectInput({ register, id, label, children }) {
	return (
		<Wrapper>
			<label htmlFor={id}>{label}</label>
			<select {...register(id)}>{children}</select>
		</Wrapper>
	)
}

const Wrapper = styled.div`
	label {
		margin-bottom: 0.5em;
	}

	select {
		font-size: inherit;
		appearance: none;
		background-color: #fff;
		border: 1px solid #aaa;
		border-radius: 0.25em;
		padding: 0.5em;
		margin: 0.5em 0;
		margin-bottom: 1em;
		cursor: pointer;
		line-height: 1.1;
		width: 100%;
		outline: none;
	}
`

export default SelectInput
