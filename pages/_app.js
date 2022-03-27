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
		darkestBlue:'#202e4a'
	},
button: {
	primary: {
		bg: '#227DE5',
			text: '#fff',
		},
		secondary: {
			bg: '#202e4a',
			text: '#f4f4f3'
		}
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
