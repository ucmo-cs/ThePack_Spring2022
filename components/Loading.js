import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'

import Paragraph from './styledComponents/Paragraph'

function Loading() {
	return (
		<Container>
			<IconWrapper>
				<FontAwesomeIcon icon={faSpinner} size='3x' />
				{/* <Paragraph>Loading...</Paragraph> */}
			</IconWrapper>
		</Container>
	)
}

const Container = styled.div`
	display: flex;
	/* background-color: blue; */
	height: 100vh;
	justify-content: center;
	align-items: center;
`

const IconWrapper = styled.div`
	display: flex;
	/* background-color: pink; */
	/* position: absolute; */
	/* transform: translate(-50%, -50%); */

	animation-name: spin;
	animation-duration: 2500ms;
	animation-iteration-count: infinite;
	animation-timing-function: linear;

	@keyframes spin {
		from {
			transform: rotate(0deg);
		}
		to {
			transform: rotate(360deg);
		}
	}
`

export default Loading
