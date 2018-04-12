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
          <label htmlFor="username">
            Username: <input type="text" name="username" />
          </label>
        </Field>
        <Field>
          <label htmlFor="password">
            Password: <input type="password" name="password" />
          </label>
        </Field>
        <button type="submit">Submit</button>
      </LoginForm>
    </ContentBlock>
    <Footer />
  </PageWrapper>
)

export default Login
