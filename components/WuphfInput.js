import React, { useState } from 'react'

import axios from 'axios'
import styled from 'styled-components'

import { useWuphfUser } from '../hooks/WuphfUserContext'
import Avatar from './Avatar'
import Button from './Button'

function WuphfInput({ onSubmit }) {
	const [post, setPost] = useState('')
	const { wuphfUser } = useWuphfUser()

	function handleChange(event) {
		setPost(event.target.value)
	}

	async function handleSubmit(event) {
		event.preventDefault()
		axios.post('/api/wuphfs', {
			userName: wuphfUser.userName,
			pictureUrl: 'https://socialistmodernism.com/wp-content/uploads/2017/07/placeholder-image.png',
			postBody: post,
		}).then((res) => {
			onSubmit(res.data)
			setPost('')
		})
	}

	return (
		<PostBorder onSubmit={handleSubmit}>
			<PostTextArea
				value={post}
				onChange={handleChange}
				placeholder="What's happening?"
			/>
			<AvatarButtonDiv>
				<Avatar size='medium' username='John' profileImageUrl='sample.jpg' />
				<Button type='submit' variant='primary'>
					WUPHF!
				</Button>
			</AvatarButtonDiv>
		</PostBorder>
	)
}

const PostBorder = styled.form`
	border: 1.5px ${props => props.theme.colors.darkBlue};
	border-style: solid;
	border-radius: 15px;
	width: 100%;
	padding: 1.5rem;
`

const PostTextArea = styled.textarea`
	font-family: inherit;
	font-size: inherit;
	border: none;
	outline: none;
	border-bottom: 1px solid #aaa;
	resize: none;
	width: 100%;
	height: 4rem;
	margin-bottom: 0.5rem;
`
const AvatarButtonDiv = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
`

// export default WuphfInput
export default WuphfInput
