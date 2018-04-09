// @flow

import React from 'react'
import Helmet from 'react-helmet'
import styled from 'styled-components'

import Footer from '../Footer'
import PageWrapper from '../PageWrapper'
import ContentBlock from '../ContentBlock'
import RegisterForm from '../../containers/RegisterForm'

const Field = styled.div`
  margin: 20px 0;
`

const title = 'Register'

const Register = () => (
  <PageWrapper>
    <Helmet title={title} meta={[{ property: 'og:title', content: title }]} />
    <ContentBlock>
      <h2 className="f2 lh-title mt3">Register</h2>
      <p className="mv3 lh-copy">
        Don&rsquo;t be such a lurker &mdash; sign up and start a jam! Share your jam link with your
        friends to collaborate.
      </p>
      <RegisterForm>
        <Field>
          <label htmlFor="name">Name: <input type="text" name="name" /></label>
        </Field>
        <Field>
          <label htmlFor="email">E-mail: <input type="text" name="email" /></label>
        </Field>
        <Field>
          <label htmlFor="username">Username: <input type="text" name="username" /></label>
        </Field>
        <Field>
          <label htmlFor="password">Password: <input type="password" name="password" /></label>
        </Field>
      </RegisterForm>
    </ContentBlock>
    <Footer />
  </PageWrapper>
)

export default Register
