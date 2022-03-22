import '../styles/globals.css'
import { SessionProvider } from 'next-auth/react'
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import Layout from '../components/Layout'
import reset from 'styled-reset'
import breakpoint from '../styles/breakpoint'

const GlobalStyle = createGlobalStyle`
	${reset}
	* {
		box-sizing: border-box;
	}
	html {
		font-family: "Open Sans", sans-serif;
		font-size: 16px;
	}
`
const theme = {
	colors: {
		header: 'orange',
		footer: 'cyan',
	},
	button: {
		primary: {
			bg: '#227DE5',
			text: '#fff',
		},
	},
}

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
	return (
		<SessionProvider session={session}>
			<GlobalStyle />
			<ThemeProvider theme={theme}>
				<Layout>
					<Component {...pageProps} />
				</Layout>
			</ThemeProvider>
		</SessionProvider>
	)
}

export default MyApp
