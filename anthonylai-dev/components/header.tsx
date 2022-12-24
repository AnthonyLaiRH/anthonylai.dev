import Link from "next/link"
import React from "react"
import { Instagram, Linkedin, GitHub } from "react-feather"

import HamburgerMenu from "./menu/hamburgerMenu"

const Header: React.FC = () => (
  <header className="flex items-center bg-light-bg-100 sm:h-20 py-4 border-b sm:sticky top-0 justify-between">
    <div className="flex px-14 items-center">
      <HamburgerMenu />
      <Link href="/">
        <a className="mx-6 text-dark-main-100 text-xl">Anthony Lai</a>
      </Link>
    </div>
    <div className="flex px-14">
      <a href="https://github.com" className="px-1">
        <GitHub size={20} />
      </a>
      <a href="https://instagram.com" className="px-1">
        <Instagram size={20} />
      </a>
      <a href="https://linkedin.com" className="px-1">
        <Linkedin size={20} />
      </a>
    </div>
  </header>
)

export default Header
