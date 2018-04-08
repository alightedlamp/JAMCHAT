// @flow

import React from 'react'
import styled from 'styled-components'

type Props = {
  title: string,
  children: Object,
  handleSubmit: Function,
}

const Form = ({ title, handleSubmit, children }: Props) => (
  <div className="form-container">
    {title && <h3>{title}</h3>}
    <form onSubmit={handleSubmit}>
      {children}
      <button type="submit">Submit</button>
    </form>
  </div>
)

export default Form
