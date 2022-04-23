import React from 'react'

import PropTypes from 'prop-types'
import styled from 'styled-components'

Error.propTypes = {
	error: PropTypes.object.isRequired,
}

function Error({ error }) {
	return (
		<Wrapper>
			<Content>
				<Status>{error?.status}</Status>
				<Line />
				<Message>
					{error?.status == '500'
						? 'Internal Server Error'
						: error?.data.message && error?.data.message}
				</Message>
			</Content>
		</Wrapper>
	)
}

const Wrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100vh;
`

const Content = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 1rem;
`

const Line = styled.div`
	background-color: black;
	width: 2px;
	height: 50px;
`

const Status = styled.div`
	font-weight: 700;
	font-size: 2rem;
`

const Message = styled.div``

export default Error
