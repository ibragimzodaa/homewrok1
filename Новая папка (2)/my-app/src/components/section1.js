import React from "react";
import style from "../css/section1.module.css";
import Image from "next/image";
import Image1 from "../assets/Vector.png";
const Section1 = () => {
  return <section className={`${style.section} container`}>
    <p className={style.p}>PLAN YOUR LIFE</p>
    <h1 className={style.glavnitext}>Increase your productivity</h1>
    <p className={style.p1}>Brute laoreet efficiendi id his, ea illum nonumes luptatum pro. Usu atqui laudem an, insolens gubergren similique est cu. Et vel modus congue vituperata.</p>
    <Image src={Image1} alt=""/>
  </section>;
};

export default Section1;
