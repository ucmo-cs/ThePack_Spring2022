import React, { useState } from 'react'
import propTypes from 'prop-types'
import styled from 'styled-components'
import Sidebar from '../components/Sidebar'
import FormInput from '../components/forms/FormInput'
import Button from '../components/Button'
import Avatar from '../components/Avatar'
import { useForm } from 'react-hook-form'
import SelectInput from '../components/forms/SelectInput'
import TextArea from '../components/forms/TextArea'
import withAuth from '../components/withAuth'
import Container from '../components/styledComponents/Container'
import GoogleLogo from '../components/GoogleLogo'

AccountSettings.propTypes = {
   //Use another import
   avatar: propTypes.string.isRequired,
   username: propTypes.string.isRequired,

   //make it it's own function
   biography: propTypes.string.isRequired,
   linked_accounts: propTypes.string.isRequired,
   delete_accounts: propTypes.string.isRequired,
}

function AccountSettings() {
   const {
      register,
      formState: { errors },
   } = useForm({
      mode: 'onTouched',
   })

   const [editEnabled, setEditEnabled] = useState(false)

   return (
      <Container>
         <AccSetLayout>
            <Sidebar />
            <div>
               <BtnTxtspace>
                  <HeaderText>Profile Settings</HeaderText>
                  <EditBtnWrapper>
                     <Button variant='secondary' onClick={() => setEditEnabled(!editEnabled)}>
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
               <p>
                  Permanently remove all account data, Wuphs, and likes. This cannot be
                  undone.
               </p>
               <DABtnWrapper>
                  <Button variant='secondary'>Delete Account</Button>
               </DABtnWrapper>
               <HeaderText>Visual Settings</HeaderText>
               <Subheading id='site_theme'>Site Theme:</Subheading>
               <SelectInput register={register} id='site_theme' label='' enabled={editEnabled}>
                  <option value='light'>Light</option>
                  <option value='dark'>Dark</option>
               </SelectInput>
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
color: black;
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
