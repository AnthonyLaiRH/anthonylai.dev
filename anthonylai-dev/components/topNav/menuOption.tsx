import * as React from "react"

interface MenuOptionProps {
  linkTo: string,
  children: React.ReactNode
}

function MenuOption({linkTo, children}: MenuOptionProps) {
  return (
    <li className="group my-2 text-dark-main-100 text-3xl flex items-center">
      <div className="opacity-0 w-2.5 h-2.5 bg-teal rounded-full mx-5 transform transition duration-500 ease-in-out group-hover:translate-x-1 group-hover:opacity-100 group-hover:animate-fadeIn" />
      <a href={linkTo}>{children}</a>
    </li>
  )
}

export default MenuOption
