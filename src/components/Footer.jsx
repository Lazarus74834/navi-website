import React from 'react'
import styled from 'styled-components'
import { theme } from '../styles/theme'

const FooterContainer = styled.footer`
  background-color: ${theme.colors.ivory};
  padding: 1.5rem 1rem;
  text-align: center;
  font-size: 0.9rem;
`

const Footer = () => {
  return (
    <FooterContainer>
      <p>Made with ❤️ for travelers who believe in getting a little lost.</p>
      <p>Built by real explorers — not just developers.</p>
    </FooterContainer>
  )
}

export default Footer