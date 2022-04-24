import { signIn } from 'next-auth/react'
import styled from 'styled-components'

import WuphfSVG from '../../assets/WuphfSVG'
import breakpoint from '../../styles/breakpoint'
import Button from '../general/Button'
import Paragraph from '../styledComponents/Paragraph'
import Title from '../styledComponents/Title'

function Welcome() {
	return (
		<Wrapper>
			<Content>
				<LogoWrapper>
					<WuphfSVG height='350px' />
				</LogoWrapper>
				<MessageWrapper>
					<Message>
						<Title as='h1'>Welcome!</Title>
						<Paragraph>
							Explore WUPHF, a friendly social media platform where you can find
							like minded animals!
						</Paragraph>
						<ButtonWrapper>
							<Button variant='primary' onClick={() => signIn('google')}>
								Continue with Google
							</Button>
						</ButtonWrapper>
					</Message>
				</MessageWrapper>
			</Content>
		</Wrapper>
	)
}

const ButtonWrapper = styled.div`
	display: flex;
	width: 100%;
	justify-content: center;
`

const StyledImg = styled.img`
	width: 100%;
`

const Wrapper = styled.div`
	display: flex;
	justify-content: center;
`

const Content = styled.div`
	display: flex;
	/* background-color: pink; */
	justify-content: center;
	align-items: center;
	height: 90vh;
	width: 100vw;
	gap: 1rem;
	padding: 1rem;
	@media ${breakpoint.down.sm} {
		flex-direction: column-reverse;
		height: auto;
		svg {
			width: 300px;
			height: 150px;
		}
	}
`

const LogoWrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 1rem;
	/* background-color: red; */
	/* flex-grow: 1; */
`

const MessageWrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 1rem;
	max-width: 400px;
	@media ${breakpoint.down.sm} {
		width: 100%;
	}
	/* background-color: cyan; */
	/* flex-grow: 1; */
`

const Message = styled.div`
	border: ${({ theme }) => `1.5px solid ${theme.colors.border}`};
	border-radius: 20px;
	padding: 1.5rem;
`

export default Welcome
