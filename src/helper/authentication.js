import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
export const isLoggedIn = JSON.parse(localStorage.getItem('user'))

export function RedirectMachine (path) {
  return <Redirect to={path} />
}

export function authHeader () {
  // return authorization header with jwt token
  if (isLoggedIn && isLoggedIn.token) {
    return { Authorization: 'Bearer ' + isLoggedIn.token }
  } else {
    return {}
  }
}
