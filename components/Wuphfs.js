import React from 'react'
import Wuphf from './Wuphf'
import styled from 'styled-components'

function Wuphfs(props) {
	return (
		<Wrapper>
			{props.posts.map((post) => (
				<Wuphf key={post.id} {...post} />
			))}
		</Wrapper>
	)
}

const Wrapper = styled.div`
	border: 1.5px solid #ccc;
	border-top-left-radius: 20px;
	border-top-right-radius: 20px;
	border-bottom-left-radius: 20px;
	border-bottom-right-radius: 20px;
`

export default Wuphfs
