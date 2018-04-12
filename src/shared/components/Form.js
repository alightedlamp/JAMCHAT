// @flow

import React from 'react'

type Props = {
  title: string,
  children: Object,
  handleSubmit: Function,
}

const Form = ({ title, handleSubmit, children }: Props) => (
  <div className="form-container">
    {title && <h3>{title}</h3>}
    <form onSubmit={handleSubmit}>{children}</form>
  </div>
)

export default Form
