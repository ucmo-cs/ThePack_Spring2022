import { SessionProvider } from 'next-auth/react'
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import Layout from '../components/Layout'
import reset from 'styled-reset'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false
import { useState, useEffect } from 'react'
import axios from 'axios'

const GlobalStyle = createGlobalStyle`
	${reset}
	* {
		box-sizing: border-box;
	}
	html {
		font-family: "Open Sans", sans-serif;
		font-size: 1rem;
	}
`
const theme = {
	colors: {
		header: 'orange',
		footer: 'cyan',
		white: '#f4f4f3',
		lightBlue: '#72d0ed',
		grey: '#747378',
		darkBlue: '#7395b0',
		darkestBlue: '#202e4a',
	},
	button: {
		primary: {
			bg: '#227DE5',
			text: '#fff',
		},
		secondary: {
			bg: '#202e4a',
			text: '#f4f4f3',
		},
	},
}

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
	const [wuphfUser, setWuphfUser] = useState()
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState()

	async function getUser() {
		const res = await axios.get('/api/me').catch((err) => {
			setError({ data: err.response.data, status: err.response.status })
		})

		if (res) {
			console.log(res.data)
			setWuphfUser(res.data)
			setLoading(false)
		}
	}

	useEffect(() => {
		getUser()
	}, [])

	return (
		<SessionProvider session={session}>
			<GlobalStyle />
			<ThemeProvider theme={theme}>
				{wuphfUser ? (
					<Layout>
						<Component {...pageProps} />
					</Layout>
				) : (
					<Component {...pageProps} />
				)}
			</ThemeProvider>
		</SessionProvider>
	)
}

export default MyApp
