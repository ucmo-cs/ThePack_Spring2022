import React from 'react'

import styled from 'styled-components'

import Comment from './Comment'
import Loading from '../layout/Loading'
import Title from '../styledComponents/Title'

function Comments({ comments, commentsLoading }) {
	if (commentsLoading) {
		return <Loading />
	}

	if (!comments || comments.length === 0) {
		return (
			<NoCommentWrapper>
				<p>No comments... 😢</p>
			</NoCommentWrapper>
		)
	}

	return (
		<Wrapper>
			{comments.map((comment) => (
				<Comment key={comment.id} comment={comment} />
			))}
		</Wrapper>
	)
}

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	padding-top: 1rem;
	gap: 1rem;
	border: 1.5px solid ${(props) => props.theme.colors.border};
	border-top: none;
	border-bottom-left-radius: 20px;
	border-bottom-right-radius: 20px;
`

const NoCommentWrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 15vh;

	p {
		/* font-weight: 500; */
		padding: 1rem;
		border-radius: 15px;
		border: ${({ theme }) => `1.5px solid ${theme.colors.border}`};
	}
`

export default Comments
