import { createGlobalStyle } from 'styled-components';


export default createGlobalStyle`
  html, body, #root {
    height: 100%;
    min-height: 100%;
    min-width: 768px;
  }
  body {
    -webkit-tap-highlight-color: transparent;
    line-height: 1.2;
  }
  #root {
    display: flex;
    flex-direction: column;
  }
  button,
  input,
  optgroup,
  select,
  *, *:after, *:before, input[type="search"] {
    box-sizing: border-box;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
  ul {
    list-style: none;
  }
  ul, li, ol, dd, h1, h2, h3, h4, h5, h6, p {
    padding: 0;
    margin: 0;
  }
  h1, h2, h3, h4, h5, h6, strong {
  
  }
  button {
    background: none;
    border: none;
  }
  /* Workaround for IE11 focus highlighting for select elements */
  select::-ms-value {
    background: none;
    color: #42413d;
  }
  [role="button"], button, input, select, textarea {
    outline: none;
    &:focus {
      outline: none;
    }
    &:disabled {
      opacity: 1;
    }
  }
  [role="button"], button, input, textarea {
    appearance: none;
  }
  select:-moz-focusring {
    color: transparent;
    text-shadow: 0 0 0 #000;
  }
  select::-ms-expand {
    display: none;
  }
  select option {
  
  }
  p {
    line-height: 1.4285;
    a {}
  }
  textarea {
    line-height: 1.4285;
  }
  body, select {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  html {
    touch-action: manipulation;
  }
`;
