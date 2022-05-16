import React from 'react';
import { ThemeProvider } from 'styled-components';

import { GlobalStyles } from './GlobalStyles';
import { ResetStyles } from './ResetStyles';

// To avoid rerendering of the fonts in development the fonts are implemented with a static css
// implementing it with styled-components cause rerendering every time anything new is added to the global styles
//import '../fonts/Inter/inter.css';

// Color names
export const colors = {
  alabaster: '#F7F7F7',
  alizarinCrimson: '#E12727',
  alto: '#D9D9D9',
  altoDarker: '#CECECE',
  athensGray: '#F2F2F3',
  black: '#000000',
  blueRibbon: '#1462F9',
  boulder: '#7D7D7D',
  concrete: '#F3F3F3',
  gallery: '#EBEBEB',
  gold: '#FFD700',
  loblolly: '#C5CED7',
  mercury: '#E4E4E4',
  mineShaft: '#242424',
  outrageousOrange: '#FF5033',
  seaShell: '#F1F1F1',
  silver: '#C9C9C9',
  silverSlightlyDarker: '#B8B8B8',
  silverDarker: '#BFBFBF',
  snuff: '#DCDCEE',
  tuftBush: '#FFD1C9',
  white: '#FFFFFF',
  whiteLilac: '#E9E9F7',
  wildSand: '#F4F4F4',

  eerieBlack: '#171a1eff',
  charcoal: '#343d51ff',
  tuftsBlue: '#4a90e0ff',
  cyanProcess: '#1dbbefff',
  mustard: '#ffdc51ff',
  
  oxfordBlue: '#0b132bff',
  spaceCadet: '#1c2541ff',
  independence: '#3a506bff',
  maximumBlueGreen: '#5bc0beff',
  turquoiseBlue: '#6fffe9ff',

  jet: '#353535ff',
  ming: '#3c6e71ff',
  gainsboro: '#d9d9d9ff',
  cultured: '#f9f9f9ff',
  indigoDye: '#284b63ff',

};

/**
 * Returns a color string in the RGBA format to be used as in css.
 * @param color - One of the color defined in the theme color object.
 * @param alpha - The amount of opacity in % [0-1].
 */
const rgbaColor = (color: keyof typeof colors, alpha: number): string => {
  const { [color]: hex } = colors;

  const rPos = 1;
  const gPos = 3;
  const bPos = 5;

  const r = Number.parseInt(hex.slice(rPos, gPos), 16);
  const g = Number.parseInt(hex.slice(gPos, bPos), 16);
  const b = Number.parseInt(hex.slice(bPos), 16);

  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};

export const theme = {
  color: colors,
  rgbaColor,
};

/**
 * Renders its children with provided fonts, global styles and a theme.
 */
export const Theme: React.FunctionComponent = ({ children }) => (
  <ThemeProvider theme={theme}>
    <ResetStyles />
    <GlobalStyles />
    {children}
  </ThemeProvider>
);
