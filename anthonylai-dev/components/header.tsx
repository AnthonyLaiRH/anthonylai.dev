import Link from "next/link"
import React from "react"
import { Instagram, Linkedin, GitHub } from "react-feather"

import HamburgerMenu from "./topNav/hamburgerMenu"
import HoverExpand from "./topNav/hoverExpand"

const Header: React.FC = () => (
  <header className="flex items-center bg-light-bg-100 sm:h-20 py-4 border-b sm:sticky top-0 justify-between">
    <div className="flex px-14 items-center">
      <HamburgerMenu />
      <Link href="/">
        <a className="mx-6 text-dark-main-100 text-xl">Anthony Lai</a>
      </Link>
    </div>
    <div className="flex px-14">
      <HoverExpand linkTo="https://github.com" >
        <GitHub size={20} />
      </HoverExpand>
      <HoverExpand linkTo="https://instagram.com">
        <Instagram size={20}/>
      </HoverExpand>
      <HoverExpand linkTo="https://linkedin.com">
        <Linkedin size={20}/>
      </HoverExpand>
    </div>
  </header>
)

export default Header
