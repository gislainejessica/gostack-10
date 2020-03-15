import React from 'react'
import { useRouteMatch, useLocation } from 'react-router-dom';

import logo from '../../assets/fastfeetlogo.svg'

import { Container, Navegation, Out, Nav } from './styles'

export default function Header() {
  const location = useLocation() 

  let match = useRouteMatch({
    path: location.pathname,
    exact: true
  });

  const active = false  ||  match ? "active" : ""

  return (
    <Container>
     <Nav>
      <Navegation to="/">
          <img src={logo} alt="logo"/>
        </Navegation>
      
        <nav>
          <Navegation to = "/" active={match.path.includes("/")  ? active : ""} >
            <p>ENCOMENDAS</p>
          </Navegation>
          <Navegation to = "/" active={match.path.includes("/.")  ? active : ""} >
            <p>ENTREGADORES</p>
          </Navegation>
          <Navegation to = "/" active={match.path.includes("/.")  ? active : ""} >
            <p>DESTINATÁRIOS</p>
          </Navegation>
          <Navegation to = "/" active={match.path.includes("/.")  ? active : ""} >
            <p>PROBLEMAS</p>
          </Navegation>
        </nav>
     </Nav>
      <Out>
        <p> Admin FastFeet </p>
        <span> sair do sistema </span>
      </Out>
    </Container>
  )
}