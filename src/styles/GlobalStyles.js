/** @format */

import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`


//global reset
*,
*::before,
*::after {
  box-sizing: border-box;
  padding: 0;
  margin: 0;


}

html {
  font-size: 62.5%;
}

body {
  font-family: "Poppins", sans-serif;
  color:  #374151;

  transition: color 0.3s, background-color 0.3s;
  min-height: 100vh;
  line-height: 1.5;
  font-size: 1.6rem;
}

input,
button,
textarea,
select {
  font: inherit;
  color: inherit;
}

button {
  cursor: pointer;
}

*:disabled {
  cursor: not-allowed;
}

select:disabled,
input:disabled {
  background-color: #e5e7eb;
  color: #9ca3af;
}

input:focus,
button:focus,
textarea:focus,
select:focus {
  outline: 2px solid #087f5b;
  outline-offset: -1px;
}

/* Parent selector, finally 😃 */
button:has(svg) {
  line-height: 0;
}

a {
  color: inherit;
  text-decoration: none;
}

ul {
  list-style: none;
}

p,
h1,
h2,
h3,
h4,
h5,
h6 {
  overflow-wrap: break-word;
  hyphens: auto;
}

img {
  max-width: 100%;

}


`;

export default GlobalStyles;
