// @flow

import { connect } from 'react-redux'

import { logoutUser } from '../actions/user'
import Button from '../components/Button'

const mapStateToProps = () => ({
  label: 'Logout',
})

const mapDispatchToProps = dispatch => ({
  handleClick: () => {
    dispatch(logoutUser())
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(Button)
