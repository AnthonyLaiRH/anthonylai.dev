import styled, { css } from 'styled-components';

export const TopAndBottom = styled.div`
  position: sticky;
  display: flex;
  align-items: center;

  width: 100%;
  height: 6.2rem;
  padding: 0rem 5.5rem;

  background:${(props) => props.theme.color.white};
`;

export const Side = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;

  height: 100%;
  width: 5.5rem;
  padding: 6.2rem 0;

  background:${(props) => props.theme.color.white};
`;

export const Left = styled(Side)`
  left: 0;
`;

export const Right = styled(Side)`
  right: 0;
`;

export const Bottom = styled(TopAndBottom)`
  bottom: 0;
`;
export const Top = styled(TopAndBottom)`
  top: 0;
`;

export const ContentArea = styled.div`
  margin: 0 5.5rem;
  min-height: calc(100vh - 6.2rem - 6.2rem);

  background:${(props) => props.theme.color.cultured};
`;


export const Name = styled.h1`
  font-size: 2.4rem;
  cursor: pointer;
`;



export const Lines = styled.div<{ open?: boolean }>`
    width: 2rem;
    height: 0.25rem;
    background: ${({ theme, open }) => open ? theme.color.black : theme.color.black};
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

    :first-child {
      transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
    }
    :nth-child(2) {
      opacity: ${({ open }) => open ? '0' : '1'};
      transform: ${({ open }) => open ? 'translateX(20px)' : 'translateX(0)'};
    }

    :nth-child(3) {
      transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
    }
`;

export const StyledBurger = styled.button<{ open?: boolean }>`
  margin-right: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;

  &:focus {
    outline: none;
  }

  &:hover ${Lines} {

    :nth-child(2) {
      width: 1.5rem;
    }

    :nth-child(3) {
      width: ${({ open }) => open ? '2rem' : '1rem'};
    }
  }

`;
