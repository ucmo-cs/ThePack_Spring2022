import React from 'react'
import SettingsForm from '../components/SettingsForm'
import styled from 'styled-components'
import Avatar from '../components/Avatar'

export default function register() {
	return (
		<Wrapper>
			<div className='avatarContainer'>
				<Avatar
					username='Joe Smith'
					profileImageUrl='sample.jpg'
					size='large'
				/>
			</div>
			<SettingsForm />
		</Wrapper>
	)
}

const Wrapper = styled.div`
	display: grid;
	grid-template-columns: 50% 50%;

	.avatarContainer {
		display: flex;
		justify-content: center;
		align-items: center;
	}
`
