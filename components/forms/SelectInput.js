import React from 'react'

import styled from 'styled-components'

import Label from './Label'

// error
// SelectInput.propTypes = {
// 	register: PropTypes.func.isRequired,
// 	id: PropTypes.string.isRequired,
// 	label: PropTypes.string.isRequired,
// }

const SelectInput = React.forwardRef(
	(
		{ register, id, label, children, onChange, onBlur, name, enabled = true },
		ref
	) => (
		<Wrapper>
			<Label htmlFor={id}>{label}</Label>
			<select onChange={onChange} {...register(id)} disabled={!enabled}>
				{children}
			</select>
		</Wrapper>
	)
)
SelectInput.displayName = 'SelectInput'

export const Wrapper = styled.div`
	select {
		font-size: inherit;
		appearance: none;
		color: inherit;
		background-color: inherit;
		border: ${({ theme }) => `1px solid ${theme.colors.border}`};
		border-radius: 0.25rem;
		padding: 0.5rem;
		margin-top: 0.5rem;
		cursor: pointer;
		width: 100%;
		outline: none;
	}

	margin-bottom: 1rem;
`

export default SelectInput
