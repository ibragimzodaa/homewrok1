import React from "react";
import style from "../css/header.module.css";
// import SocialIcons from "../assets/social media.png";
import Image from "next/image";
import { Button } from "@/cva/buttons";
const Header = () => {
  return (
    <header className={`${style.header} container`}>
      <div className={style.blueDiv}></div>
      <div className={style.text}>
        <p>Home</p>
        <p>Blog</p>
        <p>Features</p>
        <p>Pricing</p>
        <p>Documentation</p>
      </div>
      <div className={style.action}>
        {/* <Image src={SocialIcons} alt="" /> */}
        <button className={style.button}>Get Started</button>
      </div>
    </header>
  );
};

export default Header;
