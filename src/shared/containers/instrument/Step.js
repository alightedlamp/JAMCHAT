// @flow

import { connect } from 'react-redux'

import Step from '../../components/instrument/Step'

import { editSequence } from '../../actions/sequencer'

const mapDispatchToProps = dispatch => ({
  handleClick: (e) => {
    const newNote = e.target.value.split('-')

    dispatch(editSequence({
      idx: newNote[0],
      note: newNote[1],
    }))
  },
})

export default connect(null, mapDispatchToProps)(Step)
