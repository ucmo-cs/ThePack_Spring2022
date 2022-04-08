import { signOut } from 'next-auth/react'
import Button from '../components/Button'
import Paragraph from '../components/styledComponents/Paragraph'
import Timeline from '../components/Timeline'
import Container from '../components/styledComponents/Container'
import withAuth from '../components/withAuth'
import Title from '../components/styledComponents/Title'

function Home({ session }) {
  return (
    <Container>
      <h1>Welcome to Wuphf!</h1>
      <Paragraph>
        Signed in as {session.user.email} <br />
        <Button variant="primary" onClick={() => signOut()}>
          Sign out
        </Button>
      </Paragraph>
      <Timeline />
    </Container>
  )
}

export default withAuth(Home)
