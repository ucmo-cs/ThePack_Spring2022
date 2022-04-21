import {  useState } from 'react'

import axios from 'axios'
import styled from 'styled-components'

import { useWuphfUser } from '../../hooks/WuphfUserContext'
import Avatar from '../general/Avatar'
import Button from '../general/Button'
/*
What I need in Props:
wuphfID
theme colors
*/
function CommentInput(props){
    const [comment, setComment] = useState('')
    const { wuphfUser } = useWuphfUser()
    
    function handleChange(event) {
		setComment(event.target.value)
	}

	async function handleSubmit(event) {
		event.preventDefault()
		axios
			.post(`/api/${props.wuphfId}/comment`, {
				postId: props.wuphfId,
				commentBody: comment,
                userId: wuphfUser.userName
			})
			.then((res) => {
				console.log(res.data)
				addWuphf(res.data)
				// onSubmit(res.data)
				setPost('')
			})
	}

    return (

        <inputWrapper onSubmit={handleSubmit}>
            <AvatarWrapper>
                <Avatar
                    username={useWuphfUser()}
                    profileImageUrl='animal_svgs/cat_hizjv6.svg'
                    size='small'
                />
            </AvatarWrapper>
            <CommentTextArea
                value={post}
                onChange={handleChange}
                placeHolder="What do you want to say?"
            />
            <Button type='submit' variant='primary'>
                Comment!
            </Button>
        </inputWrapper>
         
        )
}


const inputWrapper = styled.div`
        paddint-left: 10px
        color: ${(props) => props.theme.color.lightGrey};
`
const AvatarWrapper = styled.div`
	position: relative;
	padding: 1rem;
	span {
		width: 50px;
		height: 50px;
	}
	margin: 0 auto;
`
const CommentTextArea = styled.textarea`
	font-family: inherit;
	font-size: inherit;
	border: none;
	outline: none;
	border-bottom: 1px solid #aaa;
	resize: none;
	width: 100%;
	height: 4rem;
	margin-bottom: 0.5rem;
	background-color: ${(props) => props.theme.colors.white}
    wrap = off;
`
