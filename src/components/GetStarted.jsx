import React from 'react'
import styles from '../style'
import { arrowUp } from '../assets'

const GetStarted = () => (
    <div className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-blue-gradient p-[2px] cursor-pointer hover:scale-110 duration-300 active:scale-90 will-change-transform`}> {/*Added animations! */}
      <div className={`${styles.flexCenter} flex-col`}>
      <div className={`${styles.flexStart} flex-row`}>
        <p className="font-poppins font-medium text-[18px] leading-[23.4px]">
          <span className="text-white">Get</span>
        </p>
        <img src={arrowUp} alt="arrow-up" className="w-[23px] h-[23px] object-contain" />
      </div>
      <p className="font-poppins font-medium text-[18px] leading-[23.4px]">
        <span className="text-white">Started</span>
      </p>
      </div>
      </div>
      
  )

export default GetStarted