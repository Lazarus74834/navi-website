import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  
  html, body {
    margin: 0;
    font-family: 'Inter', sans-serif;
    background-color: #F3EBDD;
    color: #3C2F2F;
    scroll-behavior: smooth;
    overflow-x: hidden;
  }
  
  body {
    position: relative;
  }
  
  h1 {
    font-family: 'Playfair Display', serif;
    font-size: 2.5rem;
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
  }
  
  h2 {
    font-family: 'Playfair Display', serif;
    font-size: 1.8rem;
    margin-top: 2rem;
    margin-bottom: 0.8rem;
  }
  
  h3 {
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
  }
  
  p {
    margin-top: 0.5rem;
    margin-bottom: 1rem;
    line-height: 1.5;
  }

  @media (min-width: 960px) {
    h1 {
      font-size: 3rem;
    }
    
    h2 {
      font-size: 2rem;
    }
  }

  @keyframes popIn {
    0% { transform: scale(0.8); opacity: 0; }
    100% { transform: scale(1); opacity: 1; }
  }

  @keyframes heroGlow {
    0% { transform: scale(1); opacity: 0.15; }
    100% { transform: scale(1.2); opacity: 0.25; }
  }

  @keyframes bounce {
    0%, 20%, 50%, 80%, 100% {
      transform: translateX(-50%) translateY(0);
    }
    40% {
      transform: translateX(-50%) translateY(-10px);
    }
    60% {
      transform: translateX(-50%) translateY(-5px);
    }
  }

  @keyframes spin {
    0% { transform: translateY(-50%) rotate(0deg); }
    100% { transform: translateY(-50%) rotate(360deg); }
  }

  @keyframes fadeInPop {
    from { opacity: 0; transform: scale(0.9); }
    to { opacity: 1; transform: scale(1); }
  }
`