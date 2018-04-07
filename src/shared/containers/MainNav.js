import { connect } from 'react-redux'

import MainNav from '../components/nav/MainNav'

const mapStateToProps = (state) => {
  console.log('MainNav map state to props called, state is:')
  console.log(state)
  return {
    user: state.user,
  }
}

export default connect(mapStateToProps)(MainNav)
