import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import GlobalStyle from '../styles/global'

import Home from '../pages/Home'

export default function Routes() {
  return (

<> 
    <GlobalStyle/>
  <BrowserRouter>
    <Switch>
      <Route path='/' exact component={Home} />
    </Switch>
  </BrowserRouter>
</>
  )
}