import Button from '@/components/Button/Button'
import React from 'react'

export default function Banner() {
  return (
    <section className='flex flex-col justify-around text-center items-center h-100vh'>
      <div className='w-40 h-40 bg-slate-300 rounded-full border-[6px] border-blue-400'></div>
      <article className='flex flex-col'>
        <h1 className='text-white text-3xl font-bold mb-3'>WILBER NARVAEZ</h1>
        <h3 className='text-blue-500 text-xl'>Lorem, ipsum.</h3>
        <p className='text-white text-sm'>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex illo fugit commodi distinctio, vero soluta nam quod pariatur minus ducimus nihil aliquid possimus iusto architecto vitae suscipit.
        </p>
      </article>
      <Button title='Contacto'/>
    </section>
  )
}
