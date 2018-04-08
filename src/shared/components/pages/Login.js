// @flow

import React from 'react'
import Helmet from 'react-helmet'
import styled from 'styled-components'

import Footer from '../Footer'
import PageWrapper from '../PageWrapper'
import ContentBlock from '../ContentBlock'
import LoginForm from '../../containers/LoginForm'

const Field = styled.div`
  margin: 20px 0;
`

const title = 'Login'

const Login = () => (
  <PageWrapper>
    <Helmet title={title} meta={[{ property: 'og:title', content: title }]} />
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
