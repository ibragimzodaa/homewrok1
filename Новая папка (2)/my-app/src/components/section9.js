import React from 'react'
import styles from '../css/section9.module.css'
import { Button, TextField } from '@mui/material'

const Section9 = () => {
  return (
    <section className={`${styles.section} container`}>
      <div>
        <h1 className={styles.h1}>Sign up for newsletter</h1>
        <p className={styles.p}>Cu qui soleat partiendo urbanitas. Eum aperiri indoctum eu, homero alterum.</p>
      </div>
      <div>
        <TextField  placeholder='Email address'/>
        <Button sx={{backgroundColor : "#4D6CE1" , padding : "15px", marginLeft : "20px"}} variant='contained'>Save me</Button>
      </div>
    </section>
  )
}

export default Section9