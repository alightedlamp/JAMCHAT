// @flow

import React from 'react'
import styled from 'styled-components'

import Footer from '../Footer'
import PageWrapper from '../PageWrapper'
import ContentBlock from '../ContentBlock'
import LoginForm from '../../containers/LoginForm'

const Field = styled.div`
  margin: 20px 0;
`

const Login = () => (
  <PageWrapper>
    <ContentBlock>
      <h2 className="f2 lh-title mt3">Login</h2>
      <LoginForm>
        <Field>
          <label htmlFor="username">Username:</label> <input type="text" name="username" />
        </Field>
        <Field>
          <label htmlFor="password">Password:</label> <input type="password" name="password" />
        </Field>
      </LoginForm>
    </ContentBlock>
    <Footer />
  </PageWrapper>
)

export default Login
