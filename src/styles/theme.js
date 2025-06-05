export const theme = {
  colors: {
    // Earthy base palette
    cream: '#FAF7F2',
    warmWhite: '#FEFCF8',
    sand: '#F3EBDD', // Original background color
    sandLight: '#EEE6DD', // Lighter variant for cards
    warmGray: '#F5F2ED',
    
    // Text colors
    charcoal: '#2C2A27',
    warmGray600: '#6B6B6B',
    warmGray400: '#9B9B9B',
    
    // Brand accent colors
    vibrantPink: '#E85A8A',
    softGreen: '#8FAE8F',
    energeticOrange: '#F4A261',
    
    // Functional colors
    success: '#7FB069',
    warning: '#F4A261',
    error: '#E76F51',
  },
  
  typography: {
    fontFamily: {
      primary: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      heading: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      section: 'Georgia, "Times New Roman", serif',
    },
    
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem'
    },
    
    fontWeight: {
      light: 300,
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
    },
    
    lineHeight: {
      tight: 1.1,
      snug: 1.25,
      normal: 1.5,
      relaxed: 1.6,
    }
  },
  
  spacing: {
    xs: '0.25rem',
    sm: '0.5rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2rem',
    '2xl': '3rem',
    '3xl': '4rem',
    
    container: {
      sm: '1rem',
      md: '2rem',
      lg: '3rem',
    }
  },
  
  borderRadius: {
    none: '0',
    sm: '4px',
    default: '8px',
    md: '12px',
    lg: '16px',
    xl: '24px',
    full: '9999px'
  },
  
  shadows: {
    sm: '0 1px 3px rgba(44, 42, 39, 0.1)',
    default: '0 4px 12px rgba(44, 42, 39, 0.08)',
    md: '0 8px 24px rgba(44, 42, 39, 0.12)',
    lg: '0 16px 40px rgba(44, 42, 39, 0.15)',
  },
  
  breakpoints: {
    xs: '480px',
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
  },
  
  transitions: {
    fast: '150ms cubic-bezier(0.4, 0, 0.2, 1)',
    default: '250ms cubic-bezier(0.4, 0, 0.2, 1)',
    slow: '350ms cubic-bezier(0.4, 0, 0.2, 1)',
  },
  
  zIndex: {
    behind: -1,
    auto: 'auto',
    base: 0,
    overlay: 10,
    dropdown: 100,
    modal: 1000,
  }
}