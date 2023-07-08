import React from 'react'
import { apple,google} from '../assets'
import styles, { layout } from '../style'
import binance8 from '../assets/binance8.png'

const Billing = () => {
  return (
    <section id='product' className={layout.sectionReverse}>
      <div className={layout.sectionImgReverse}>
        <img
          src={binance8}
          alt='binance'
          className='w-[100%] h-[100%] relative z-[5]'
        />
        <div className='absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient'/>
        <div className='absolute z-[0] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient'/>
      </div>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>Easily control your <br className='sm:block hidden'/> billing & invoicing.</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Get ready for our challenge - Pay with Binance!
        </p>
        <div className='flex flex-row flex-wrap sm:mt-10 mt-6'>
        <a href="https://apps.apple.com/us/app/binance-buy-bitcoin-crypto/id1436799971">
          <img
            src={apple}
            alt='app-store'
            className='w-[128px] h-[42px] object-contain mr-5 cursor-pointer'
          /></a>
        <a href="https://play.google.com/store/apps/details?id=com.binance.dev">  <img
            src={google}
            alt='google-play'
            className='w-[128px] h-[42px] object-contain cursor-pointer'
          /></a>
        </div>
      </div>  
    </section>
  )
}

export default Billing
