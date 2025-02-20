'use client'
import React, { useEffect, useRef, useState } from 'react'
import './parceiros.scss'
import '../animacao.scss'
import Count from '../Count'

export default function Parceiros() {
    const [visible, setVisible] = useState(false);
      const ref = useRef(null);
    
      useEffect(() => {
        const observe = new IntersectionObserver(
          (entries) => {
            const entry = entries[0];
            if (entry.isIntersecting) {
              setVisible(true);
              observe.disconnect();
            }
          }, {
            threshold: 0.9
          }
        );
    
        if(ref.current){
          observe.observe(ref.current)
        }
    
        return () => {
          if (ref.current) {
            observe.unobserve(ref.current);
          }
        };
      }, []);

  return (
    <div id='parceiros'>
        <h2>Parceiros</h2>
        <div id='parceiros-logos'>
            <div id='parceiros-logos-holder'>
              <div id='color-b'><img src="/logo-1.png" alt="" /></div>
              <div id='color-b'><img src="/logo-2.png" alt="" /></div>
              <div id='color-b'><img src="/logo-3.png" alt="" /></div>
              <div id='color-b'><img src="/logo-4.png" alt="" /></div>
              <div id='color-b'><img src="/logo-5.png" alt="" /></div>
            </div>
        </div>
        <div id='infos' ref={ref}>
            <div className='pnum projetos'>
                {visible && <Count numero={125} duracao={1000} /> }
                <span className='projetos'>Projetos criados</span>
            </div>
            <div className='pnum experiencia'>
                {visible && <Count numero={12} duracao={500} />}
                <span className='projetos'>Anos de experiencia</span>
            </div>
            <div className='pnum satisfacao'>
                {visible && <Count numero={250} duracao={1000} />}
                <span className='projetos'>Clientes satisfeitos</span>
            </div>
        </div>
    </div>
  )
}
