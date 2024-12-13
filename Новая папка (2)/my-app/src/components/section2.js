import React from 'react'
import Image from 'next/image'
import Image1 from '../assets/illustration (4).png'
import style from '../css/section2.module.css'
const Section2 = () => {
  return (
    <section className={`${style.section} container`}>
      <div className={style.div}>
        <p className={style.p}>DESKTOP AND MOBILE APP</p>
        <h1 className={style.h1}>Plan and manage</h1>
        <p className={style.p1}>Brute laoreet efficiendi id his, ea illum nonumes luptatum pro. Usu atqui laudem an, insolens gubergren similique est cu. Et vel modus congue vituperata. Solum patrioque no sea. Mea ex malis mollis oporteat. Eum an expetenda consequat.</p>
        <div className={style.divB}>
          <button className={style.button1}>View video</button>
          <button className={style.button2}>See features</button>
        </div>
      </div>
      <Image className={style.img} src={Image1} alt=''/>
    </section>
  )
}

export default Section2