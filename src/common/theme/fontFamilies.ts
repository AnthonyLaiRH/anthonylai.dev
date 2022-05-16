import { css, FlattenSimpleInterpolation } from 'styled-components';

// helper font family lines
const putFont = (weight: number): FlattenSimpleInterpolation => css`
  font-family: 'Inter', sans-serif;
  font-weight: ${weight};
  font-style: normal;
`;

const boldWeight = 700;
const regularWeight = 400;
const semiBoldWeight = 600;
const mediumWeight = 500;

export const fontFamilyBold = putFont(boldWeight);
export const fontFamilyRegular = putFont(regularWeight);
export const fontFamilySemiBold = putFont(semiBoldWeight);
export const fontFamilyMedium = putFont(mediumWeight);
