import { useState } from 'react'

import { config } from '@fortawesome/fontawesome-svg-core'
import { SessionProvider } from 'next-auth/react'
import { ThemeProvider, createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'

import Layout from '../components/Layout'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false
import { WuphfUserContextProvider } from '../hooks/WuphfUserContext'
import { darkTheme } from '../assets/themes/darkTheme'


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

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
	// TODO: Eventually this data will be fetched from the server
	const [theme, setTheme] = useState(darkTheme)

	return (
		<SessionProvider session={session}>
			<WuphfUserContextProvider>
				<GlobalStyle />
				<ThemeProvider theme={theme}>
					<Layout>
						<Component {...pageProps} setTheme={setTheme} />
					</Layout>
				</ThemeProvider>
			</WuphfUserContextProvider>
		</SessionProvider>
	)
}

export default MyApp
