import React from 'react'
import './header.scss'
export default function Header() {
  return (
    <header>
      <div id='header-logo'>
        <div id='header-logo-img'>
          <img src="/logo-site.png" alt="logo empresa" />
        </div>
        <div id='header-logo-text'>
          <h2>Tecno Lab</h2>
          <p>Conectando Inovação e Tecnologia para o Sucesso do Seu Negócio</p>
        </div>
      </div>

      <div id='nav-menu'>
        <span>Home</span>
        <span>Sobre nós</span>
        <span>Soluções</span>
        <span>Contato</span>
      </div>

      <div id='nav-sociais'>
        <i className="bi bi-instagram"></i>
        <i className="bi bi-whatsapp"></i>
        <i className="bi bi-linkedin"></i>
      </div>
      <div id='nav-separador'></div>
    </header>
  )
}
