import React from 'react'

const baseClasses = `relative 
px-5 py-2 rounded-full text-sm w-full text-center
bg-[var(--color-primary)] text-[var(baseColor)]
transition-all duration-300 ease-in-out
hover:scale-105
hover:shadow-[0_0_10px_#00C2FF]
focus:ring-2 focus:ring-cyan-400
focus:shadow-[0_0_20px_#00C2FF]
active:scale-95

`

const sizeClasses = {
  sm: "px-4 py-2 text-sm",
  default: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg"
}

const Button = ({ className = "", buttonName, size = "default",children }) => {

  const classes = `
    ${baseClasses}
    ${sizeClasses[size]}
    ${className}
  `

  return (
    <button className={classes}>
      <span className="relative flex items-center justify-center gap-2 ">
        {children}
        {buttonName}
      </span>
    </button>
  )
}

export default Button