import React from 'react'
import styled from 'styled-components'
import NavigationBar from './NavigationsBar'

function Layout({ children }) {
	return (
		<Wrapper>
			<NavigationBar />
			{children}
		</Wrapper>
	)
}

const Wrapper = styled.div`
	.header {
		background-color: ${({ theme }) => theme.colors.header};
	}

	.footer {
		background-color: ${({ theme }) => theme.colors.footer};
	}
`

export default Layout
