import React from 'react'
import styled from 'styled-components'
import { theme } from '../styles/theme'

const FooterContainer = styled.footer`
  background: ${theme.colors.sand};
  color: ${theme.colors.charcoal};
  padding: ${theme.spacing['2xl']} 0 ${theme.spacing.xl};
  border-top: 1px solid ${theme.colors.sandLight};
  
  .container {
    max-width: 1280px;
    margin: 0 auto;
    padding: 0 ${theme.spacing.container.sm};
    text-align: center;
    
    @media (min-width: ${theme.breakpoints.md}) {
      padding: 0 ${theme.spacing.container.md};
    }
  }
`

const FooterContent = styled.div`
  margin-bottom: ${theme.spacing.lg};
  
  .footer-message {
    font-size: ${theme.typography.fontSize.lg};
    font-style: italic;
    color: ${theme.colors.charcoal};
    margin: 0 auto ${theme.spacing.md};
    opacity: 0.8;
    max-width: none;
    
    .heart {
      color: ${theme.colors.vibrantPink};
      animation: pulse 2s ease-in-out infinite;
    }
  }
  
  .footer-tagline {
    font-size: ${theme.typography.fontSize.base};
    color: ${theme.colors.warmGray600};
    margin: 0 auto;
    max-width: none;
  }
`

const FooterMeta = styled.div`
  padding-top: ${theme.spacing.lg};
  border-top: 1px solid ${theme.colors.sandLight};
  
  .copyright {
    font-size: ${theme.typography.fontSize.sm};
    color: ${theme.colors.warmGray600};
    margin: 0 auto;
    max-width: none;
  }
`

const Footer = () => {
  const currentYear = new Date().getFullYear()
  
  return (
    <FooterContainer>
      <div className="container">
        <FooterContent>
          <p className="footer-message">
            Made with <span className="heart">❤️</span> for travelers who believe in getting a little lost.
          </p>
          <p className="footer-tagline">
            Built by real explorers — not just developers.
          </p>
        </FooterContent>
        
        <FooterMeta>
          <p className="copyright">
            © {currentYear} Navi. Crafted for wanderers, dreamers, and discovery seekers.
          </p>
        </FooterMeta>
      </div>
    </FooterContainer>
  )
}

export default Footer