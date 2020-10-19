import React, { useState, useEffect } from 'react'
import { Link, Switch, withRouter } from 'react-router-dom'

function Home(props) {
  console.log(props)
  return (
    <>
      <h1>Home</h1>
      <a href="/todo">a link to todopage</a>
      <hr />
      <Link to="/todo">Link component to todopage</Link>
    </>
  )
}

export default withRouter(Home)
