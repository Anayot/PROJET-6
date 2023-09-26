import { createGlobalStyle } from "styled-components"


export const MediaMobile = "@media (max-width: 768px)"

const StyledGlobalStyle = createGlobalStyle`
    * {
        font-family: 'Montserrat', sans-serif;
        color: #FF6060;
        font-weight: 200;
    }

    body {
        margin: 0;
    }
`

function GlobalStyle() {
    return <StyledGlobalStyle />
}

export default GlobalStyle