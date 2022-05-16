import { createGlobalStyle } from 'styled-components';

import { fontFamilyRegular } from './fontFamilies';

/**
 * Provides global styles to be shared across the whole project.
 */
export const GlobalStyles = createGlobalStyle`
  html {
    font-size: 62.5%;
    min-height: 100%;
  }
  body {
    ${fontFamilyRegular};
    font-size: 1.6rem;
    min-height: 100%;
  }
`;
