import React from 'react'

import Fundo from '../../components/Background'
import Header from '../../components/Header'
import Bitt from '../../components/Button'
import Tabela from '../../components/TableList'

export default function Destinatarios() {
  return (
    <Fundo>
      <Header />
      <h1> Gerenciando Destinatários </h1>
      <Tabela />
      <Bitt type="secondary">  salvar </Bitt>
    </Fundo>
  )
}