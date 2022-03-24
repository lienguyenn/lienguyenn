import React from 'react'

function SectionName({ name }) {
  return (
    <div className='flex items-center text-gray-300 mb-20 gap-10'>
      <div className='text-6xl w-1/3 text-right'>{name}</div>
      <div className='h-1 flex-1 ml-5 bg-gray-300'></div>
    </div>
  )
}

export default SectionName