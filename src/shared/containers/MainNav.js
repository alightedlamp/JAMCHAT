import { connect } from 'react-redux'

import MainNav from '../components/nav/MainNav'

import { leaveRoom } from '../actions/jamroom'

const mapStateToProps = state => ({
  user: state.user,
})

const mapDispatchToProps = dispatch => ({
  handleLeave: (e) => {
    e.preventDefault()
    dispatch(leaveRoom())
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(MainNav)
