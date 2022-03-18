import React, { useState } from 'react'
import styled, { css } from 'styled-components'
import Avatar from './Avatar'
import Button from './Button'

// const Button = styled.button`
//   background-color: #7395b0;
//   border: none;
//   color: white;
//   padding: 0.5rem 1rem;
//   border-radius: 25px;
//   font-size:20px;
//   line-height: 20px;
//   text-align: right;
//   font-weight: 600;
// `

const PostBorder = styled.form`
	border: 2px #7395b0;
	border-style: solid;
	border-radius: 15px;
	width: 100%;
	padding: 1.5rem;
`

const PostTextArea = styled.textarea`
	font-family: inherit;
	font-size: 16px;
	border: none;
	border-bottom: 1px solid #aaa;
	resize: none;
	width: 100%;
	height: 4rem;
	margin-bottom: 0.5rem;
`
const AvatarButtonDiv = styled.div`
	display: flex;
	justify-content: space-between;
`

function WuphfInput() {
	const [post, setPost] = useState('')

	function handleChange(event) {
		setPost(event.target.value)
	}

	function userSubmission(event) {
		event.preventDefault()
		if (post.length > 0) alert(`The text entered was: ${post} `)
		else {
			alert('Enter a post to submit.')
		}
	}

	return (
		<PostBorder onSubmit={userSubmission}>
			<PostTextArea
				value={post}
				onChange={handleChange}
				placeholder="What's happening?"
			/>
			<AvatarButtonDiv>
				<Avatar size='small' username='John' profileImageUrl='sample.jpg' />
				<Button type='submit' variant='primary'>
					WUPHF!
				</Button>
			</AvatarButtonDiv>
		</PostBorder>
	)
}
// export default WuphfInput
export default WuphfInput
