import React from 'react'

const StyleOne = ({ icon, textNumber, text }) => {
  return (
    <div className='flex'>
      <div className='bg-white rounded-full w-16 h-16 mr-2 flex items-center justify-center'>
        {icon}
      </div>
      <p className='font-semibold text-3xl'>
        {textNumber}
        <span className='font-medium text-base block text-dark2'>{text}</span>
      </p>
    </div>
  )
}

export default StyleOne
