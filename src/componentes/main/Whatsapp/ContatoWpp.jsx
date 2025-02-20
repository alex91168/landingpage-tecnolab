'use client'
import React, { useState, useEffect } from 'react'
import './wpp.scss'


export default function ContatoWpp() {
const [isClosed, setIsClosed] = useState(false)
  return (
    <>
    <div id='wpp' className={isClosed ? 'active': null}>
        <div id='close-wpp' onClick={() => setIsClosed(true)}>
            <i className="bi bi-x"></i>
        </div>
        <img src="/whatsapp.svg" alt="Whatsapp entre em contato conosco." id='svg-wpp'/>
    </div>
    <div id='open-wpp' className={isClosed ? 'active': null} onClick={() => setIsClosed(false)}>
        <i className="bi bi-caret-left-fill"></i>
    </div>
    </>
  )
}
