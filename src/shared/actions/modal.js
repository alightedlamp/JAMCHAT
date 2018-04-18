// @flow

import { createAction } from 'redux-actions'

import { TOGGLE_MODAL } from '../constants/actionTypes'

const toggleModal = createAction(TOGGLE_MODAL)

export default toggleModal
