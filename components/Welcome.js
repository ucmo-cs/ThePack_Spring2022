import { signIn } from 'next-auth/react'
import styled from 'styled-components'
import Button from './Button'
import Title from './styledComponents/Title'
import Paragraph from './styledComponents/Paragraph'
import Image from 'next/image'

function Welcome() {
  return (
    <Wrapper>
      <LogoWrapper>
        <img
          src="https://res.cloudinary.com/wuphf/image/upload/v1647982586/animal_svgs/dogThick_rieymv.svg"
          alt="wuphf logo"
          width={400}
          height={400}
        />
      </LogoWrapper>
      <MessageWrapper>
        <Message>
          <Title as="h1">Welcome!</Title>
          <Paragraph>
            Explore WUPHF, a friendly social media platform where you can find
            like minded animals!
          </Paragraph>
          <Button variant="primary" onClick={() => signIn('google')}>
            Continue with Google
          </Button>
        </Message>
      </MessageWrapper>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  /* background-color: pink; */
  height: 80vh;
`

const LogoWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  /* background-color: red; */
  flex-grow: 1;
`

const Logo = styled.div`
  background-color: white;
  height: 400px;
  width: 400px;
`

const MessageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  /* background-color: cyan; */
  flex-grow: 1;
`

const Message = styled.div``

export default Welcome
