import React from 'react'
import { useRouteMatch, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { signOut } from '../../store/modules/auth/actions';

import logo from '../../assets/fastfeetlogo.svg'

import { Container, Navegation, Out, Nav } from './styles'

export default function Header() {
  const dispatch = useDispatch()
  const location = useLocation() 

  let match = useRouteMatch({
    path: location.pathname,
    exact: true
  });

  const active = false  ||  match ? "active" : ""

  function handleSignOut(){
    dispatch(signOut())
  }

  return (
    <Container>
     <Nav>
        <Navegation to="/">
          <img src={logo} alt="logo"/>
        </Navegation>
      
        <nav>
          <Navegation to = "/encomendas" active={match.path.includes("/encomendas")  ? active : ""} >
            <p>ENCOMENDAS</p>
          </Navegation>
          <Navegation to = "/entregadores" active={match.path.includes("/entregadores")  ? active : ""} >
            <p>ENTREGADORES</p>
          </Navegation>
          <Navegation to = "/destinatarios" active={match.path.includes("/destinatarios")  ? active : ""} >
            <p>DESTINATÁRIOS</p>
          </Navegation>
          <Navegation to = "/problemas" active={match.path.includes("/problemas")  ? active : ""} >
            <p>PROBLEMAS</p>
          </Navegation>
        </nav>
     </Nav>
      <Out>
        <p> Admin FastFeet </p>
        <button onClick={()=> handleSignOut()}> sair do sistema </button >
      </Out>
    </Container>
  )
}