import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    html {
        --color-primary: yellow;
        --color-secondary: red;
        --color-white: #ffffff;
        --color-black: #000000;
        height: 100%;
    }
    body {
        height: 100%;
        font-family: system-ui;
        font-size: 1.125rem;
        line-height: 1.5;

    }
    main {
        width: min(70ch, 100% - 4rem);
        margin-inline: auto;
        min-height: 100vh;

    }
    header {

    }
    img,
    svg,
    video {
        max-width: 100%;
        display: block;
    }
`;

export default GlobalStyle;