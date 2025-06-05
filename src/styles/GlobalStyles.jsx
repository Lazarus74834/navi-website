import { createGlobalStyle } from 'styled-components'
import { theme } from './theme'

export const GlobalStyles = createGlobalStyle`
  /* CSS Reset and base styles */
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  
  html {
    font-size: 16px;
    scroll-behavior: smooth;
    scroll-padding-top: 80px;
  }
  
  body {
    font-family: ${theme.typography.fontFamily.primary};
    font-size: ${theme.typography.fontSize.base};
    line-height: ${theme.typography.lineHeight.normal};
    color: ${theme.colors.charcoal};
    background-color: ${theme.colors.cream};
    overflow-x: hidden;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    position: relative;
  }
  
  /* Typography System */
  h1, h2, h3, h4, h5, h6 {
    font-family: ${theme.typography.fontFamily.heading};
    font-weight: ${theme.typography.fontWeight.semibold};
    line-height: ${theme.typography.lineHeight.tight};
    color: ${theme.colors.charcoal};
    margin: 0;
  }
  
  h1 {
    font-size: ${theme.typography.fontSize['5xl']};
    font-weight: ${theme.typography.fontWeight.bold};
    line-height: ${theme.typography.lineHeight.tight};
    letter-spacing: -0.02em;
  }
  
  h2 {
    font-size: ${theme.typography.fontSize['3xl']};
    font-weight: ${theme.typography.fontWeight.semibold};
    letter-spacing: -0.01em;
  }
  
  h3 {
    font-size: ${theme.typography.fontSize['2xl']};
    font-weight: ${theme.typography.fontWeight.medium};
  }
  
  h4 {
    font-size: ${theme.typography.fontSize.xl};
    font-weight: ${theme.typography.fontWeight.medium};
  }
  
  h5 {
    font-size: ${theme.typography.fontSize.lg};
    font-weight: ${theme.typography.fontWeight.medium};
  }
  
  h6 {
    font-size: ${theme.typography.fontSize.base};
    font-weight: ${theme.typography.fontWeight.semibold};
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }
  
  p {
    color: ${theme.colors.warmGray600};
    margin: 0 0 ${theme.spacing.md};
    max-width: 65ch; /* Optimal reading width */
  }
  
  .lead {
    font-size: ${theme.typography.fontSize.lg};
    color: ${theme.colors.charcoal};
    font-weight: ${theme.typography.fontWeight.normal};
    line-height: ${theme.typography.lineHeight.relaxed};
  }
  
  .small {
    font-size: ${theme.typography.fontSize.sm};
    color: ${theme.colors.warmGray400};
  }
  
  /* Interactive elements */
  a {
    color: ${theme.colors.vibrantPink};
    text-decoration: none;
    transition: color ${theme.transitions.default};
    
    &:hover {
      color: ${theme.colors.energeticOrange};
      text-decoration: underline;
    }
  }
  
  button {
    font-family: inherit;
    cursor: pointer;
    border: none;
    outline: none;
    transition: all ${theme.transitions.default};
    
    &:focus-visible {
      outline: 2px solid ${theme.colors.vibrantPink};
      outline-offset: 2px;
    }
  }
  
  /* Utility classes */
  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }
  
  .container {
    width: 100%;
    max-width: 1280px;
    margin: 0 auto;
    padding: 0 ${theme.spacing.container.sm};
    
    @media (min-width: ${theme.breakpoints.md}) {
      padding: 0 ${theme.spacing.container.md};
    }
    
    @media (min-width: ${theme.breakpoints.lg}) {
      padding: 0 ${theme.spacing.container.lg};
    }
  }

  /* Refined animations */
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  @keyframes fadeInScale {
    from {
      opacity: 0;
      transform: scale(0.95);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }
  
  @keyframes float {
    0%, 100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-10px);
    }
  }
  
  @keyframes pulse {
    0%, 100% {
      transform: scale(1);
      opacity: 1;
    }
    50% {
      transform: scale(1.05);
      opacity: 0.8;
    }
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
  
  /* Scroll reveal animation class */
  .animate-on-scroll {
    opacity: 0;
    transform: translateY(30px);
    transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
    
    &.in-view {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  /* Micro-interaction classes */
  .hover-lift {
    transition: transform ${theme.transitions.default};
    
    &:hover {
      transform: translateY(-2px);
    }
  }
  
  .hover-glow {
    transition: box-shadow ${theme.transitions.default};
    
    &:hover {
      box-shadow: ${theme.shadows.lg};
    }
  }
`