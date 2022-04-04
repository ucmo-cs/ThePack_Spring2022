import { useSession } from 'next-auth/react'
import Loading from './Loading'
import Welcome from './Welcome'

function withAuth(Component) {
	function Auth(props) {
		const { data: session, status } = useSession()

		if (status == 'loading') return <Loading />

		if (session) {
			return <Component {...props} session={session} status={status} />
		}

		return <Welcome />
	}

	if (Component.getInitialProps) {
		Auth.getInitialProps = Component.getInitialProps
	}

	return Auth
}

export default withAuth
