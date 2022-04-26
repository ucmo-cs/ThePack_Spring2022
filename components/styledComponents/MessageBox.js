import styled from 'styled-components'

export const MessageBox = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 150px;

	p {
		/* font-weight: 500; */
		padding: 1rem;
		border-radius: 15px;
		border: ${({ theme }) => `1.5px solid ${theme.colors.border}`};
	}
`
