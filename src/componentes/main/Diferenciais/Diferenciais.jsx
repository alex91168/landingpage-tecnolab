import React, { useEffect, useState, useRef } from 'react';
import './diferenciais.scss'
import '../animacao.scss'

export default function Diferenciais() {
    const [offsetY, setOffsetY] = useState(0);
    const [text, setText] = useState(0); 
    let interval = useRef(null);
    
    useEffect(() => {
      if (typeof window === "undefined") return;
      const handleScroll = () => {
        setOffsetY(window.scrollY * 0.3); 
      };
  
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
      interval.current = setInterval(() => {
        setText(prevText => (prevText + 1) % 3);
      }, 7500);
      return () => clearInterval(interval.current);
    }, []);

    const nextPage = (x) => {
      setText(x);
      clearInterval(interval.current);
      interval.current = setInterval(() => {
        setText(prevText => (prevText + 1) % 3);
      }, 7500);
    }
    
  return (
    <div id='diferenciais-container'>
        <div id='img-container-background' style={{transform: `translateY(${offsetY}px)`}}></div>
        <div id='diferenciais-text'>
            <div id='diferenciais-title'>
            <h3>Nosso diferencial</h3>
            <div id='diferenciais-text-container'>
              {text === 0 && <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor corrupti vel, sint voluptatum nostrum sunt, doloremque fugit asperiores itaque pariatur aliquam sit quisquam expedita repellat? Explicabo neque beatae unde animi dignissimos quo ipsa pariatur, veritatis optio mollitia asperiores itaque repudiandae nesciunt, maiores maxime iste id qui a omnis magni libero. Nulla laborum necessitatibus assumenda? In voluptatibus animi libero blanditiis architecto, voluptatum illum similique facere quae quisquam eaque eos pariatur assumenda vero qui totam commodi numquam iste odit enim perspiciatis quibusdam nam ea reprehenderit. Nulla, magni? Tenetur itaque quasi magnam, saepe et tempora quis ipsum rerum iusto atque mollitia consequatur esse nostrum pariatur, error nobis nemo? Commodi, corporis! Reiciendis a veritatis iste similique est distinctio saepe, tempora totam quasi exercitationem itaque dolorem eum natus sint accusamus animi obcaecati quae cum? Assumenda dolorum sit voluptates eaque. Maiores itaque sit similique ad deleniti!</p> }
              {text === 1 && <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium obcaecati nulla sapiente molestias mollitia blanditiis, ipsum facilis placeat ipsa consectetur doloremque fugiat, aperiam soluta qui? Cumque dolorem eaque velit ducimus mollitia eum unde alias nulla quidem dolore tempore id nihil provident fuga, quisquam quae sunt non aliquam sed nam? Hic, quaerat quis quibusdam modi laboriosam vero a iste laudantium, sapiente tenetur facere eveniet sed odit, ratione deserunt ipsa quam est cumque natus! Quia quisquam minus dolor asperiores libero sit at consequatur animi amet nam. Odio, earum iure deserunt, quas perferendis molestiae tempore eligendi ab eum nihil ipsam commodi recusandae. Quaerat aut iusto voluptates inventore adipisci similique vel dolorem impedit, qui quibusdam voluptatem aliquam soluta voluptas assumenda natus ea suscipit provident libero harum ullam.</p> }
              {text === 2 && <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto quidem tempore eligendi possimus culpa reprehenderit voluptates debitis eum? Culpa at iste praesentium, similique repellendus, qui minima veritatis velit, est illo sed nostrum iusto tempora obcaecati facilis omnis. Odit porro fuga laboriosam modi eum, cumque sit, autem provident nesciunt magnam maiores, alias iusto? Error, eos, dicta dolorum sint, accusamus temporibus amet iste totam illum itaque quis neque! Aperiam eveniet, quas necessitatibus soluta rerum sit rem ex porro facilis doloremque quis velit? Tenetur vel voluptatum, quae quas, ducimus eveniet facilis quibusdam neque corporis impedit laboriosam veniam minus voluptate itaque saepe!</p> }
            </div>
            </div>
            <div id='diferenciais-img'>
                <div id='img'>
                  {text === 0 && <img src="/photo-eq.png" alt="Imagem de especialistas" />}
                  {text === 1 && <img src="/photo-sup.jpg" alt="Imagem de atendimento personalizado" />}
                  {text === 2 && <img src="/photo-co.jpg" alt="Imagem de compromisso com a qualidade" />}
                </div>
                <div id="bullet">
                    <input type="checkbox" id="bullet-1" onChange={() => nextPage(0)} checked={text === 0}/>
                    <label htmlFor="bullet-1" ></label>
                    
                    <input type="checkbox" id="bullet-2" onChange={() => nextPage(1)} checked={text === 1}/>
                    <label htmlFor="bullet-2" ></label>
                    
                    <input type="checkbox" id="bullet-3" onChange={() => nextPage(2)} checked={text === 2}/>
                    <label htmlFor="bullet-3" ></label>
                </div>
                <div id='text-diferenciais-title'>
                  {text === 0 && <h6>Equipe especializada</h6>}
                  {text === 1 && <h6>Atendimento Personalizado</h6>}
                  {text === 2 && <h6>Compromisso com a Qualidade</h6>}
                </div>
            </div>
        </div> 
    </div>
  )
}
