import React, { Component, Fragment } from 'react'
import { Button } from 'react-bootstrap'

class ProfileComponent extends Component {
  constructor (props) {
    super(props)
    this.state = {

    }
    this.logout = this.logout.bind(this)
  }

  logout () {
    console.log('clicked on logout')
    localStorage.clear('user')
    this.props.history.push('/login')
  }

  render () {
    return (
      <>
        <h1>Profile Component</h1>
        <Button onClick={this.logout}>Logout</Button>
      </>

    )
  }
}

export default ProfileComponent
