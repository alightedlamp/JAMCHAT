// @flow

import React from 'react'
import styled from 'styled-components'

const Room = styled.div`
  margin: 20px 0;
  padding: 5px;
  transition: 0.2s;

  &:hover {
    box-shadow: 0px 3px 10px 0px rgba(0, 0, 255, 0.2);
  }
`

const RoomTitle = styled.h3`
  font-size: 1.3em;
  font-weight: bold;
  padding-bottom: 5px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.3);
  margin-bottom: 10px;
`

const UsersList = styled.ul`
  margin: 10px 0;
`

const ActiveUsersHeading = styled.h4`
  font-size: 1.2em;
  font-weight: bold;
`

const Channel = props => (
  <Room>
    <RoomTitle>
      <strong>{props.title}</strong> started by {props.createdBy}
    </RoomTitle>
    <p>at: {props.createdAt}</p>
    <UsersList>
      <ActiveUsersHeading>Active Users:</ActiveUsersHeading>
      {props.users && props.users.map(user => <li>{user.username}</li>)}
    </UsersList>
    <button value={props.roomId}>Join Jam</button>
  </Room>
)

export default Channel
