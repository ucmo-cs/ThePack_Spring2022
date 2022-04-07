import { useEffect } from 'react'
import { dummySearchResults } from '../assets/dummySearchResults'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import axios from 'axios'

export function useSearch() {
	const [result, setResult] = useState([])
	const {
		register,
		formState: { errors },
		handleSubmit,
		watch,
		setValue,
	} = useForm()
	const [isHidden, setIsHidden] = useState(true)

	useEffect(async () => {
		const subscription = watch(async (value) => {
			if (value.search === '') {
				setResult([])
				setIsHidden(true)
			} else {
				setIsHidden(false)
				const users = (await axios.get('/api/search', {
					params: {
						userName: value.search,
					}
				})).data.slice(0, 10).map(user => {
					return {
						username: user.userName, 
						avatar: user.avatar
					}
				})

				handleSubmit(setResult(users))
				if(users.length === 0) {
					setIsHidden(true)
				}
			}
		})
		return () => subscription.unsubscribe()
	}, [watch])

	function hide() {
		setIsHidden(true)
	}

	return {
		query: errors.search,
		register,
		result,
		isHidden,
		hide,
	}
}

function mockAPICall() {
	const data = dummySearchResults

	const result = [data[Math.floor(Math.random() * data.length)]]
	for (let i = 0; i < data.length; i++) {
		if (Math.floor(Math.random() * 2) === 0) {
			const entry = data[i]
			if (entry !== result[0]) {
				result.push(entry)
			}
		}
	}

	return result
}
