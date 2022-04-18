import { signOut } from 'next-auth/react'
import { useSession } from 'next-auth/react'
import Button from '../components/Button'
import Paragraph from '../components/styledComponents/Paragraph'
import Timeline from '../components/Timeline'
import Container from '../components/styledComponents/Container'
import withAuth from '../components/withAuth'
import { useEffect } from 'react'
import axios from 'axios'
import { useRouter } from 'next/router'
import Welcome from '../components/Welcome'
import Loading from '../components/Loading'

function Home({ session }) {
  return (
    <Container>
      <h1>Welcome to Wuphf!</h1>
      <Paragraph>
        Signed in as {session.user.email} <br />
      </Paragraph>
      <Timeline session={session} />
    </Container>
  )
}

export default withAuth(Home)
