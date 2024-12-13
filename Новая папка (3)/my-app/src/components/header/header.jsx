"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import styles from "./header.module.css";
import { Button } from "@/app/cva/button/button";

const Header = ({ children }) => {
  const router = usePathname();
    if (router != "/about" && router != "/" && router != "/services" && router != "/contact" && router != "") {
      return "";
  }
  return (
    <header className={styles.bgImage}>
      <div className={`${styles.header} container`}>
        <div className={`${styles.images} container`}>
          <h1 className="text-white text-[40px]">DB-</h1>
        </div>
        <div className={styles.texts}>
          <Link
            className="font-semibold"
            style={{ color: router == "/" ? "#09A7CA" : "white" }}
            href="/"
          >
            Home
          </Link>
          <Link
            className="font-semibold"
            style={{ color: router == "/about" ? "#09A7CA" : "white" }}
            href="/about"
          >
            About
          </Link>
          <Link
            className="font-semibold"
            style={{ color: router == "/services" ? "#09A7CA" : "white" }}
            href="/services"
          >
            Services
          </Link>
          <Link
            className="font-semibold"
            style={{ color: router == "/gallery" ? "#09A7CA" : "white" }}
            href="/gallery"
          >
            Gallery
          </Link>
          <Link
            className="font-semibold"
            style={{ color: router == "/contact" ? "#09A7CA" : "white" }}
            href="/contact"
          >
            Contact
          </Link>
          <Link
            className="font-semibold"
            style={{ color: router == "/story" ? "#09A7CA" : "white" }}
            href="/story"
          >
            Story
          </Link>
          <Link
            className="font-semibold"
            style={{ color: router == "/careers" ? "#09A7CA" : "white" }}
            href="/careers"
          >
            Careers
          </Link>
          <Link
            className="font-semibold"
            style={{ color: router == "/news" ? "#09A7CA" : "white" }}
            href="/news"
          >
            News
          </Link>
        </div>
      </div>
      <div className={`${styles.s} container`}>
        {router === "/" && (
          <div className="mt-[40px]">
            <h2 className="text-4xl font-bold max-w-lg">
              We build your dream house well and professionally
            </h2>
            <p className="mt-[20px] max-w-md">
              Our team can build a house according to your wishes. Any design
              and concept, we will help make it happen.
            </p>
            <Button marginTop={"old"} marginBottom={"medium"} color={"primary"} size={"medium"}>Contact us</Button>
          </div>
        )}

        {router === "/about" && (
          <div className="text-center text-[52px] mt-[20px] pb-[40px]">
            About our story - We are <br /> the best team
          </div>
        )}
        {router === "/contact" && (
          <div className="text-center text-[52px] mt-[20px] pb-[40px]">
            Need some consultation or want to <br /> collaborarion with us?
            Let’s connect!
          </div>
        )}
        {router === "/gallery" && (
          <div className="text-center text-[52px] mt-[20px] pb-[40px]">
            Here some our best works
          </div>
        )}
        {router === "/services" && (
          <div className="text-center text-[52px] mt-[20px] pb-[40px]">Our team services</div>
        )}
        {router === "/story" && (
          <div className="text-center text-[52px] mt-[20px] pb-[40px]">
            Read some story from clients!
          </div>
        )}
        {router === "/careers" && (
          <div className="text-center text-[52px] mt-[20px] pb-[40px]">
            Have a briliant idea? Join with us. We have an oppurtunity for you
          </div>
        )}
        {router === "/news" && (
          <div className="text-center text-[52px] mt-[20px] pb-[40px] ">
            Article and news about <br /> property and constructions
          </div>
        )}
            </div>
    </header>
  );
};

export default Header;
