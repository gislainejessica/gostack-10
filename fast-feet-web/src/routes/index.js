import React from 'react'
import { BrowserRouter, Switch } from 'react-router-dom'
import '../config/Reactotron'

import GlobalStyle from '../styles/global'
import Route from './Route';  

import Destinatarios from '../pages/Destinatarios'
import Encomendas from '../pages/Encomendas'
import Entregadores from '../pages/Entregadores'
import Login from '../pages/Login'
import Problemas from '../pages/Problemas'

export default function Routes() {
  return (

<> 
  <GlobalStyle/>
  <BrowserRouter>
    <Switch>
      <Route path='/destinatarios' exact component={Destinatarios}  />
      <Route path='/encomendas' exact component={Encomendas} />
      <Route path='/entregadores' exact component={Entregadores} />
      <Route path='/' exact component={Login} />
      <Route path='/problemas' exact component={Problemas} />
    </Switch>
  </BrowserRouter>
</>
  )
}