import { createGlobalStyle } from "styled-components";


const GlobaleStyling = createGlobalStyle`

// global CSS
.App{
    display: flex;
    justify-content: center;
}

.outer{
    box-shadow: 1px 1px 20px 1px rgb(170 , 170 , 170);
    width: 30%;
    padding: 20px;
    border-radius: 10px;
}
.inner{
    width: 100%;
}


`


export default GlobaleStyling;