import { useSession, signIn, signOut } from 'next-auth/react'
import Button from '../components/Button'
import Paragraph from '../components/styledComponents/Paragraph'
import Timeline from '../components/Timeline'
import Welcome from '../components/Welcome'

export default function Home() {
  const { data: session } = useSession()

  if (session) {
    return (
      <>
        <h1>Welcome to Wuphf!</h1>
        <Paragraph>
          Signed in as {session.user.email} <br />
          <Button variant="primary" onClick={() => signOut()}>
            Sign out
          </Button>
        </Paragraph>
        <Timeline />
      </>
    )
  } else {
    return (
      <>
        <Welcome />
      </>
    )
  }
}
