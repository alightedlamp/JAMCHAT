/* ////////////////////////////////////////
//      View Action Types
//////////////////////////////////////// */

export const TOGGLE_LOBBY_SIDEBAR = 'TOGGLE_LOBBY_SIDEBAR'
export const TOGGLE_MENU_SIDEBAR = 'TOGGLE_MENU_SIDEBAR'

/* ////////////////////////////////////////
//      User Action Types
//////////////////////////////////////// */

export const VALIDATE_USERNAME = 'VALIDATE_USERNAME'
export const VALIDATE_PASSWORD = 'VALIDATE_PASSWORD'

export const REGISTER_USER_REQUEST = 'REGISTER_USER_REQUEST'
export const REGISTER_USER_SUCCESS = 'REGISTER_USER_SUCCESS'
export const REGISTER_USER_FAIL = 'REGISTER_USER_FAIL'

export const LOGIN_USER_REQUEST = 'LOGIN_USER_REQUEST'
export const LOGIN_USER_SUCCESS = 'LOGIN_USER_SUCCESS'
export const LOGIN_USER_FAIL = 'LOGIN_USER_FAIL'

export const LOGOUT_USER_REQUEST = 'LOGOUT_USER_REQUEST'
export const LOGOUT_USER_SUCCESS = 'LOGOUT_USER_SUCCESS'
export const LOGOUT_USER_FAIL = 'LOGOUT_USER_FAIL'

export const SET_USER_INSTRUMENT_REQUEST = 'SET_USER_INSTRUMENT_REQUEST'
export const SET_USER_INSTRUMENT_SUCCESS = 'SET_USER_INSTRUMENT_SUCCESS'
export const SET_USER_INSTRUMENT_FAIL = 'SET_USER_INSTRUMENT_FAIL'

/* ////////////////////////////////////////
//      Lobby Action Types
//////////////////////////////////////// */

export const LIST_ROOMS_REQUEST = 'LIST_ROOMS_REQUEST'
export const LIST_ROOMS_SUCCESS = 'LIST_ROOMS_SUCCESS'
export const LIST_ROOMS_FAIL = 'LIST_ROOMS_FAIL'

export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'

/* ////////////////////////////////////////
//      Room Action Types
//////////////////////////////////////// */

export const CREATE_ROOM_REQUEST = 'CREATE_ROOM_REQUEST'
export const CREATE_ROOM_SUCCESS = 'CREATE_ROOM_SUCCESS'
export const CREATE_ROOM_FAIL = 'CREATE_ROOM_FAIL'

export const JOIN_ROOM_REQUEST = 'JOIN_ROOM_REQUEST'
export const JOIN_ROOM_SUCCESS = 'JOIN_ROOM_SUCCESS'
export const JOIN_ROOM_FAIL = 'JOIN_ROOM_SUCCESS'

export const LEAVE_ROOM_REQUEST = 'LEAVE_ROOM_REQUEST'
export const LEAVE_ROOM_SUCCESS = 'LEAVE_ROOM_SUCCESS'
export const LEAVE_ROOM_FAIL = 'LEAVE_ROOM_FAIL'

export const SET_JAM_BPM = 'SET_JAM_BPM'

/* ////////////////////////////////////////
//      Message Action Types
//////////////////////////////////////// */

export const POST_MESSAGE_REQUEST = 'POST_MESSAGE_REQUEST'
export const POST_MESSAGE_SUCCESS = 'POST_MESSAGE_SUCCESS'
export const POST_MESSAGE_FAIL = 'POST_MESSAGE_FAIL'

export const GET_MESSAGES_REQUEST = 'GET_MESSAGES_REQUEST'
export const GET_MESSAGES_SUCCESS = 'GET_MESSAGES_SUCCESS'
export const GET_MESSAGES_FAIL = 'GET_MESSAGES_FAIL'

export const RESET_MESSAGES = 'RESET_MESSAGES'

/* ////////////////////////////////////////
//      Instrument Action Types
//////////////////////////////////////// */

export const CREATE_INSTRUMENT_REQUEST = 'CREATE_INSTRUMENT_REQUEST'
export const CREATE_INSTRUMENT_SUCCESS = 'CREATE_INSTRUMENT_SUCCESS'
export const CREATE_INSTRUMENT_FAIL = 'CREATE_INSTRUMENT_FAIL'

export const ADJUST_USER_MIXER = 'ADJUST_USER_MIXER'
export const ADJUST_USER_FILTER = 'ADJUST_USER_FILTER'
export const MUTE_USER_CHANNEL = 'MUTE_USER_CHANNEL'
export const START_INSTRUMENT = 'START_INSTRUMENT'
export const STOP_INSTRUMENT = 'STOP_INSTRUMENT'
export const PAUSE_INSTRUMENT = 'PAUSE_INSTRUMENT'

/* ////////////////////////////////////////
//      Sequence Action Types
//////////////////////////////////////// */

export const EDIT_SEQUENCE_REQUEST = 'EDIT_SEQUENCE_REQUEST'
export const EDIT_SEQUENCE_SUCCESS = 'EDIT_SEQUENCE_SUCCESS'
export const EDIT_SEQUENCE_FAIL = 'EDIT_SEQUENCE_FAIL'

export const CLEAR_SEQUENCE_REQUEST = 'CLEAR_SEQUENCE_REQUEST'
export const CLEAR_SEQUENCE_SUCCESS = 'CLEAR_SEQUENCE_SUCCESS'
export const CLEAR_SEQUENCE_FAIL = 'CLEAR_SEQUENCE_FAIL'

/* ////////////////////////////////////////
//      Arrangement Action Types
//////////////////////////////////////// */

export const ADD_SEQUENCE_TO_ARRANGEMENT_REQUEST =
  'ADD_SEQUENCE_TO_ARRANGEMENT_REQUEST'
export const ADD_SEQUENCE_TO_ARRANGEMENT_SUCCESS =
  'ADD_SEQUENCE_TO_ARRANGEMENT_SUCCESS'
export const ADD_SEQUENCE_TO_ARRANGEMENT_FAIL =
  'ADD_SEQUENCE_TO_ARRANGEMENT_FAIL'

export const MOVE_SEQUENCE_IN_ARRANGEMENT_REQUEST =
  'MOVE_SEQUENCE_IN_ARRANGEMENT_REQUEST'
export const MOVE_SEQUENCE_IN_ARRANGEMENT_SUCCESS =
  'MOVE_SEQUENCE_IN_ARRANGEMENT_SUCCESS'
export const MOVE_SEQUENCE_IN_ARRANGEMENT_FAIL =
  'MOVE_SEQUENCE_IN_ARRANGEMENT_FAIL'

export const REMOVE_SEQUENCE_FROM_ARRANGEMENT_REQUEST =
  'REMOVE_SEQUENCE_FROM_ARRANGEMENT_REQUEST'
export const REMOVE_SEQUENCE_FROM_ARRANGEMENT_SUCCESS =
  'REMOVE_SEQUENCE_FROM_ARRANGEMENT_SUCCESS'
export const REMOVE_SEQUENCE_FROM_ARRANGEMENT_FAIL =
  'REMOVE_SEQUENCE_FROM_ARRANGEMENT_FAIL'
