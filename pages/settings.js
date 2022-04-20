import React, { useEffect, useState } from 'react'

import axios from 'axios'
import propTypes from 'prop-types'
import { useForm } from 'react-hook-form'
import styled, { useTheme } from 'styled-components'
import { signOut } from 'next-auth/react'

import { darkTheme } from '../assets/themes/darkTheme'
import { lavaTheme } from '../assets/themes/lavaTheme'
import { lightTheme } from '../assets/themes/lightTheme'
import FormInput from '../components/forms/FormInput'
import SelectInput, { Wrapper } from '../components/forms/SelectInput'
import TextArea from '../components/forms/TextArea'
import Avatar from '../components/general/Avatar'
import Button from '../components/general/Button'
import withAuth from '../components/layout/withAuth'
import GoogleLogo from '../components/other/GoogleLogo'
import Sidebar from '../components/settings/Sidebar'
import Paragraph from '../components/styledComponents/Paragraph'
import { useWuphfUser } from '../hooks/WuphfUserContext'
import { useRouter } from 'next/router'


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
   const {
      register,
      formState: { errors },
      setValue,
      getValues
   } = useForm({
      mode: 'onTouched',
   })

   const [editEnabled, setEditEnabled] = useState(false)
   const theme = useTheme()
   const [selectedThemeValue, setSelectedThemeValue] = useState(theme)
   const { wuphfUser, setWuphfUser } = useWuphfUser()
   const router = useRouter()

   useEffect(() => {
      // TODO: Set avatar to user's avatar, this is not in the database yet
      setValue('avatar', 'option-1')
      setValue('username', wuphfUser?.userName)
      setValue('biography_textarea', wuphfUser?.bio)

      if (theme === lightTheme) {
         setSelectedThemeValue('light')
      } else if (theme === lavaTheme) {
         setSelectedThemeValue('lava')
      } else if (theme === 'dark') {
         setSelectedThemeValue('dark')
      }
   }, [])

   function handleThemeChange(e) {
      e.preventDefault()
      const newTheme = e.target.value
      if (newTheme === 'light') {
         setSelectedThemeValue('light')
         props.setTheme(lightTheme)
      } else if (newTheme === 'lava') {
         setSelectedThemeValue('lava')
         props.setTheme(lavaTheme)
      } else if (newTheme === 'dark') {
         setSelectedThemeValue('dark')
         props.setTheme(darkTheme)
      }
   }

   async function handleEditButtonClick(e) {
      e.preventDefault()
      if (editEnabled) {
         await axios.patch(`/api/users/${wuphfUser.userName}`, {
            userName: getValues('username'),
            bio: getValues('biography_textarea'),
         })
      }
      setEditEnabled(!editEnabled)
   }

   async function handleDeleteButtonClick(e) {
      e.preventDefault()
      await axios.delete(`/api/users/${wuphfUser.userName}`).then(() => signOut())
   }

   return (
      <AccSetLayout>
         <Sidebar />
         <MainContent>
            <div>
               <ProfileSettingsWrapper>
                  <HeaderText>Profile Settings</HeaderText>
                  <EditBtnWrapper>
                     <Button variant='secondary' onClick={handleEditButtonClick}>
                        {editEnabled ? 'Save' : 'Edit'}
                     </Button>
                  </EditBtnWrapper>
               </ProfileSettingsWrapper>
               <Subheading id='avatar'>Avatar:</Subheading>
               <TextBtnSpace>
                  <SelectInput register={register} id='avatar' label='' enabled={editEnabled}>
                     <option value='option-1'>Option 1</option>
                     <option value='option-2'>Option 2</option>
                     <option value='option-3'>Option 3</option>
                  </SelectInput>
                  <Avatar size='small' username='John' profileImageUrl='sample.jpg' />
               </TextBtnSpace>
               <Subheading id='username'>Username:</Subheading>
               <FormInput
                  id='username'
                  label=''
                  register={register}
                  error={errors.username}
                  enabled={editEnabled}
               />
               <Subheading id='biography'>Biography:</Subheading>
               <TextArea register={register} id='biography_textarea' label='' enabled={editEnabled} />
            </div>
            <div>
               <HeaderText>Account Settings</HeaderText>
               <Subheading id='linked_account'>Linked Accounts:</Subheading>
               <GoogleLogo />
               <Subheading id='delete_account'>Delete Account:</Subheading>
               <Paragraph>
                  Permanently remove all account data, Wuphs, and likes. This cannot be
                  undone.
               </Paragraph>
               <DABtnWrapper>
                  <Button variant='secondary' onClick={handleDeleteButtonClick}>Delete Account</Button>
               </DABtnWrapper>
            </div>
            <div>
               <HeaderText>Visual Settings</HeaderText>
               <Subheading id='site_theme'>Site Theme:</Subheading>
               <Wrapper>
                  <select id='site_theme' onChange={handleThemeChange} value={selectedThemeValue}>
                     <option value='light'>Light</option>
                     <option value='lava'>Lava</option>
                     <option value='dark'>Dark</option>
                  </select>
               </Wrapper>
               <Subheading id='text_size'>Text Size:</Subheading>
               <SelectInput register={register} id='font_size' label=''>
                  <option value='small'>Small</option>
                  <option value='medium'>Medium</option>
                  <option value='large'>Large</option>
               </SelectInput>
            </div>
         </MainContent>
      </AccSetLayout>
   )
}

export default withAuth(AccountSettings)

const MainContent = styled.div`
   display: flex;
   flex-direction: column;
   gap: 20px;
`
const TextBtnSpace = styled.div`
display: flex;
gap: 30px;
`
const AccSetLayout = styled.div`
display: flex;
flex-direction: row;
grid-gap: 30px;
max-width: 686px;
margin: 0 auto;
`
const Subheading = styled.div`
margin-top: 2rem;
margin-bottom: 1rem;
color: ${props => props.theme.colors.darkestBlue};;
font-weight: bold;
font-size: 1rem;
`
const HeaderText = styled.div`
font-size: 2rem;
font-weight: bold;
border: none;
text-align: left;
color: ${props => props.theme.colors.darkestBlue};
width: 100%;
`
const ProfileSettingsWrapper = styled.div`
margin-left: 0em;
display: flex;
flex-direction: row;
padding: 20px 0 0 0;
`
const EditBtnWrapper = styled.div`
font-size: 1.3rem;
`
const DABtnWrapper = styled.div`
font-size: 1.3rem;
margin-top: 1rem;
`
