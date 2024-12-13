import React from 'react'
import styles from './contact.module.css'
import Image from 'next/image'
import Image1 from './images/Rectangle31.png'
import { TextField } from '@mui/material'
import { Button } from '@/app/cva/button/button'
const Contact = () => {
  return (
    <section className={`${styles.section} container`}>
      <div>
      <Image className={styles.img} src={Image1} alt=''/>
      </div>
      <div>
        <h1 className={styles.h1}>Let’s talk about anything you need</h1>
        <TextField placeholder='Your name/company name'/>
        <TextField sx={{marginLeft: "10px"}} placeholder='Phone/E-mail'/>
        <br />
        <br />
        <TextField sx={{width: "455px"}} placeholder='Message'/>
        <br />
        <br />
        <Button color={"primary"} size={"medium"}>Submit</Button>
      </div>
    </section>
  )
}

export default Contact