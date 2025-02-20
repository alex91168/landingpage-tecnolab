'use client'
import React, {useEffect, useRef, useState} from 'react'

export default function Lazyscroll({children, style}) {
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
        threshold: 0.01
      }
    );

    if(ref.current){
      observe.observe(ref.current)
    }

    return () => {
      if (ref.current && observe) {
        observe.disconnect();
      }
    };
  }, []);
  return <div ref={ref} style={style}>{visible && children}</div>
}
