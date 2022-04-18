import { signIn } from 'next-auth/react'
import styled from 'styled-components'
import Button from './Button'
import Title from './styledComponents/Title'
import Paragraph from './styledComponents/Paragraph'
import breakpoint from '../styles/breakpoint'

function Welcome() {
  return (
    <Wrapper>
      <Content>
        <LogoWrapper>
          <StyledImg
            src="https://res.cloudinary.com/wuphf/image/upload/v1647982586/animal_svgs/dogThick_rieymv.svg"
            alt="wuphf logo"
          />
        </LogoWrapper>
        <MessageWrapper>
          <Message>
            <Title as="h1">Welcome!</Title>
            <Paragraph>
              Explore WUPHF, a friendly social media platform where you can find
              like minded animals!
            </Paragraph>
            <ButtonWrapper>
              <Button variant="primary" onClick={() => signIn('google')}>
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
  height: 100vh;
  width: 100vw;
  gap: 1rem;
  padding: 1rem;
`

const LogoWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  /* background-color: red; */
  /* flex-grow: 1; */
  @media ${breakpoint.down.sm} {
    display: none;
  }
`

const MessageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  width: 25vw;
  max-width: 400px;
  @media ${breakpoint.down.sm} {
    width: 100%;
  }
  /* background-color: cyan; */
  /* flex-grow: 1; */
`

const Message = styled.div``

export default Welcome
