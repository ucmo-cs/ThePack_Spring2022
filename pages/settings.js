import React, { useState } from 'react'
import { getSession } from 'next-auth/react'
import propTypes from 'prop-types'
import styled, { css } from 'styled-components'
import Sidebar from '../components/Sidebar'
import FormInput from '../components/forms/FormInput'
import Button from '../components/Button'
import Avatar from '../components/Avatar'
import { useForm } from 'react-hook-form'
import SelectInput from '../components/forms/SelectInput'
import TextArea from '../components/forms/TextArea'
import { withAuth } from '../components/withAuth'

AccountSettings.propTypes = {
	//Use another import
	avatar: propTypes.string.isRequired,
	username: propTypes.string.isRequired,

	//make it it's own function
	biography: propTypes.string.isRequired,
	linked_accounts: propTypes.string.isRequired,
	delete_accounts: propTypes.string.isRequired,
}

function AccountSettings(props) {
	const { avatar, username, biography, linked_accounts, delete_accounts } =
		props

	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitting },
		watch,
	} = useForm({
		mode: 'onTouched',
	})

	const [edit, setEdit] = useState(false)

	return (
		<AccSetLayout>
			<Sidebar />
			<SbarMainspace>
				<BtnTxtspace>
					<HeaderText> Profile Settings </HeaderText>
					<EditBtnWrapper>
						<Button variant='secondary' onClick={() => setEdit(!edit)}>
							{edit ? 'Save' : 'Edit'}
						</Button>
					</EditBtnWrapper>
				</BtnTxtspace>
				<Subheading id='avatar'> Avatar: </Subheading>
				<TextBtnSpace>
					<SelectInput register={register} id='1' label='' />
					<Avatar size='small' username='John' profileImageUrl='sample.jpg' />
				</TextBtnSpace>
				<Subheading id='username'> Username: </Subheading>
				<UsernameTxtStyling>
					<FormInput
						id='username'
						label=''
						register={register}
						error={errors.username}
					/>
				</UsernameTxtStyling>
				<Subheading id='biography'> Biography: </Subheading>
				<TextArea register={register} id='1' label='' />

				<HeaderText> Account Settings </HeaderText>

				<Subheading id='linked_account'> Linked Accounts: </Subheading>
				<svg
					viewBox='0 0 24 24'
					width='75'
					height='75'
					xmlns='http://www.w3.org/2000/svg'
				>
					<g transform='matrix(1, 0, 0, 1, 27.009001, -39.238998)'>
						<path
							fill='#4285F4'
							d='M -3.264 51.509 C -3.264 50.719 -3.334 49.969 -3.454 49.239 L -14.754 49.239 L -14.754 53.749 L -8.284 53.749 C -8.574 55.229 -9.424 56.479 -10.684 57.329 L -10.684 60.329 L -6.824 60.329 C -4.564 58.239 -3.264 55.159 -3.264 51.509 Z'
						/>
						<path
							fill='#34A853'
							d='M -14.754 63.239 C -11.514 63.239 -8.804 62.159 -6.824 60.329 L -10.684 57.329 C -11.764 58.049 -13.134 58.489 -14.754 58.489 C -17.884 58.489 -20.534 56.379 -21.484 53.529 L -25.464 53.529 L -25.464 56.619 C -23.494 60.539 -19.444 63.239 -14.754 63.239 Z'
						/>
						<path
							fill='#FBBC05'
							d='M -21.484 53.529 C -21.734 52.809 -21.864 52.039 -21.864 51.239 C -21.864 50.439 -21.724 49.669 -21.484 48.949 L -21.484 45.859 L -25.464 45.859 C -26.284 47.479 -26.754 49.299 -26.754 51.239 C -26.754 53.179 -26.284 54.999 -25.464 56.619 L -21.484 53.529 Z'
						/>
						<path
							fill='#EA4335'
							d='M -14.754 43.989 C -12.984 43.989 -11.404 44.599 -10.154 45.789 L -6.734 42.369 C -8.804 40.429 -11.514 39.239 -14.754 39.239 C -19.444 39.239 -23.494 41.939 -25.464 45.859 L -21.484 48.949 C -20.534 46.099 -17.884 43.989 -14.754 43.989 Z'
						/>
					</g>
				</svg>
				<Subheading id='delete_account'> Delete Account: </Subheading>
				<p>
					{' '}
					Permanently remove all account data, Wuphs, and likes. This cannot be
					undone.
				</p>
				<DABtnWrapper>
					<Button variant='secondary'> Delete Account </Button>
				</DABtnWrapper>
			</SbarMainspace>
		</AccSetLayout>
	)
}

export async function getServerSideProps(context) {
	const session = await getSession(context)

	if (!session) {
		return {
			redirect: {
				destination: '/',
				permanent: false,
			},
		}
	}

	return {
		props: { session },
	}
}

export default withAuth(AccountSettings)

const UsernameTxtStyling = styled.div`
	display: flex;
`
const SbarMainspace = styled.div``
const TextBtnSpace = styled.div`
	display: flex;
	gap: 30px;
`
const AccSetLayout = styled.div`
	display: flex;
	flex-direction: row;
	grid-gap: 30px;
`
const Subheading = styled.div`
	margin-top: 2rem;
	margin-bottom: 1rem;
	color: black;
	font-weight: bold;
	font-size: 1rem;
`
const HeaderText = styled.div`
	font-size: 3rem;
	font-weight: bold;
	border: none;
	text-align: left;
	margin-top: 3rem;
	color: #202e4a;
	width: 100%;
`
const BtnTxtspace = styled.div`
	margin-left: 0em;
	display: flex;
	flex-direction: row;
`
const EditBtnWrapper = styled.div`
	font-size: 1.3rem;
	margin: 10px;
`
const DABtnWrapper = styled.div`
	font-size: 1.3rem;
	margin-top: 1rem;
`
