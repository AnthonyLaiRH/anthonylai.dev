import React, { useState } from 'react';
import { Top, Right, Left, Bottom, ContentArea, Name, StyledBurger, Lines } from './styled';
import { Menu } from 'components/Menu';

export interface IFrameProps {
  children?: React.ReactNode | React.ReactNodeArray | string;
  //open: boolean;
}

export const Frame = ({ children }: IFrameProps): JSX.Element => {
  const [open, setOpen] = useState(false);

  return (
    <div>
    {open ? 
      <Menu open={open} setOpen={() => setOpen(!open)}/> 
      :
      <div>
        <Top>
          <StyledBurger open={open} onClick={() => setOpen(!open)}>
            <Lines open={open}/>
            <Lines open={open}/>
            <Lines open={open}/>
          </StyledBurger>
          <Name>hello</Name>
        </Top>
        <Right>right</Right>
        <Left>left</Left>
        <ContentArea>
          {children}
        </ContentArea>
        <Bottom>bot</Bottom>
      </div>
      
    }
    </div>
  )
}
