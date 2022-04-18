import React, { useEffect } from 'react'
import styled from 'styled-components'
import NavigationBar from './NavigationsBar'
import { useWuphfUser } from '../hooks/WuphfUserContext'
import axios from 'axios'

function Layout({ children }) {
	const { setWuphfUserError, wuphfUser, setWuphfUser } = useWuphfUser()

	async function getUser() {
		const res = await axios.get('/api/me').catch((err) => {
			setWuphfUserError({
				data: err.response.data,
				status: err.response.status,
			})
		})

		if (res) {
			console.log(res.data)
			setWuphfUser(res.data)
			setWuphfUserError(false)
		}
	}

	useEffect(() => {
		getUser()
	}, [])

	return (
		<Wrapper>
			{wuphfUser && <NavigationBar />}
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
