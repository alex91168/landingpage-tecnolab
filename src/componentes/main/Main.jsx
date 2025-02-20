import React from 'react'
import Banner from './Banner/Banner.jsx'
import Sobre from './Sobre/Sobre.jsx'
import Atuacao from './Atuacao/Atuacao.jsx'
import Diferenciais from './Diferenciais/Diferenciais.jsx'
import Parceiros from './Parceiros/Parceiros.jsx'
import Contato from './Contato/Contato.jsx'
import Lazyscroll from './Lazyscroll.jsx'

export default function Main() {
  
  return (
    <>
        <Banner />
        <Lazyscroll style={{height: '60vh'}}>
        <Sobre />
        </Lazyscroll>

        <Lazyscroll  style={{height: '60vh'}}>
          <Atuacao />
        </Lazyscroll>

        <Diferenciais />

        <Parceiros />

        <Contato />
    </>
  )
}
