import React from 'react'
import styled from 'styled-components'
import FormInput from './forms/FormInput'
import SelectInput from './forms/SelectInput'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import Button from './Button'
import * as yup from 'yup'

const schema = yup.object({
	username: yup.string().min(4, 'Min length is 4').required('Required'),
	animal: yup.string().required('Required'),
})

function SettingsForm() {
	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitting },
		watch,
	} = useForm({
		mode: 'onTouched',
		resolver: yupResolver(schema),
	})

	const onSubmit = ({ username, animal }) => {
		alert(`username: ${username}, animal: ${animal}`)
	}

	return (
		<SettingBorder>
			<WuphfTitle>WUPHF</WuphfTitle>
			<form onSubmit={handleSubmit(onSubmit)}>
				<h3>username: {watch('username')}</h3>
				<h3>animal: {watch('animal')}</h3>
				<FormInput
					id='username'
					label='Username'
					register={register}
					error={errors.username}
				/>
				<SelectInput register={register} id='animal' label='Your Animal'>
					<option value='dog'>Dog</option>
					<option value='cat'>Cat</option>
					<option value='bird'>Bird</option>
					<option value='hamster'>Hamster</option>
					<option value='owl'>Owl</option>
					<option value='monkey'>Monkey</option>
					<option value='tanuki'>Tanuki</option>
					<option value='pig'>Pig</option>
					<option value='bunny'>Bunny</option>
					<option value='panda'>Panda</option>
				</SelectInput>

				<Button variant='primary' type='submit' disabled={isSubmitting}>
					Submit
				</Button>
			</form>
		</SettingBorder>
	)
}

const SettingBorder = styled.div`
	border: 1px solid #adadad;
	border-radius: 15px;
	padding: 1.5em;
	margins: 10px;
`

const WuphfTitle = styled.h1`
	margin: auto;
	text-align: center;
`

export default SettingsForm
