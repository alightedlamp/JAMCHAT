// @flow

import React from 'react'
import styled from 'styled-components'

import RegisterForm from '../../containers/RegisterForm'

const Page = styled.section`
  top: 75px;
  width: 100%;
`

const Register = () => (
  <Page>
    <h2>Register</h2>
    <RegisterForm />
  </Page>
)

export default Register
