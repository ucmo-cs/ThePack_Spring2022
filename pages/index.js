import Paragraph from '../components/styledComponents/Paragraph'
import Timeline from '../components/Timeline'
import Container from '../components/styledComponents/Container'
import withAuth from '../components/withAuth'

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
