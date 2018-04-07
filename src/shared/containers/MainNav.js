import { connect } from 'react-redux'

import MainNav from '../components/nav/MainNav'

const mapStateToProps = state => ({
  user: state.user,
})

export default connect(mapStateToProps)(MainNav)
