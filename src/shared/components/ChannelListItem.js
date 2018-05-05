// @flow

import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import moment from 'moment'
import styled from 'styled-components'

import Button from './Button'

const Room = styled.div`
  padding: 27px;
  margin: 30px 0;
  transition: 0.2s;
  background: white;
  width: 100%;
  box-shadow: 0px 3px 10px 0px lightgray;
`

const RoomTitle = styled.h3`
  font-size: 1.3em;
  font-weight: 300;
  margin-bottom: 23px;
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

const ButtonSection = styled.div`
  margin: 10px 0;
`

const PlayButton = styled.button`
  height: 29px;
  width: 50px;
  border: 0;
  background: lightgray;
  color: dimgray;
`

const JoinButton = styled(Button)`
  margin: 0;
`

type Props = {
  title: string,
  createdAt: string,
  createdBy: string,
  roomId: string,
  users: Array<Object>,
}

const ChannelListItem = ({
  title,
  createdAt,
  createdBy,
  roomId,
  users,
}: Props) => {
  const userListSection = () => {
    if (users.length > 0) {
      const userItems = users.map(user => (
        <UsersListItem>{user.username}</UsersListItem>
      ))

      return (
        <div>
          <ActiveUsersHeading>Active Users:</ActiveUsersHeading>
          <UsersList>{userItems}</UsersList>
        </div>
      )
    }
  }

  return (
    <Room>
      <RoomTitle>
        <strong>{title}</strong>
      </RoomTitle>
      <p>
        Started by {createdBy} on {moment(createdAt).format('LLL')}
      </p>
      {userListSection()}
      <ButtonSection>
        <Link to={`/jam/${roomId}`}>
          <JoinButton>Join Room</JoinButton>
        </Link>
        <PlayButton>
          <i className="fa fa-play" />
        </PlayButton>
      </ButtonSection>
    </Room>
  )
}

ChannelListItem.propTypes = {
  title: PropTypes.string.isRequired,
  createdBy: PropTypes.string.isRequired,
  createdAt: PropTypes.instanceOf(Date).isRequired,
  users: PropTypes.arrayOf(PropTypes.Object).isRequired,
  roomId: PropTypes.number.isRequired,
}

export default ChannelListItem
