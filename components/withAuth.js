import { useSession } from 'next-auth/react'
import { useState, useEffect } from 'react'
import Loading from './Loading'
import Welcome from './Welcome'
import RegistrationForm from './RegistrationForm'
import Error from './Error'
import axios from 'axios'
import { useWuphfUser } from '../hooks/WuphfUserContext'

function withAuth(Component) {
	function Auth(props) {
		const { data: session, status } = useSession()
		const { wuphfUser } = useWuphfUser()
		const { wuphfUserError } = useWuphfUser()

		if (status == 'loading') return <Loading />
		switch (wuphfUserError?.status) {
			case 401: // Google user not authenticated
				return <Welcome />
			case 404: // No WuphfUser with the Google user's email
				return <RegistrationForm />
		}

		if (session) {
			return (
				<Component
					{...props}
					session={session}
					wuphfUser={wuphfUser}
					status={status}
				/>
			)
		}

		return <Welcome />
	}

	if (Component.getInitialProps) {
		Auth.getInitialProps = Component.getInitialProps
	}

	return Auth
}

export default withAuth

// import { useSession } from 'next-auth/react'
// import { useRouter } from 'next/router'
// import Loading from './Loading'
// import Welcome from './Welcome'
// import axios from 'axios'
// import { useState } from 'react'
// import RegistrationForm from './RegistrationForm'

// function withAuth(Component) {
// 	function Auth(props) {
// 		const { data: session, status } = useSession()
// 		// const [wuphfUserStatus, setWuphfUserStatus] = useState('loading')
// 		const [wuphfUser, setWuphfUser] = useState(null)
// 		const [wuphfUserError, setWuphfUserError] = useState()
// 		const [wuphfUserLoading, setWuphfUserLoading] = useState(true)

// 		async function getUser() {
// 			try {
// 				const user = (await axios.get('/api/me')).data
// 				setWuphfUser(user)
// 				setWuphfUserLoading(false)
// 			} catch {
// 				setError({ data: err.response.data, status: err.response.status })
// 			}
// 		}
// 		// getUser()
// 		return <Component />

// 		if (status === 'loading' || wuphfUserLoading) {
// 			return <Loading />
// 		}

// 		if (status === 'unauthenticated') {
// 			return <Welcome />
// 		}

// 		if (wuphfUserError) return <Error error={error} />

// 		if (Component.getInitialProps) {
// 			Auth.getInitialProps = Component.getInitialProps
// 		}

// 		return Auth
// 	}
// }

// export default withAuth
