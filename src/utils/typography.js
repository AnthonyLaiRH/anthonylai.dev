import Typography from "typography"
import theme from "typography-theme-stern-grove"

theme.overrideThemeStyles = () => ({
  body:{
    fontFamily: ['PT Sans', 'sans-serif'].join(','),
  },
  nav: {
    fontFamily: ['Roboto', 'sans-serif'].join(','),
  },
})

const typography = new Typography(theme)

export const { scale, rhythm, options } = typography
export default typography

/**const typography = new Typography({
    baseFontSize: "18px",
    baseLineHeight: 1.45,
    headerFontFamily: ["Playfair Display", "serif"],
    bodyFontFamily: ["Roboto", "sans-serif"]
});
  
// Insert styles directly into the <head>
typography.injectStyles();
  
export default typography;*/