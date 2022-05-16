import React from 'react';
import { StyledBurger, Lines } from 'components/Frame/styled';

export interface IMenuProps {
  open: boolean;
  setOpen(open: boolean): void;
}

export const Menu = ({ open, setOpen }: IMenuProps): JSX.Element => {
  return (
    <div>
      <StyledBurger open={open} onClick={() => setOpen(!open)}>
        <Lines open={open}/>
        <Lines open={open}/>
        <Lines open={open}/>
      </StyledBurger>
    </div>
  )
}
