import React from 'react'
import styled from 'styled-components'
import FormInput from './forms/FormInput'
import SelectInput from './forms/SelectInput'
import TextArea from './forms/TextArea'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import Button from './Button'
import * as yup from 'yup'
import Title from './styledComponents/Title'

const schema = yup.object({
  username: yup.string().min(4, 'Minimum length is 4').required('Required'),
  animal: yup.string().required('Required'),
  message: yup.string().required('Required'),
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

  const onSubmit = ({ username, animal, message }) => {
    alert(`username: ${username}, animal: ${animal}, message: ${message}`)
  }

  return (
    <SettingBorder>
      <Title>WUPHF</Title>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Watchs>
          <Watch>username: {watch('username')}</Watch>
          <Watch>animal: {watch('animal')}</Watch>
          <Watch>message: {watch('message')}</Watch>
        </Watchs>

        <FormInput
          id="username"
          label="Username"
          register={register}
          error={errors.username}
        />
        <SelectInput register={register} id="animal" label="Your Animal">
          <option value="dog">Dog</option>
          <option value="cat">Cat</option>
          <option value="bird">Bird</option>
          <option value="hamster">Hamster</option>
          <option value="owl">Owl</option>
          <option value="monkey">Monkey</option>
          <option value="tanuki">Tanuki</option>
          <option value="pig">Pig</option>
          <option value="bunny">Bunny</option>
          <option value="panda">Panda</option>
        </SelectInput>

        <TextArea
          id="message"
          label="Test Message"
          register={register}
          error={errors.message}
          rows="3"
        />

        <Button variant="primary" type="submit" disabled={isSubmitting}>
          Submit
        </Button>
      </form>
    </SettingBorder>
  )
}

const Watchs = styled.div`
  margin-bottom: 1rem;
`

const Watch = styled.h3`
  margin-bottom: 0.3em;
  font-size: 1.18rem;
  font-weight: 600;
  line-height: 1.5em;
`

const SettingBorder = styled.div`
  border: 1px solid #adadad;
  border-radius: 15px;
  padding: 1.5rem;
  /* margin: 10px; */
`

export default SettingsForm
