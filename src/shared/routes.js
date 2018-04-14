// @flow

// GET routes
export const HOME_PAGE_ROUTE = '/'
export const ABOUT_PAGE_ROUTE = '/about'
export const LOBBY_PAGE_ROUTE = '/lobby'
export const LOGIN_PAGE_ROUTE = '/login'
export const REGISTER_PAGE_ROUTE = '/register'

// POST routes
export const USER_REGISTER_ROUTE = '/register'
export const USER_LOGIN_ROUTE = '/login'
export const USER_LOGOUT_ROUTE = '/logout'
export const LIST_ROOMS_ROUTE = '/list_rooms'
export const CREATE_ROOM_ROUTE = '/create_room'
export const POST_MESSAGE_ROUTE = '/post_message'
export const GET_MESSAGES_ROUTE = '/get_messages'

export const getMessagesRoute = (id?: string) => `/get_messages/${id || ':id'}`
export const jamPageRoute = (id?: string) => `/jam/${id || ':id'}`
export const userProfilePageRoute = (id?: string) => `/user/${id || ':id'}`
