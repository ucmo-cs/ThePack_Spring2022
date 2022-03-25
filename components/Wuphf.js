import React from 'react'
import Avatar from './Avatar'
import styled from 'styled-components'

function Wuphf(props) {
	return (
		<Container>
			<AvatarWrapper>
				<Avatar
					username={props.username}
					profileImageUrl={props.avatar}
					size='large'
				/>
			</AvatarWrapper>
			<PostWrapper>
				<Username as='h3'>{props.username}</Username>
				<Post as='p'>{props.post}</Post>
			</PostWrapper>
		</Container>
	)
}

const Container = styled.div`
	display: flex;
`

const AvatarWrapper = styled.div`
	position: relative;
	padding: 1rem;
	/* margin: 1rem; */
	/* width: 50px;
	height: 50px; */
	span {
		width: 50px;
		height: 50px;
	}
	margin: auto;
`

const PostWrapper = styled.div`
	padding: 1rem;
	padding-left: 0;
`

const Username = styled.h3`
	position: relative;
	font-weight: bold;
`

const Post = styled.p`
	padding-top: 5px;
	line-height: 1.25em;
`

export default Wuphf
