import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import Loading from './Loading'
import Welcome from './Welcome'
import axios from 'axios'
import { useState } from 'react'
import RegistrationForm from './RegistrationForm'

function withAuth(Component) {
	function Auth(props) {
		const { data: session, status } = useSession()
		const [wuphfUserStatus, setWuphfUserStatus] = useState('loading')
		const [wuphfUser, setWuphfUser] = useState(null)

		async function getUser() {
			try {
				const user = (await axios.get('/api/me')).data
				setWuphfUserStatus('authenticated')
				setWuphfUser(user)
			} catch {
				setWuphfUserStatus('not found')
			}
		}
		getUser()

		/*
		status (S) = "loading" (A) | "authenticated" (B) | "unauthenticated" (C)
		wuphfStatus (W) = "loading" (A) | "authenticated" (B) | "not found" (C)

		S | W
		A   A - <Loading />
		A   B - <Loading />
		A   C - <Loading />
		B   A - <Loading />
		B   B - <Component />
		B   C - <Registration />
		C   A - <Loading />
		C   B - Impossible?
		C   C - <Welcome />
		*/
		if (status === 'loading' || wuphfUserStatus === 'loading') {
			return <Loading />
		} else if (status === 'authenticated' && wuphfUserStatus === 'authenticated') {
			return <Component {...props} session={session} status={status} wuphfUser={wuphfUser} />
		} else if(status === 'authenticated' && wuphfUserStatus === 'not found') {
			return <RegistrationForm />
		} else if(status === 'unauthenticated' && wuphfUserStatus === 'not found') {
			return <Welcome />
		}
	}

	if (Component.getInitialProps) {
		Auth.getInitialProps = Component.getInitialProps
	}

	return Auth
}

export default withAuth
