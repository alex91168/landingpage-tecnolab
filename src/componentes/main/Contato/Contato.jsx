import React from 'react'
import './contato.scss'
export default function Contato() {
  return (
    <div id='contato'>
        <div id='contato-text'>
            <div id='text-1'>
                <h4>Vamos conversar?</h4>
                <span>Entre em contato e descubra como podemos ajudar o seu negócio.</span>
            </div>
            <div id='text-2'>
                <span>Nos siga em <br/>
                <span>nossas redes</span></span>
                <div id='sociais'>
                    <i className="bi bi-instagram"></i>
                    <i className="bi bi-linkedin"></i>
                    <i className="bi bi-facebook"></i>
                </div>
            </div>
        </div>

        <div id='contato-form'>
            <form action="">
                <input type="text" placeholder='Nome' />
                <input type="text" placeholder='Email' />
                <input type="text" placeholder='Telefone' />
                <textarea name="" id="" placeholder='Mensagem'></textarea>
                <button type=''>Enviar mensagem</button>
            </form>
        </div>
    </div>
  )
}
