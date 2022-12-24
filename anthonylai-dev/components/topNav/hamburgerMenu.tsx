import React, { useState } from "react"
import MenuOption from "./menuOption"

export default function HamburgerMenu() {
  const [isNavOpen, setIsNavOpen] = useState(false) // initiate isNavOpen state with false

  return (
    <div className="flex items-center justify-between">
      <nav>
        <button
          className="group text-dark-main-100 w-10 h-10 z-10 relative focus:outline-none "
          onClick={() => setIsNavOpen(prev => !prev)}
        >
          <div className="block w-5 absolute left-1/2 top-1/2 transform  -translate-x-1/2 -translate-y-1/2">
            <span
              aria-hidden="true"
              className={`block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out  ${
                isNavOpen
                  ? "rotate-45"
                  : "-translate-y-1.5 group-hover:translate-x-1"
              }`}
            ></span>
            <span
              aria-hidden="true"
              className={`block absolute  h-0.5 w-5 bg-current transform transition duration-500 ease-in-out  ${
                isNavOpen ? "opacity-0" : ""
              } `}
            ></span>
            <span
              aria-hidden="true"
              className={`block absolute  h-0.5 w-5 bg-current transform transition duration-500 ease-in-out ${
                isNavOpen
                  ? "-rotate-45"
                  : "translate-y-1.5 group-hover:-translate-x-1 "
              }`}
            ></span>
          </div>
        </button>

        <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
          <ul className="flex flex-col justify-between mr-24 sm:mr-72 min-h-[250px]">
            <MenuOption linkTo={"/experience"}>Experience</MenuOption>
            <MenuOption linkTo={"/projects"}>Projects</MenuOption>
            <MenuOption linkTo={"/resume"}>Resume</MenuOption>
            <MenuOption linkTo={"/blog"}>Blog</MenuOption>
            <MenuOption linkTo={"/notes"}>Course Notes</MenuOption>
            <li className="my-20 text-dark-main-100"></li>
            <li className="mx-12">
              <p>Want to contact me?</p>
            </li>
            <MenuOption linkTo={"mailto:contact@anthonylai.dev"}>
              Email me
            </MenuOption>
          </ul>
        </div>
      </nav>
      <style>{`
      .hideMenuNav {
        opacity: 0;
        position: absolute;
      }
      .showMenuNav {
        position: absolute;
        opacity: 1;
        transition: opacity 500ms ease-in-out;

        width: 100%;
        height: 100vh;
        top: 0;
        left: 0;
        background: #e5e5e5;
        z-index: 9;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
      }
    `}</style>
    </div>
  )
}
