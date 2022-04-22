import React, { useEffect, useState } from 'react'

import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import styled from 'styled-components'
import * as yup from 'yup'

import { useAvatars } from '../../hooks/useAvatar'
import breakpoint from '../../styles/breakpoint'
import Avatar from '../general/Avatar'
import SettingsForm from '../settings/SettingsForm'
import Container from '../styledComponents/Container'

const schema = yup.object({
	username: yup.string().min(4, 'Minimum length is 4').required('Required'),
	animal: yup.string().required('Required'),
	bio: yup.string().required('Required'),
})

function RegistrationForm({ setWuphfUser }) {
	const { avatars } = useAvatars()
	const [selectedAvatar, setSelectedAvatar] = useState(avatars[0])
	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitting },
		watch,
	} = useForm({
		mode: 'onTouched',
		resolver: yupResolver(schema),
		defaultValues: {
			selectedAnimal: avatars[0],
		},
	})

	useEffect(() => {
		const subscription = watch((value) => {
			let newAnimal = value
			for (let i = 0; i < avatars.length; i++) {
				if (avatars[i].url.toUpperCase() === watch('animal').toUpperCase()) {
					newAnimal = avatars[i]
					break
				}
			}
			setSelectedAvatar(newAnimal)
			// console.log(avatars)
		})
		return () => subscription.unsubscribe()
	}, [watch])

	return (
		<Container>
			<Wrapper>
				<div className='avatarContainer'>
					<Avatar
						username='Joe Smith'
						profileImageUrl={selectedAvatar?.url || 'temp'}
						size='large'
					/>
				</div>
				<SettingsForm
					selectedAnimal={selectedAvatar}
					setSelectedAnimal={setSelectedAvatar}
					animals={avatars}
					handleSubmit={handleSubmit}
					errors={errors}
					watch={watch}
					isSubmitting={isSubmitting}
					register={register}
				/>
			</Wrapper>
		</Container>
	)
}

export default RegistrationForm

const Wrapper = styled.div`
	margin: 0 1rem;

	@media ${breakpoint.up.sm} {
		display: grid;
		grid-template-columns: 50% 50%;
	}

	.avatarContainer {
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 1rem;
	}
`
