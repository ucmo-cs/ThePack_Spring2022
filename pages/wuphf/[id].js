import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Container from '../../components/styledComponents/Container'
import Wuphf from '../../components/wuphfs/Wuphf'
import Comment from '../../components/comments/Comment'
import CommentInput from '../../components/comments/CommentInput'
import axios from 'axios'

function WuphfPage() {
	const router = useRouter()
	const { id } = router.query
	const [wuphf, setWuphf] = useState(null)
	const [wuphfLoading, setWuphfLoading] = useState(true)
	const [wuphfError, setWuphError] = useState(null)
	const [comments, setComments] = useState(null)
	const [commentsLoading, setCommentsLoading] = useState(true)
	const [commentsError, setCommentsError] = useState(null)

	async function getWuphf() {
		const res = await axios.get(`/api/wuphfs/${id}`).catch((err) => alert(err))

		if (res) {
			console.log('wuphf', res.data)
			setWuphf(res.data)
			setWuphfLoading(false)
		}
	}

	async function getComments() {
		const res = await axios
			.get(`/api/wuphfs/${id}/comments`)
			.catch((err) => alert(err))

		if (res) {
			console.log('wuphf', res.data)
			setComments(res.data)
			setCommentsError(false)
		}
	}

	useEffect(() => {
		if (id) {
			getWuphf()
			getComments()
		}
	}, [id])

	return (
		<Container>
			{wuphf && (
				<Wuphf
					key={wuphf.id}
					// onDelete={() => handleDeleteWuphf(index)}
					{...wuphf}
				/>
			)}
			<CommentInput />
			{comments && JSON.stringify(comments, null, 2)}
			{/* <Comment /> */}
		</Container>
	)
}

export default WuphfPage
