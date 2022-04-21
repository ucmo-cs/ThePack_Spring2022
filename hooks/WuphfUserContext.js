import React, { useState, useEffect, useContext } from 'react'
import axios from 'axios'
const WuphfUserContext = React.createContext()
import { darkTheme } from '../assets/themes/darkTheme'
import { lightTheme } from '../assets/themes/lightTheme'
import { lavaTheme } from '../assets/themes/lavaTheme'

const WuphfUserContextProvider = ({ setTheme, children }) => {
	const [wuphfUser, setWuphfUser] = useState()
	const [wuphfUserLoading, setWuphfUserLoading] = useState(true)
	const [wuphfUserError, setWuphfUserError] = useState()

	async function getUser() {
		const res = await axios.get('/api/me').catch((err) => {
			setWuphfUserError({
				data: err.response.data,
				status: err.response.status,
			})
		})

		if (res) {
			const newWuphfUser = res.data
			setWuphfUser(newWuphfUser)
			setWuphfUserLoading(false)
			setWuphfUserError(undefined)
			setTheme(lookupTheme(newWuphfUser.theme))
			console.log(newWuphfUser)
		}
	}

	useEffect(() => {
		getUser()
	}, [])

	useEffect(() => {
		if (wuphfUser !== undefined) {
			setWuphfUserError(undefined)
		}
	}, [wuphfUser])

	return (
		<WuphfUserContext.Provider
			value={{
				wuphfUser,
				setWuphfUser,
				wuphfUserLoading,
				setWuphfUserLoading,
				wuphfUserError,
				setWuphfUserError,
			}}
		>
			{children}
		</WuphfUserContext.Provider>
	)
}

const useWuphfUser = () => {
	const wuphfUserData = useContext(WuphfUserContext)

	return wuphfUserData
}

function lookupTheme(theme) {
	if (theme === 'light') {
		return lightTheme
	} else if (theme === 'lava') {
		return lavaTheme
	} else if (theme === 'dark') {
		return darkTheme
	}
}

export { WuphfUserContextProvider, useWuphfUser }
