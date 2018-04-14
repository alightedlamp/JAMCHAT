// @flow

import React from 'react'

type Props = {
  title: string,
  room: string,
  user: string,
  children: Object,
  handleSubmit: Function,
}

const Form = ({
  title, handleSubmit, room, user, children,
}: Props) => (
  <div className="form-container">
    {title && <h3>{title}</h3>}
    <form onSubmit={handleSubmit}>
      {room && <input type="hidden" name="room" value={room} />}
      {user && <input type="hidden" name="user" value={user} />}
      {children}
    </form>
  </div>
)

export default Form
