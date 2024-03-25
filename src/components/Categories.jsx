import React from 'react'

function Categories({image, title, opening}) {
  return (
    <div className='bg-white rounded-[10px] py-8 px-6 flex items-center justify-between lg:text-2xl'>
        <span className='flex items-center gap-x-4'>
            <img src={image} width={30} alt="" />
            <p>{title}</p>
        </span>
        <p>{opening} Opening</p>
    </div>
  )
}

export default Categories