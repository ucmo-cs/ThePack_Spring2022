import withAuth from '../components/layout/withAuth'
import Container from '../components/styledComponents/Container'
import Timeline from '../components/timeline/Timeline'

function Home({ session }) {
	return (
		<Container>
			{/* <h1>Welcome to Wuphf!</h1>
			<Paragraph>
				Signed in as {session.user.email} <br />
			</Paragraph> */}
			<Timeline session={session} />
		</Container>
	)
}

export default withAuth(Home)
