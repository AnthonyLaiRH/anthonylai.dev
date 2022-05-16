import styled from 'styled-components';

import { fontFamilySemiBold } from './fontFamilies';

export const MessageTitle = styled.h3`
  ${fontFamilySemiBold};
  font-size: 2rem;
  margin-bottom: 0.8rem;
`;

export const MessageDescription = styled.p`
  font-size: 1.6rem;
  color: ${(props) => props.theme.color.boulder};
  margin-bottom: 1.6rem;
`;
