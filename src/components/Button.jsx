import React from 'react'

const Button = ({
  isLink = true,
  bgClass = 'bg-dark',
  colorClass = 'text-white',
  text,
  ...props
}) => {
  if (isLink) {
    return (
      <a
        className={`rounded font-medium  px-5 py-3 ${bgClass} ${colorClass}`}
        {...props}
      >
        {text}
      </a>
    )
  }

  return (
    <button
      className={`rounded font-medium  px-5 py-3 ${bgClass} ${colorClass}`}
      type='button'
      {...props}
    >
      {text}
    </button>
  )
}

export default Button
