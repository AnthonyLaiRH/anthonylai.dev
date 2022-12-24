import * as React from 'react';

interface HoverExpandProps {
  linkTo: string,
  children: React.ReactNode,
}

function HoverExpand({ linkTo, children }: HoverExpandProps) {
  return ( 
    <a href={linkTo} className="group px-1 z-10">
      {children}
      <hr className="opacity-0 scale-x-0 w-auto h-1 bg-teal transform transition duration-500 ease-in-out group-hover:scale-x-100 group-hover:opacity-100"/>
    </a>
   );
}

export default HoverExpand;