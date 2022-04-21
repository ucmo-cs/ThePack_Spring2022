import { useState } from 'react'

import { config } from '@fortawesome/fontawesome-svg-core'
import { SessionProvider } from 'next-auth/react'
import { ThemeProvider, createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'

import { lightTheme } from '../assets/themes/lightTheme'
import Layout from '../components/layout/Layout'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false
import { AvatarContextProvider } from '../hooks/useAvatar'
import { WuphfUserContextProvider } from '../hooks/WuphfUserContext'

const GlobalStyle = createGlobalStyle`
	${reset}
	* {
		box-sizing: border-box;
	}
	html {
		font-family: "Open Sans", sans-serif;
		font-size: 1rem;
		transition: background-color 0.5s ease;
		background-color: ${({ theme }) => theme.colors.body};
		color: ${({ theme }) => theme.colors.text};
	}
`

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
	const [theme, setTheme] = useState(lightTheme)

	return (
		<SessionProvider session={session}>
			<AvatarContextProvider>
				<ThemeProvider theme={theme}>
					<WuphfUserContextProvider setTheme={setTheme}>
						<GlobalStyle />
						<Layout>
							<Component {...pageProps} setTheme={setTheme} />
						</Layout>
					</WuphfUserContextProvider>
				</ThemeProvider>
			</AvatarContextProvider>
		</SessionProvider>
	)
}

export default MyApp
