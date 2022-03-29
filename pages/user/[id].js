import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Avatar from '../../components/Avatar'
import Wuphfs from '../../components/Wuphfs'
import Button from '../../components/Button'
import tempPosts from '../../assets/tempPosts'
import styled from 'styled-components'
import axios from 'axios'
import moment from 'moment'
import Loading from '../../components/Loading'
import Title from '../../components/styledComponents/Title'
import Paragraph from '../../components/styledComponents/Paragraph'
import Container from '../../components/styledComponents/Container'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell } from '@fortawesome/free-solid-svg-icons'
import RoundButton from '../../components/RoundButton'

function UserPage(props) {
	const router = useRouter()
	const { id } = router.query
	const [user, setUser] = useState()
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		const getUser = async () => {
			const { data } = await axios.get(`../api/user/${id}`)
			setUser(data)
			setLoading(false)
		}

		if (id) {
			getUser()
		}
	}, [id])

	if (loading) return <Loading />

	return user ? (
		<Container>
			<TopContainer>
				<Banner />

				<Header>
					<Text>
						<Username as='h1'>{user?.userName}</Username>
						<Joined as='h3'>Joined {moment(user?.createdAt).fromNow()}</Joined>
					</Text>

					<AvatarWrapper>
						<Avatar
							username='John Doe'
							profileImageUrl='sample.jpg'
							size='large'
						/>
					</AvatarWrapper>

					<Buttons>
						{/* <Button variant='primary'>...</Button> */}
						<RoundButton variant='primary'>
							<FontAwesomeIcon icon={faBell} />
						</RoundButton>
						<Button variant='primary'>Follow</Button>
					</Buttons>
				</Header>

				<Bio>{user?.bio}</Bio>
			</TopContainer>
			<Wuphfs posts={tempPosts} />
		</Container>
	) : (
		<Container>
			<Title>Error</Title>
			<Paragraph>No user was found under the name {id}.</Paragraph>
		</Container>
	)
}

const Nav = styled.nav`
	font-weight: bolder;
	font-size: larger;
	display: flex;
	align-items: center;
	margin-left: 10px;
	padding-top: 15px;
	padding-bottom: 15px;
`

const TopContainer = styled.div`
	position: relative;
`

const Banner = styled.div`
	background-color: #7395b0;
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
