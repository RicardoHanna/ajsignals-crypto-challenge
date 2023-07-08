import React from 'react'
import styles from '../style'
import Button from './Button'

const CTA = () => {
  return (
    <section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}>
      <div className='flex-1 flex flex-col'>
        <h2 className={styles.heading2}>Let's try our service now!</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        AJSignals has truly helped me navigate the complex world of cryptocurrency trading. Their team is knowledgeable, responsive, and provides valuable insights. My portfolio has grown thanks to their expert guidance
        </p>
      </div>
      <div className={`${styles.flexCenter} sm:ml-10 ml-0`}>
      <a href="https://t.me/+akbcbJyFIHI45NDc0"><Button/></a>
      </div>
    </section>
  )
}

export default CTA
