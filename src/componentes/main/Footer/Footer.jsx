import React from 'react'
import './footer.scss'

export default function Footer() {
  return (
    <>
        <div id='footer'>
            <div id='header-logo'>
                <div id='header-logo-img'>
                    <img src="/logo-site.png" alt="logo" />
                </div>
                <div id='header-logo-text'>
                <h2>Tecno Lab</h2>
                <span>Conectando Inovação e Tecnologia para o Sucesso do Seu Negócio</span>
                </div>
            </div>
            <div id='lista'>
                <ul>
                    <h4>INSTITUCIONAL</h4>
                    <li>• Home</li>
                    <li>• Soluções</li>
                    <li>• Sobre nós</li>
                    <li>• Produtos</li>
                    <li>• Contato</li>
                </ul>
                <ul>
                    <h4>CONTATO</h4>
                    <li>Email: contato@contato.com.br</li>
                    <li>Telefone: (11) 1234-5678</li>
                </ul>
                <div id='sociais'>
                    <h4>Rede Social</h4>
                    <div id='icons'>
                        <i className="bi bi-instagram"></i>
                        <i className="bi bi-linkedin"></i>
                        <i className="bi bi-facebook"></i>
                    </div>
                </div>
            </div>
        </div>
        <div id='desenvolvedor'>
            <span>© 2025 - Todos direitos reservados.</span>
            <span>Criado por <a href="https://github.com/alex91168">Alex Batista</a></span>
        </div>
    </>
  )
}
