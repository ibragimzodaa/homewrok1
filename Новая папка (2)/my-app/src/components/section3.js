import Image from 'next/image'
import React from 'react'
import Image1 from '../assets/Group 38.png'
import style from '../css/section3.module.css'
import Image2 from '../assets/Group 39.png'
const Section3 = () => {
  return (
    <section className={`${style.section} container`}>
      <p className={style.p}>ABOUT US</p>
      <h1 className={style.h1}>Read about our app</h1>
      <br />
      <br />
      <div className={style.cards}>
        <div>
          <Image src={Image1} alt=''/>
          <br />
          <p className={style.p1}>Overview</p>
          <br />
          <p className={style.p2}>Brute laoreet efficiendi id his, ea illum nonumes luptatum pro.</p>
        </div>
        <div>
          <Image src={Image2} alt=''/>
          <br />
          <p className={style.p1}>Overview</p>
          <br />
          <p className={style.p2}>Brute laoreet efficiendi id his, ea illum nonumes luptatum pro.</p>
        </div>
        <div>
          <Image src={Image1} alt=''/>
          <br />
          <p className={style.p1}>Overview</p>
          <br />
          <p className={style.p2}>Brute laoreet efficiendi id his, ea illum nonumes luptatum pro.</p>
        </div>
        <div>
          <Image src={Image2} alt=''/>
          <br />
          <p className={style.p1}>Overview</p>
          <br />
          <p className={style.p2}>Brute laoreet efficiendi id his, ea illum nonumes luptatum pro.</p>
        </div>
      </div>
    </section>
  )
}

export default Section3