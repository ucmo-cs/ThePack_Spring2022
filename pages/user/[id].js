import React, { useEffect, useState } from 'react'

import { faBell } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import axios from 'axios'
import moment from 'moment'
import { useRouter } from 'next/router'
import styled from 'styled-components'

import Avatar from '../../components/general/Avatar'
import Button from '../../components/general/Button'
import RoundButton from '../../components/general/RoundButton'
import Error from '../../components/layout/Error'
import Loading from '../../components/layout/Loading'
import Container from '../../components/styledComponents/Container'
import Wuphfs from '../../components/wuphfs/Wuphfs'

function UserPage() {
  const router = useRouter()
  const { id } = router.query
  const [user, setUser] = useState()
  const [wuphfs, setWuphfs] = useState()
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState()

  useEffect(() => {
    async function getUser() {
      const res = await axios.get(`/api/users/${id}`).catch((err) => {
        setError({ data: err.response.data, status: err.response.status })
      })
      setUser(res?.data)
      setLoading(false)
    }

    async function getWuphfs() {
      const res = await axios.get(`/api/users/${id}/wuphfs`).catch((err) => {
        setError({ data: err.response.data, status: err.response.status })
      })
      setWuphfs(res?.data)
      setLoading(false)
    }

    if (id) {
      getUser()
      getWuphfs()
    }
  }, [id])

  if (loading) return <Loading />
  if (error) return <Error error={error} />

  return (
    <Container>
      <TopContainer>
        <Banner />
        <Header>
          <Text>
            <Username as="h1">{user?.userName}</Username>
            <Joined as="h3">Joined {moment(user?.createdAt).fromNow()}</Joined>
          </Text>
          <AvatarWrapper>
            <Avatar
              username="John Doe"
              profileImageUrl={'animal_svgs/dog_nau7in.svg'}
              size="large"
              border="shown"
            />
          </AvatarWrapper>
          <Buttons>
            <RoundButton variant="primary">
              <FontAwesomeIcon icon={faBell} />
            </RoundButton>
            <Button variant="primary">Follow</Button>
          </Buttons>
        </Header>
        <Bio>{user?.bio}</Bio>
      </TopContainer>
      <Wuphfs wuphfs={wuphfs && wuphfs} />
    </Container>
  )
}

const TopContainer = styled.div`
	position: relative;
`

const Banner = styled.div`
	background-color: ${(props) => props.theme.colors.darkBlue};
	height: 200px;
	border-radius: 20px;
`
const AvatarWrapper = styled.div`
	position: absolute;
	left: 50%;
	transform: translate(-50%, -50%);
`
const Header = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	height: 60px;
	padding: 10px;
`

const Text = styled.div``

const Username = styled.h1`
	font-weight: bold;
	font-size: 1.5rem;
	padding-bottom: 15px;
	padding-top: 15px;
`

const Joined = styled.h3`
	font-size: 0.75rem;
`

const Buttons = styled.div`
	/* padding-top: 5px; */
	display: flex;
	gap: 0.5rem;
`

const Bio = styled.div`
	padding: 10px;
	padding-top: 30px;
	padding-bottom: 30px;
	line-height: 1.25em;
`

export default UserPage
