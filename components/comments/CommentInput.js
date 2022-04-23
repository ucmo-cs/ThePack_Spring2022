import { useState } from 'react'

import axios from 'axios'
import { useRouter } from 'next/router'
import styled from 'styled-components'

import { useWuphfUser } from '../../hooks/WuphfUserContext'
import Avatar from '../general/Avatar'
import Button from '../general/Button'
/*
What I need in Props:
wuphfID
theme colors
*/
function CommentInput(props) {
	const { addComment } = props
	const [comment, setComment] = useState('')
	const { wuphfUser } = useWuphfUser()
	const router = useRouter()
	const { id } = router.query

	function handleChange(event) {
		setComment(event.target.value)
	}

	async function commentRequest() {
		const res = await axios
			.post(`/api/wuphfs/${id}/comments`, {
				commentBody: comment,
			})
			.catch((err) => alert(err))

		if (res) {
			console.log(res.data)
			addComment(res.data)
			// onSubmit(res.data)
			setComment('')
		}
	}

	async function handleSubmit(event) {
		event.preventDefault()
		commentRequest()
	}

	return (
		<InputWrapper onSubmit={handleSubmit}>
			<AvatarWrapper>
				<Avatar
					username={useWuphfUser()}
					profileImageUrl='animal_svgs/cat_hizjv6.svg'
					size='small'
				/>
			</AvatarWrapper>
			<CommentTextArea
				value={comment}
				onChange={handleChange}
				placeHolder='What do you want to say?'
				rows='1'
			/>
			<Button type='submit' variant='primary'>
				Comment!
			</Button>
		</InputWrapper>
	)
}

const InputWrapper = styled.form`
	display: flex;
	align-items: center;
	background-color: pink;
	padding-left: 10px;
	gap: 1rem;
	padding: 1rem;
	color: ${(props) => props.theme.colors.text};
	background-color: ${(props) => props.theme.colors.highlight};
`

const AvatarWrapper = styled.div`
	position: relative;
	flex-shrink: 0;
	span {
		width: 50px;
		height: 50px;
	}
`
const CommentTextArea = styled.textarea`
	font-size: inherit;
	font-family: inherit;
	background-color: ${(props) => props.theme.colors.body};
	color: inherit;
	resize: none;
	display: block;
	outline: none;
	padding: 0.5rem;
	border-radius: 4px;
	width: 100%;
	border: ${(props) =>
		props.error ? '1px solid red' : `1px solid ${props.theme.colors.border}`};
	&:focus {
		outline: none;
	}
`
export default CommentInput
