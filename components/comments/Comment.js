import Link from 'next/link'
import styled from 'styled-components'

import Avatar from '../general/Avatar'
import Container from '../styledComponents/Container'
// import styledComponents from 'styled-components'
/*
Props Needed:
Comment Body
WuphfUser
Theme Colors
WuphfId?

*/
function Comment(props) {
	const userName = props.userName
	return (
		<Container>
			<AvatarWrapper>
				<Avatar
					username={props.userName}
					profileImageUrl={props.avatarUrl}
					size='small'
				/>
			</AvatarWrapper>
			<CommentWrapper>
				<Link href={`/user/${props.userId}`}>
					<Username as='h3'>{props.userId}</Username>
				</Link>
				<CommentContent>
					{props.commentBody}
				</CommentContent>
			</CommentWrapper>
		</Container>
	)
}

const AvatarWrapper = styled.div`
	position: relative;
	padding: 1rem;
	span {
		width: 50px;
		height: 50px;
	}
	margin: 0 auto;
`
const CommentWrapper = styled.div`
	padding: 1rem;
	padding-left: 0;
`

const CommentContent = styled.textarea`
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
const Username = styled.h3`
	position: relative;
	font-weight: bold;

	&:hover {
		text-decoration: underline;
	}
`
export default Comment
