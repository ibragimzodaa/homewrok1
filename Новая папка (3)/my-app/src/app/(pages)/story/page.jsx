import React from 'react'
import Image from 'next/image'
import './story.css'
import Image1 from './images/Ellipse2.png'
import Image2 from './images/img (2).png'

const Stroy = () => {
  return (
    <section className='container'>
      <div className='flex justify-evenly flex-wrap mt-[40px]'>
        <div className='w-[350px] p-[35px] sm:w-[300px] md:w-[320px]'>
          <Image src={Image1} alt='' />
          <p className='text-[16px] mt-[20px]'>I really happy to see the result my new home. It’s really good house and good price too. And they work so fast becasue they have the best team. Once again, thankyou. I really appreciate it.</p>
          <p className='mt-[20px] font-semibold'>- Mr. James</p>
        </div>
        <div className='w-[350px] p-[35px] sm:w-[300px] md:w-[320px]'>
          <Image src={Image1} alt='' />
          <p className='text-[16px] mt-[20px]'>I really happy to see the result my new home. It’s really good house and good price too. And they work so fast becasue they have the best team. Once again, thankyou. I really appreciate it.</p>
          <p className='mt-[20px] font-semibold'>- Mr. James</p>
        </div>
        <div className='w-[350px] p-[35px] sm:w-[300px] md:w-[320px]'>
          <Image src={Image1} alt='' />
          <p className='text-[16px] mt-[20px]'>I really happy to see the result my new home. It’s really good house and good price too. And they work so fast becasue they have the best team. Once again, thankyou. I really appreciate it.</p>
          <p className='mt-[20px] font-semibold'>- Mr. James</p>
        </div>
      </div>
      <div className='bgIm flex items-center justify-evenly mb-[40px] mt-[40px] sm:flex flex-wrap sm:items-center'>
        <Image className='w-[230px] sm:w-[200px]' src={Image1} alt='' />
        <div className=''>
          <h1 className='text-[24px] font-semibold ml-[15px]'>Mr. James’s says : “I’m so happy!”</h1>
          <p className='w-[517px] text-[16px] sm:w-[500px] sm:px-[20px]'>
            is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
          </p>
        </div>
      </div>
      <h1 className='text-center mb-[30px] font-semibold text-[30px]'>Mr. James’s villa</h1>
      <div className='flex flex-wrap gap-4 justify-evenly mb-[40px] sm:flex md:flex-wrap sm:items-center'>
        <Image className='sm:w-[300px] sm:mb-[20px]' src={Image2} alt='' />
        <Image className='sm:w-[300px] sm:mb-[20px]' src={Image2} alt='' />
        <Image className='sm:w-[300px]' src={Image2} alt='' />
      </div>
    </section>
  )
}

export default Stroy
