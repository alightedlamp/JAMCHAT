// @flow

import { connect } from 'react-redux'

import { registerUser } from '../actions/user'
import Form from '../components/Form'

const mapStateToProps = () => ({
  title: 'Register',
})

const mapDispatchToProps = dispatch => ({
  handleSubmit: (e) => {
    e.preventDefault()
    dispatch(registerUser({
      username: e.target.username.value,
      password: e.target.password.value,
    }))
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(Form)
