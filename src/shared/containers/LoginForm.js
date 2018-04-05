// @flow

import { connect } from 'react-redux'

import { loginUser } from '../actions/user'
import Form from '../components/Form'

const mapStateToProps = () => ({
  title: 'Login',
})

const mapDispatchToProps = dispatch => ({
  handleSubmit: (e) => {
    e.preventDefault()
    dispatch(loginUser({
      username: e.target.username.value,
      password: e.target.password.value,
    }))
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(Form)
