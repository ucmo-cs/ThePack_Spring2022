import React from 'react'

import styled from 'styled-components'

import Comment from './Comment'

function Comments({ comments }) {
	if (!comments || comments == []) {
		return <p>No comments... :(</p>
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

export default Comments
