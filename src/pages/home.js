import React from "react";
import  Layout  from  "../components/layout";
import  FancyParagraph  from  "../components/fancy-paragraph";

const HomePage = () => (
<Layout>
    <h1>About Me</h1>
    <FancyParagraph paragraphText="Styled with CSS Modules." />
</Layout>
);

export default HomePage;