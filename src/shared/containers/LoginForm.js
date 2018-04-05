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
    const data = e.target
    dispatch(loginUser(data))
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(Form)
