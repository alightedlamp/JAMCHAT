// @flow

import { connect } from 'react-redux'

import { registerUser } from '../actions/user'
import Form from '../components/Form'

const mapDispatchToProps = dispatch => ({
  handleSubmit: (e) => {
    e.preventDefault()
    // This needts to handle any values entered from the form
    dispatch(registerUser({
      username: e.target.username.value,
      password: e.target.password.value,
    }))
  },
})

export default connect(null, mapDispatchToProps)(Form)
