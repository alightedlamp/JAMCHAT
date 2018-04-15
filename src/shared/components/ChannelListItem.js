// @flow

import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
import styled from 'styled-components'

import JoinRoomButton from '../containers/JoinRoomButton'

const Room = styled.div`
  padding: 17px;
  margin: 30px 0;
  transition: 0.2s;
  background: white;
  width: 100%;
  box-shadow: 0px 3px 10px 0px lightgray;
`

const RoomTitle = styled.h3`
  font-size: 1.3em;
  font-weight: 300;
  padding-bottom: 13px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.3);
  margin-bottom: 10px;
`

const UsersList = styled.ul`
  margin: 17px 0;
  display: flex;
  flex-wrap: wrap;
`

const UsersListItem = styled.li`
  margin-right: 5px;
`

const ActiveUsersHeading = styled.h4`
  font-size: 1.2em;
  font-weight: bold;
  margin: 30px 0 15px 0;
`

const ChannelListItem = props => (
  <Room>
    <RoomTitle>
      <strong>{props.title}</strong> started by {props.createdBy}
    </RoomTitle>
    <p>at: {moment(props.createdAt).format('LLL')}</p>
    <ActiveUsersHeading>Active Users:</ActiveUsersHeading>
    <UsersList>
      {props.users &&
        props.users.map(user => <UsersListItem>{user.username}</UsersListItem>)}
    </UsersList>
    <JoinRoomButton name="room" value={props.roomId} label="Join Jam" />
  </Room>
)

ChannelListItem.propTypes = {
  title: PropTypes.string.isRequired,
  createdBy: PropTypes.string.isRequired,
  createdAt: PropTypes.instanceOf(Date).isRequired,
  users: PropTypes.arrayOf(PropTypes.Object).isRequired,
  roomId: PropTypes.number.isRequired,
}

export default ChannelListItem
