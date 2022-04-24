import styled from 'styled-components'

function Loading() {
	return (
		<Container>
			<LoadingDots>
				<div></div>
				<div></div>
				<div></div>
			</LoadingDots>
			{/* <IconWrapper> */}
			{/* <FontAwesomeIcon icon={faSpinner} size='3x' /> */}
			{/* <Paragraph>Loading...</Paragraph> */}
			{/* </IconWrapper> */}
		</Container>
	)
}

const Container = styled.div`
	display: flex;
	/* background-color: blue; */
	height: 30vh;
	justify-content: center;
	align-items: center;
`

const LoadingDots = styled.div`
	display: flex;
	justify-content: center;
	margin: 40px auto;

	& > div {
		width: 1rem;
		height: 1rem;
		margin: 0.25rem;
		border-radius: 50%;
		background-color: ${({ theme }) => theme.colors.primary};
		opacity: 1;
		animation: bouncing-loader 0.4s infinite alternate;
	}

	& > div:nth-child(2) {
		animation-delay: 0.2s;
	}

	& > div:nth-child(3) {
		animation-delay: 0.4s;
	}

	@keyframes bouncing-loader {
		to {
			opacity: 0.1;
			transform: translateY(-16px);
			transform: scale(0.7, 0.7);
		}
	}
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
