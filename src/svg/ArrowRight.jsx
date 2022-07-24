import React from 'react'

const ArrowRight = ({ color = '#101828', size = 22, ...props }) => {
  const width = size
  const height = size * 0.68181818

  return (
    <svg
      width={width}
      height={height}
      viewBox='0 0 22 15'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        d='M0 7.692h19.306L12 13l.799 1.045L22 7l-9.201-7L12 1l7.306 5.308H0v1.384z'
        fill={color}
      />
    </svg>
  )
}

export default ArrowRight
