// @flow

import { connect } from 'react-redux'

import { joinRoom } from '../actions/jamroom'

import Button from '../components/Button'

const mapDispatchToProps = dispatch => ({
  handleClick: (e) => {
    e.preventDefault()
    dispatch(joinRoom({ id: e.target.value }))
  },
})

export default connect(null, mapDispatchToProps)(Button)
