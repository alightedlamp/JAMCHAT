// @flow

import { connect } from 'react-redux'

import { loginUser } from '../actions/user'

import Form from '../components/Form'

const mapDispatchToProps = dispatch => ({
  handleSubmit: (e) => {
    e.preventDefault()
    dispatch(loginUser({
      username: e.target.username.value,
      password: e.target.password.value,
    }))
  },
})

export default connect(null, mapDispatchToProps)(Form)
