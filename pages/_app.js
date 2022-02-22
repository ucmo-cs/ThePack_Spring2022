import '../styles/globals.css'
import { SessionProvider } from 'next-auth/react'
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import Layout from '../components/Layout'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`

const theme = {
  colors: {
    header: 'orange',
    footer: 'cyan',
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
