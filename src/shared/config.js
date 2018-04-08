export const STATIC_PATH = '/static'
export const APP_NAME = 'JAMCHAT.CLUB'
export const APP_DESCRIPTION = 'JAMCHAT.CLUB is a full stack JavaScript application which lets users create and join chat rooms in which they get to choose an instrument to play while chatting with others.'

export const APP_CONTAINER_CLASS = 'root'
export const APP_CONTAINER_SELECTOR = `.${APP_CONTAINER_CLASS}`

export const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/jamchat'
export const WEB_PORT = process.env.PORT || 3000
export const WDS_PORT = 3001

export const IO_CONNECT = 'connect'
export const IO_DISCONNECT = 'disconnect'
export const IO_CLIENT_HELLO = 'IO_CLIENT_HELLO'
export const IO_CLIENT_JOIN_ROOM = 'IO_CLIENT_JOIN_ROOM'
export const IO_SERVER_HELLO = 'IO_SERVER_HELLO'
