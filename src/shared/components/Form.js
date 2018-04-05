// @flow

import React from 'react'

type Props = {
  title: string,
  handleSubmit: Function,
}

const Form = ({ title, handleSubmit }: Props) => (
  <div className="form-container">
    <h3>{title}</h3>
    <form onSubmit={handleSubmit}>
      <label htmlFor="username">Username:</label> <input type="text" name="username" />
      <label htmlFor="password">Password:</label> <input type="password" name="password" />
      <button type="submit">Submit</button>
    </form>
  </div>
)

export default Form
