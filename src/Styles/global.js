import { createGlobalStyle } from "styled-components"

export default createGlobalStyle`

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
}
//Armazenamento de cores em variáveis ->
//--white: #ffff
// uso -> background-color: var(--white)

:root {
--white: #ffff;
--black: #0c0d0d;
--gray: #666360;
--red: #c53030;
}

body {
    color: var(--black);
}

body, input, button {
    font-family: 'Cormorant SC', serif;
}

h1,h2,h3,h4,h5,h6{
    font-family: 'Marcellus SC', serif;
    font-weight: 700;
}

button{
    cursor: pointer;
}

a {
    text-decoration: none;
}
`
