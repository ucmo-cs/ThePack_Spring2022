import React from 'react'
import styled from 'styled-components'
import Container from './Container'

function Layout({ children }) {
	return (
		<Wrapper>
			<header className='header'>This is a header</header>
			<Container>{children}</Container>
			<footer className='footer'>This is a footer</footer>
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
