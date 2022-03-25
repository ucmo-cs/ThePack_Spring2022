import React from 'react'
import Avatar from '../../components/Avatar'
import Wuphf from '../../components/Wuphf'
import Button from '../../components/Button'
import tempPosts from '../../assets/tempPosts'
import styled from 'styled-components'

const tempUser = {
	username: 'John Doe',
	joinDate: '3 weeks ago',
	bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Posuere vitae enim risus consectetur sed at vitae lectus. Amet purus massa accumsan in. Facilisis nec aliquet ac nulla. Odio et eros, pretium lacus, nulla.',
}

function profilePage(props) {
	return (
		<div>
			{/* this is a temporary navbar, replace */}
			<Nav as='nav'>WUPHF</Nav>

			<TopContainer>
				<Banner />

				<Header>
					<Text>
						<Username as='h1'>{tempUser.username}</Username>
						<Joined as='h3'>Joined {tempUser.joinDate}</Joined>
					</Text>

					<AvatarWrapper>
						<Avatar
							username='John Doe'
							profileImageUrl='sample.jpg'
							size='large'
						/>
					</AvatarWrapper>

					<Buttons>
						<Button variant='primary'>...</Button>
						<Button variant='primary'>...</Button>
						<Button variant='primary'>Follow</Button>
					</Buttons>
				</Header>

				{/* //replace below with user input Biography in settings page */}
				<Bio>{tempUser.bio}</Bio>
			</TopContainer>
			<Wuphfs posts={tempPosts} />
		</div>
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
	padding-top: 5px;
`

const Bio = styled.div`
	padding: 10px;
	padding-top: 30px;
	padding-bottom: 30px;
	line-height: 1.25em;
`

export default profilePage
