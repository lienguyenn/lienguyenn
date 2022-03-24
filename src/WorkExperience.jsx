import React from 'react'

function WorkExperience({
  title,
  desciption,
  responsibilities,
  logo,
  location,
  duration,
}) {
  return (
    <div className="container mx-auto flex gap-10">
      <div className="w-1/3 flex text-gray-500">
        <div className='flex-1 flex flex-col justify-start text-right'>
          <div className="self-end inline-flex items-center justify-center px-5 py-5 rounded-lg w-20">
            <img src={logo} className="max-w-[150px] max-h-[100px]" />
          </div>

          <div className="">{location}</div>
          <div className='text-sm'>{duration}</div>
        </div>

        <div className='w-[2px] bg-slate-500 h-full ml-20 relative'>
          <div className='w-5 h-5 rounded-full bg-slate-500 absolute top-0 -left-[9px] shadow-lg'></div>
        </div>
      </div>

      <div className="flex-1 pb-10">
        <h4 className="text-xl font-semibold text-gray-900">{title}</h4>
        <div className='mt-3 text-base text-gray-700'>{desciption}</div>

        <ul className="text-sm mt-5">
          {responsibilities.map((responsibility, index) => (
            <li className="my-2 text-sm text-gray-500 flex" key={index}>
              <span className='mr-3'>•</span><span className='flex-1'>{responsibility}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default WorkExperience
