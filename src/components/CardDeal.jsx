import React from 'react'
import { card } from '../assets'
import Button from './Button'
import styles, { layout } from '../style'
import binancehome from '../assets/binancehome.png'

const CardDeal = () => {
  return (
    <section className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>Find a better card deal <br className='sm:block hidden'/>in few easy steps.</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Maximize your profits on Binance with our proven crypto signals. <br></br>Experience the power of our Binance-specific crypto signals for superior results.
        </p>       <a href="https://t.me/+akbcbJyFIHI45NDc0">
        <Button styles='mt-10'/></a>
      </div>
      <div className={layout.sectionImg}>
        <img
          src={binancehome}
          alt='card'
          className='w-[1400px] h-[100%] relative z-[5]'
        />
      </div>
    </section>
  )
}

export default CardDeal
