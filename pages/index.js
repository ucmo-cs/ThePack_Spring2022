import { useState, useEffect } from 'react'

import axios from 'axios'
import Head from 'next/head'
import styled from 'styled-components'

import withAuth from '../components/layout/withAuth'
import Container from '../components/styledComponents/Container'
import WuphfInput from '../components/timeline/WuphfInput'
import WuphfsFeed from '../components/wuphfs/WuphfsFeed'

function Home({ session }) {
	const [wuphfs, setWuphfs] = useState(null)
	const [loading, setLoading] = useState(true)
	const [cursor, setCursor] = useState(null)
	const [maxResults] = useState(20)
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
			// console.log(newWuphfs)
		}
	}

	function addWuphf(wuphf) {
		setWuphfs([wuphf, ...wuphfs])
	}

	// function deleteWuphf(wuphf) {
	// 	setWuphfs(wuphfs.filter((wuphf) => wuphf.id !== wuphfId))
	// }

	useEffect(() => {
		getWuphfs()
	}, [])

	return (
		<Container>
			<Head>
				<title>Home | Wuphf</title>
			</Head>
			<FlexWrapper>
				<WuphfInput addWuphf={addWuphf} />
				<WuphfsFeed
					wuphfs={wuphfs}
					loading={loading}
					hasMore={hasMore}
					getWuphfs={getWuphfs}
				/>
			</FlexWrapper>
		</Container>
	)
}

const FlexWrapper = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1rem;
`

export default withAuth(Home)
