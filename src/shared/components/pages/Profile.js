// @flow

import React, { Component } from 'react'

class Profile extends Component {
  state = {
    user: '',
  }

  render() {
    return (
      <div>
        <header className="subheader">
          <h2>User Profile</h2>
        </header>
        <section className="content">
          <p>This is a user profile page.</p>
        </section>
      </div>
    )
  }
}

export default Profile
