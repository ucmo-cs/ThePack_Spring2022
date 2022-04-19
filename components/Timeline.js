import Wuphfs from '../components/Wuphfs'
import WuphfInput from '../components/WuphfInput'
import Link from 'next/link'
import Paragraph from './styledComponents/Paragraph'
import { useState, useEffect, useRef, useCallback } from 'react'
import Error from './Error'
import axios from 'axios'
import styled from 'styled-components'

function Timeline() {
	const [wuphfs, setWuphfs] = useState(null)
	const [cursor, setCursor] = useState(null)
	const [maxResults] = useState(2)
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState(false)
	const [hasMore, setHasMore] = useState(true)

	const getWuphfs = async () => {
		setLoading(true)
		const res = await axios
			.get(`../api/timeline?&maxResults=${maxResults}&cursor=${cursor}`)
			.catch((err) => {
				setError({ data: err.response.data, status: err.response.status })
				setLoading(false)
			})

		if (res) {
			if (cursor == res.data.cursor) {
				setHasMore(false)
			}
			setCursor(res.data.cursor)
			// console.log('res?.data.cursor', res.data.cursor)
			const newWuphfs =
				wuphfs !== null ? [...wuphfs, ...res.data.timeline] : res.data.timeline
			setWuphfs(newWuphfs)
			setLoading(false)
		}
	}

	const observer = useRef()
	const lastWuphfElementRef = useCallback(
		(node) => {
			// console.log('!!!!!1')
			if (loading) return
			if (observer.current) observer.current.disconnect()
			observer.current = new IntersectionObserver((entries) => {
				// console.log('hakljsdfk')
				if (entries[0].isIntersecting) {
					// console.log('visible', entries[0])
					// console.log(
					// 	`../api/timeline?&maxResults=${maxResults}&cursor=${cursor}`
					// )
					if (hasMore) getWuphfs()
				}
			})
			if (node) observer.current.observe(node)
			// console.log('node', node)
		},
		[loading]
	)

	useEffect(() => {
		getWuphfs()
	}, [])

	function handleClick() {
		getWuphfs()
	}

	// if (loading) return <Loading />
	if (error) return <Error error={error} />

	return (
		<Wrapper>
			<Paragraph>
				<Link href='/register'>CLICK: Username/Animal Selection Page</Link>
			</Paragraph>

			<InputAndWuphfs>
				<WuphfInput />
				{/* {JSON.stringify(wuphfs, null, 2)} */}
				<Wuphfs wuphfs={wuphfs} lastWuphfElementRef={lastWuphfElementRef} />
				{/* <Button variant='primary' onClick={handleClick}>
					Load more
				</Button> */}
			</InputAndWuphfs>
		</Wrapper>
	)
}

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1rem;
`

const InputAndWuphfs = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1rem;
`

export default Timeline
