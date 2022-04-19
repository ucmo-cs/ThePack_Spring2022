import React, { useEffect, useState } from 'react'

import propTypes from 'prop-types'
import { useForm } from 'react-hook-form'
import styled, { useTheme } from 'styled-components'

import { darkTheme } from '../assets/themes/darkTheme'
import { lavaTheme } from '../assets/themes/lavaTheme'
import { lightTheme } from '../assets/themes/lightTheme'
import Avatar from '../components/Avatar'
import Button from '../components/Button'
import FormInput from '../components/forms/FormInput'
import SelectInput, { Wrapper } from '../components/forms/SelectInput'
import TextArea from '../components/forms/TextArea'
import GoogleLogo from '../components/GoogleLogo'
import Sidebar from '../components/Sidebar'
import Container from '../components/styledComponents/Container'
import withAuth from '../components/withAuth'
import Paragraph from '../components/styledComponents/Paragraph'


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
   } = useForm({
      mode: 'onTouched',
   })

   const [editEnabled, setEditEnabled] = useState(false)
   const theme = useTheme()
   const [selectedTheme, setSelectedTheme] = useState(theme)
   const [selectedThemeValue, setSelectedThemeValue] = useState(theme)

   useEffect(() => {
      if(theme === lightTheme) {
         setSelectedThemeValue('light')
      }  else if(theme === lavaTheme) { 
         setSelectedThemeValue('lava')
      } else if(theme === 'dark') {
         setSelectedThemeValue('dark')
      }
   }, [])

   function handleThemeChange(e) {
      e.preventDefault()
      const newTheme = e.target.value
      if(newTheme === 'light') {
         setSelectedTheme(lightTheme)
         setSelectedThemeValue('light')
      } else  if(newTheme === 'lava') {
         setSelectedTheme(lavaTheme)
         setSelectedThemeValue('lava')
      } else if (newTheme === 'dark') {
         setSelectedTheme(darkTheme)
         setSelectedThemeValue('dark')
      }
   }

   function handleEditButtonClick(e) {
      e.preventDefault()
      if(editEnabled) {
         props.setTheme(selectedTheme)
      }
      setEditEnabled(!editEnabled)
   }

   return (
      <Container>
         <AccSetLayout>
            <Sidebar />
            <div>
               <BtnTxtspace>
                  <HeaderText>Profile Settings</HeaderText>
                  <EditBtnWrapper>
                     <Button variant='secondary' onClick={handleEditButtonClick}>
                        {editEnabled ? 'Save' : 'Edit'}
                     </Button>
                  </EditBtnWrapper>
               </BtnTxtspace>
               <Subheading id='avatar'>Avatar:</Subheading>
               <TextBtnSpace>
                  <SelectInput register={register} id='avatar' label='' enabled={editEnabled}>
                     <option value='option-1'>Option 1</option>
                     <option value='option-2'>Option 2</option>
                     <option value='option-3'>Option 3</option>
                  </SelectInput>
                  <Avatar size='small' username='John' profileImageUrl='sample.jpg' />
               </TextBtnSpace>
               <Subheading id='username'> Username: </Subheading>
               <UsernameTxtStyling>
                  <FormInput
                     id='username'
                     label=''
                     register={register}
                     error={errors.username}
                     enabled={editEnabled}
                  />
               </UsernameTxtStyling>
               <Subheading id='biography'>Biography:</Subheading>
               <TextArea register={register} id='biography_textarea' label='' enabled={editEnabled} />

               <HeaderText>Account Settings</HeaderText>

               <Subheading id='linked_account'>Linked Accounts:</Subheading>
               <GoogleLogo />
               <Subheading id='delete_account'>Delete Account:</Subheading>
               <Paragraph>
                  Permanently remove all account data, Wuphs, and likes. This cannot be
                  undone.
               </Paragraph>
               <DABtnWrapper>
                  <Button variant='secondary'>Delete Account</Button>
               </DABtnWrapper>
               <HeaderText>Visual Settings</HeaderText>
               <Subheading id='site_theme'>Site Theme:</Subheading>
               <Wrapper>
                  <select id='site_theme' onChange={handleThemeChange} disabled={!editEnabled} value={selectedThemeValue}>
                     <option value='light'>Light</option>
                     <option value='lava'>Lava</option>
                     <option value='dark'>Dark</option>
                  </select>
               </Wrapper>
               <Subheading id='text_size'>Text Size:</Subheading>
               <SelectInput register={register} id='font_size' label='' enabled={editEnabled}>
                  <option value='small'>Small</option>
                  <option value='medium'>Medium</option>
                  <option value='large'>Large</option>
               </SelectInput>
            </div>
         </AccSetLayout>
      </Container>
   )
}

export default withAuth(AccountSettings)

const UsernameTxtStyling = styled.div`
display: flex;
`
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
color: ${props => props.theme.colors.darkestBlue};;
font-weight: bold;
font-size: 1rem;
`
const HeaderText = styled.div`
font-size: 2rem;
font-weight: bold;
border: none;
text-align: left;
margin-top: 3rem;
color: ${props => props.theme.colors.darkestBlue};
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
