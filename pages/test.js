import React, { useState } from 'react'

import axios from 'axios'
import { useSession } from 'next-auth/react'

export default function Test() {
	const [data, setData] = useState()

	const { data: session } = useSession()

	const getUser = async () => {
		const { data } = await axios.get('api/users')
		setData(data)
	}

	const createUser = async () => {
		const { data } = await axios.post('api/users', {
			email: session.user.email,
			userName: 'charlie',
			bio: 'this is a bio',
		})
		setData(data)
	}

	return (
		<div>
			{data && JSON.stringify(data, null, 2)}
			<button onClick={createUser}>Create WuphfUser</button>
			<button onClick={getUser}>Get WuphfUser Data</button>
		</div>
	)
}
