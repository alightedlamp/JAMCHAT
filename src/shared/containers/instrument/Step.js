// @flow

import { connect } from 'react-redux'

import Step from '../../components/instrument/Step'

import { editSequence } from '../../actions/sequencer'

const mapDispatchToProps = dispatch => ({
  handleClick: (e) => {
    dispatch(editSequence(e.target.value))
  },
})

export default connect(null, mapDispatchToProps)(Step)
