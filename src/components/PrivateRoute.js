import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import Skelton from './skelton'

export const PrivateRoute = ({ component: Component, ...rest }) => {
  console.log('***', localStorage.getItem('user'))

  return (
    <Route
      {...rest} render={props => (
        localStorage.getItem('user')
          ? <Skelton>
            <Component {...props} />
          </Skelton>
          : <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
      )}
    />
  )
}
