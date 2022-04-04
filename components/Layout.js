import React from 'react'
import { useSession } from 'next-auth/react'
import styled from 'styled-components'
import NavigationBar from './NavigationsBar'

function Layout({ children }) {
	const { status } = useSession()

	return (
		<Wrapper>
			{status === 'authenticated' && <NavigationBar />}
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
