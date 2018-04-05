// @flow

import React from 'react'
import styled from 'styled-components'

import LoginForm from '../../containers/LoginForm'

const Page = styled.section`
  top: 75px;
  width: 100%;
`

const Login = () => (
  <Page>
    <h2>Login</h2>
    <LoginForm />
  </Page>
)

export default Login
