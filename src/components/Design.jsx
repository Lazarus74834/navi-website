import React from 'react'
import styled from 'styled-components'
import { theme } from '../styles/theme'

const DesignSection = styled.section`
  padding: ${theme.spacing['3xl']} 0;
  background: ${theme.colors.sand};
  
  .container {
    max-width: 800px;
    margin: 0 auto;
    padding: 0 ${theme.spacing.container.sm};
    text-align: center;
    
    @media (min-width: ${theme.breakpoints.md}) {
      padding: 0 ${theme.spacing.container.md};
    }
  }
  
  h2 {
    font-family: ${theme.typography.fontFamily.section};
    font-size: ${theme.typography.fontSize['3xl']};
    color: ${theme.colors.charcoal};
    margin-bottom: ${theme.spacing.lg};
    
    @media (min-width: ${theme.breakpoints.md}) {
      font-size: ${theme.typography.fontSize['4xl']};
    }
  }
  
  p {
    font-size: ${theme.typography.fontSize.lg};
    color: ${theme.colors.warmGray600};
    line-height: ${theme.typography.lineHeight.relaxed};
    margin: 0;
    
    @media (min-width: ${theme.breakpoints.md}) {
      font-size: ${theme.typography.fontSize.xl};
    }
  }
`

const Design = () => {
  return (
    <DesignSection>
      <div className="container">
        <h2 id="more">Designed for Travelers, by Travelers</h2>
        <p>Inspired by travel journals and vintage maps, Navi combines warm aesthetics, intuitive navigation, and playful details to make every trip feel personal.</p>
      </div>
    </DesignSection>
  )
}

export default Design