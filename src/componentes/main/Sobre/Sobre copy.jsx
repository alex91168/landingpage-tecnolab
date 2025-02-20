'use client'
import React from 'react'
import { motion } from 'framer-motion'
import './sobre.scss'

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 1 } }
};

const slideLeft = {
  hidden: { x: -100, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 1 } }
};

const slideRight = {
  hidden: { x: 100, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 1 } }
};

const letterPopping = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { type: "spring", stiffness: 100, damping: 10, delay: 0.2 }
  }
};

export default function Sobre() {
  return (
    <motion.div id='sobre-container' initial="hidden" animate="visible">
      
      <motion.div id='sobre-img' variants={slideLeft} initial="hidden" animate="visible">
        <img src="/photo-1.png" alt="Sobre nós" />
      </motion.div>
      
      <motion.div id='sobre-box-fluid' variants={slideRight} initial="hidden" animate="visible">
        <motion.h2 variants={letterPopping} initial="hidden" animate="visible">Sobre Nós</motion.h2>
        <motion.p variants={fadeIn} initial="hidden" animate="visible">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, culpa corrupti! 
          Doloremque possimus voluptatem recusandae rem voluptas aspernatur porro eos aperiam vel 
          officia, reiciendis consequuntur iste saepe optio quas perspiciatis sunt quod vitae nisi 
          ipsam soluta corporis modi commodi ab.
        </motion.p>
      </motion.div>

    </motion.div>
  );
}
