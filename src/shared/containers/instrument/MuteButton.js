// @flow

import { connect } from 'react-redux'

import Button from '../../components/Button'

import { toggleInstrumentMute } from '../../actions/instrument'

const mapStateToProps = state => ({
  userId: state.user.id,  
})

const mapDispatchToProps = dispatch => ({
  handleClick: (userId) => {
    dispatch(toggleInstrumentMute(userId))
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(Button)
