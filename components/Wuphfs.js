import React from 'react'
import Wuphf from './Wuphf'
import styled from 'styled-components'

function Wuphfs(props) {
	return (
		<Container>
			{props.posts.map((post) => (
				<Wuphf key={post.id} {...post} />
			))}
		</Container>
	)
}

const Container = styled.div`
	border: 2px solid rgb(196, 196, 196);
	border-top-left-radius: 20px;
	border-top-right-radius: 20px;
	border-bottom-left-radius: 20px;
	border-bottom-right-radius: 20px;
`

export default Wuphfs
