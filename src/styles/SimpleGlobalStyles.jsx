import { createGlobalStyle } from 'styled-components'

export const SimpleGlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  
  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    background: #FAF7F2;
    color: #2C2A27;
    line-height: 1.5;
  }
  
  h1, h2, h3, h4, h5, h6 {
    margin: 0 0 1rem 0;
  }
  
  p {
    margin: 0 0 1rem 0;
  }
`