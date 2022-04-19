import React, { useEffect } from 'react'

import axios from 'axios'
import styled from 'styled-components'

import { useWuphfUser } from '../../hooks/WuphfUserContext'
import NavigationBar from '../Navbar/NavigationsBar'

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
			{<NavigationBar />}
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

	background-color: ${({ theme }) => theme.colors.white};
`

export default Layout
