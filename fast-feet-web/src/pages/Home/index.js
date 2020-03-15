import React from 'react'

import Fundo from '../../components/Background'
import Header from '../../components/Header'

import Bitt from '../../components/Button'

export default function Home() {
  return (
    <Fundo>
      <Header />
      <Bitt type="secondary">  salvar </Bitt>
    </Fundo>
  )
}