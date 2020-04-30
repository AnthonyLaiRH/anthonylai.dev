import  React  from  "react";
import  fancyParagraphStyles  from  "./fancy-paragraph.module.css";

const  FancyParagraph  =  (props)  => <p  className={fancyParagraphStyles.fancy}>{props.paragraphText}</p>;

export  default  FancyParagraph;