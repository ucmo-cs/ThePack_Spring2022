import Link from 'next/link'
import styled from 'styled-components'

import Avatar from '../general/Avatar'
// import styledComponents from 'styled-components'
/*
Props Needed:
Comment Body
WuphfUser
Theme Colors
WuphfId?

*/
function Comment(props) {
	const { comment } = props
	const userName = props.userName
	// return JSON.stringify(comment, null, 2)
	// { "id": 7, "postsId": 21, "userId": "charlie", "commentBody": "hi" }

	return (
		<Wrapper>
			<AvatarWrapper>
				<Avatar
					username={comment.userId}
					profileImageUrl={props.avatarUrl}
					size='small'
				/>
			</AvatarWrapper>
			<CommentWrapper>
				<Link href={`/user/${comment.userId}`}>
					<Username as='h3'>{comment.userId}</Username>
				</Link>
				<CommentContent>{comment.commentBody}</CommentContent>
			</CommentWrapper>
		</Wrapper>
	)
}

const Wrapper = styled.div`
	display: flex;
	/* background-color: orange; */
	border-radius: 20px;
	padding-bottom: 1rem;
	&:not(:last-child) {
		border-bottom: 1.5px solid ${(props) => props.theme.colors.border};
	}
`

const AvatarWrapper = styled.div`
	/* background-color: yellow; */
	position: relative;
	flex-shrink: 0;
	padding: 0 1rem;
	display: flex;
	justify-content: center;
	align-items: flex-start;
	/* span {
		width: 70px;
		height: 70px;
	} */
`
const CommentWrapper = styled.div`
	/* background-color: magenta; */
`

const CommentContent = styled.p`
	font-size: inherit;
	font-family: inherit;
	background-color: inherit;
	color: inherit;
	resize: none;
	flex-shrink: 0;
	display: block;
	outline: none;
	margin-top: 0.5rem;
	padding: 0.5rem;
	border-radius: 4px;
	width: 100%;
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
