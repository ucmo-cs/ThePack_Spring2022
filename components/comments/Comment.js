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
				<CommentContent>{props.commentBody}</CommentContent>
			</CommentWrapper>
		</Container>
	)
}

const AvatarWrapper = styled.div`
	background-color: yellow;
	position: relative;
	padding: 1rem;
	span {
		width: 50px;
		height: 50px;
	}
	margin: 0 auto;
`
const CommentWrapper = styled.div`
	background-color: magenta;
	padding: 1rem;
	padding-left: 0;
`

const CommentContent = styled.textarea`
	font-size: inherit;
	font-family: inherit;
	background-color: inherit;
	color: inherit;
	resize: none;
	display: block;
	outline: none;
	margin-top: 0.5rem;
	padding: 0.5rem;
	border-radius: 4px;
	width: 100%;
	border: ${(props) =>
		props.error ? '1px solid red' : `1px solid ${props.theme.colors.border}`};
	&:focus {
		outline: none;
	}
	height: 100%;
`
const Username = styled.h3`
	position: relative;
	font-weight: bold;

	&:hover {
		text-decoration: underline;
	}
`
export default Comment
