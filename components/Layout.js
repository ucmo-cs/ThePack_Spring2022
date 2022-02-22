import React from 'react'
import styled from 'styled-components'

function Layout({ children }) {
  return (
    <Wrapper>
      <header className="header">This is a header</header>
      {children}
      <footer className="footer">This is a footer</footer>
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
