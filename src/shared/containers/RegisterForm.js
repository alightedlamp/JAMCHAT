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
    const data = {}
    data.username = e.target.username.value
    data.password = e.target.password.value
    dispatch(registerUser(data))
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(Form)
