import React from 'react'

import { yupResolver } from '@hookform/resolvers/yup'
import axios from 'axios'
import { useForm } from 'react-hook-form'
import styled from 'styled-components'
import { object, string } from 'yup'

import { useWuphfUser } from '../../hooks/WuphfUserContext'
import Avatar from '../general/Avatar'
import Button from '../general/Button'

let schema = object({
	post: string().trim().required('Please enter a Wuphf.'),
})

function WuphfInput({ addWuphf }) {
	const { wuphfUser } = useWuphfUser()
	const {
		register,
		handleSubmit,
		formState: { errors },
		watch,
		reset,
	} = useForm({ resolver: yupResolver(schema) })

	async function postWuphf() {
		const res = await axios
			.post('/api/wuphfs', {
				userName: wuphfUser.userName,
				pictureUrl: wuphfUser.avatar.url,
				postBody: watch('post'),
			})
			.catch((err) => alert(err))

		if (res) {
			addWuphf(res.data)
		}
	}

	function onSubmit(data) {
		console.log(data)
		postWuphf()
		reset()
	}
	// console.log('ERRORS!', errors)

	// async function handleSubmit(event) {
	// 	event.preventDefault()

	// 	// validation
	// 	try {
	// 		await wuphfSchema.validate({
	// 			username: wuphfUser.userName,
	// 			pictureUrl: wuphfUser.pictureUrl,
	// 			postBody: post,
	// 		})
	// 	} catch (error) {
	// 		setPost('')
	// 		return alert(error)
	// 	}

	// 	const res = await axios
	// 		.post('/api/wuphfs', {
	// 			userName: wuphfUser.userName,
	// 			pictureUrl: wuphfUser.avatar.url,
	// 			postBody: post,
	// 		})
	// 		.catch((err) => alert(err))

	// 	if (res) {
	// 		addWuphf(res.data)
	// 	}
	// 	setPost('')
	// }

	return (
		<PostBorder onSubmit={handleSubmit(onSubmit)} error={errors.post}>
			<PostTextArea placeholder="What's happening?" {...register('post')} />
			{errors && <ErrorMsg>{errors?.post?.message}</ErrorMsg>}
			<AvatarButtonDiv>
				<Avatar
					size='medium'
					username={wuphfUser?.userName}
					profileImageUrl={wuphfUser?.avatar && wuphfUser.avatar.url}
				/>
				<Button type='submit' variant='primary'>
					WUPHF!
				</Button>
			</AvatarButtonDiv>
		</PostBorder>
	)
}

const PostBorder = styled.form`
	border: ${(props) =>
		props.error
			? '1.5px solid red'
			: `1.5px solid ${props.theme.colors.border}`};
	border-style: solid;
	border-radius: 15px;
	width: 100%;
	padding: 1.5rem;
	/* background-color: ${(props) => props.theme.colors.wuphfInputBackground}; */
`

const ErrorMsg = styled.span`
	color: red;
	padding-bottom: 1rem;
`

const PostTextArea = styled.textarea`
	font-family: inherit;
	font-size: inherit;
	color: inherit;
	border: none;
	outline: none;
	border-bottom: 1px solid ${(props) => props.theme.colors.border};
	resize: none;
	width: 100%;
	height: 4rem;
	margin-bottom: 0.5rem;
	background-color: transparent;
	&::placeholder {
		color: ${(props) => props.theme.colors.text};
	}
`
const AvatarButtonDiv = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
`

export default WuphfInput
