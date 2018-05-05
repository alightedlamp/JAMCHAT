import axios from 'axios'
import * as routes from '../routes'

export const registerUser = data => axios.post(routes.USER_REGISTER_ROUTE, data)

export const loginUser = data => axios.post(routes.USER_LOGIN_ROUTE, data)

export const logoutUser = () => axios.post(routes.USER_LOGOUT_ROUTE)

export const listRooms = () => axios.get(routes.LIST_ROOMS_ROUTE)

export const joinRoom = data =>
  axios.post(routes.jamPageRoute(data.room_id), { action: 'join' })

export const createRoom = data =>
  axios.post(routes.CREATE_ROOM_ROUTE, { ...data, action: 'create' })

export const leaveRoom = data =>
  axios.post(routes.jamPageRoute(data.room_id), {
    username: data.username,
    action: 'leave',
  })

export const postMessage = data => axios.post(routes.POST_MESSAGE_ROUTE, data)

export const getMessages = data => axios.get(routes.getMessagesRoute(data))
