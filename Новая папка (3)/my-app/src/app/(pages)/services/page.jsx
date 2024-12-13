import Image from 'next/image'
import React from 'react'
// import Image1 from './images/Vector1.png'
import Image2 from './images/Vector2.png'
import Image3 from './images/Vector3.png'
import Image4 from './images/mdi_sofa.png'
import Img from './images/img1.png'
import './services.css'

const Services = () => {
  return (
    <section className='container'>
      <div className='flex justify-evenly mt-[50px] mb-[50px] flex-wrap'>
        <div className='w-[300px] sm:w-[250px] md:w-[270px]'>
          <Image src={Image4} alt='' />
          <h1 className='font-semibold text-[20px]'>Design building/house</h1>
          <p className='text-[16px] w-[200px] mt-[10px]'>We have an architect for design new buildings</p>
        </div>
        <div className='w-[300px] sm:w-[250px] md:w-[270px]'>
          <Image src={Image2} alt='' />
          <h1 className='font-semibold text-[20px]'>Design building/house</h1>
          <p className='text-[16px] w-[200px] mt-[10px]'>We have an architect for design new buildings</p>
        </div>
        <div className='w-[300px] sm:w-[250px] md:w-[270px]'>
          <Image src={Image3} alt='' />
          <h1 className='font-semibold text-[20px]'>Design building/house</h1>
          <p className='text-[16px] w-[200px] mt-[10px]'>We have an architect for design new buildings</p>
        </div>
        <div className='w-[300px] sm:w-[250px] md:w-[270px]'>
          <Image src={Image4} alt='' />
          <h1 className='font-semibold text-[20px]'>Design building/house</h1>
          <p className='text-[16px] w-[200px] mt-[10px]'>We have an architect for design new buildings</p>
        </div>
      </div>
      <div className="flex items-center justify-evenly mb-[50px] sm:flex sm:items-center flex-wrap">
        <Image height={350} src={Img} alt='' />
        <div className='bgImage'>
          <h1 className='font-semibold text-[24px]'>Design building / house</h1>
          <p className='w-[527px] text-[16px] mt-[20px] ml-[-20px]  sm:px-[20px]'>
            is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
          </p>
        </div>
      </div>
      <div className="flex flex-wrap items-center justify-evenly flex-row-reverse mb-[50px] sm:flex sm:items-center sm:flex-row-reverse">
        <Image height={350} src={Img} alt='' />
        <div className='bgImage'>
          <h1 className='font-semibold text-[24px]'>Design building / house</h1>
          <p className='w-[527px] text-[16px] mt-[20px] ml-[-20px]  sm:px-[20px]'>
            is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Services
