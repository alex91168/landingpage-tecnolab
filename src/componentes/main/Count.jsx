'use client'

import React , {useEffect, useState} from 'react'

export default function Count({numero, duracao}) {
    const [count, setCount] = useState(0);

    useEffect(() => {
        let contador = null;

        const step = (x) => {
            if(!contador) contador = x;
            const processo = Math.min((x - contador) / duracao, 1);
            setCount(Math.floor(processo * numero));

            if(processo < 1 ) {
                requestAnimationFrame(step);
            }
        }
        
        requestAnimationFrame(step);
    }, [numero, duracao]);

  return <div className='count-number'>{count}+</div>
}
