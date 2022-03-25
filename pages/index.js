import { useSession, signIn, signOut } from 'next-auth/react'
import Button from '../components/Button'
import Paragraph from '../components/styledComponents/Paragraph'
import Timeline from '../components/Timeline'
import Welcome from '../components/Welcome'
import Container from '../components/styledComponents/Container'

export default function Home() {
	const { data: session } = useSession()

	if (session) {
		return (
			<Container>
				<h1>Welcome to Wuphf!</h1>
				<Paragraph>
					Signed in as {session.user.email} <br />
					<Button variant='primary' onClick={() => signOut()}>
						Sign out
					</Button>
				</Paragraph>
				<Timeline />
			</Container>
		)
	} else {
		return (
			<>
				<Welcome />
			</>
		)
	}
}
