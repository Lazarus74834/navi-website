import React from 'react'
import styled from 'styled-components'
import { theme } from '../styles/theme'

const CTASection = styled.section`
  padding: ${theme.spacing['3xl']} 0;
  background: linear-gradient(135deg, ${theme.colors.sand} 0%, ${theme.colors.warmGray} 100%);
  text-align: center;
  
  .container {
    max-width: 800px;
    margin: 0 auto;
    padding: 0 ${theme.spacing.container.sm};
    
    @media (min-width: ${theme.breakpoints.md}) {
      padding: 0 ${theme.spacing.container.md};
    }
  }
`

const CTAContent = styled.div`
  margin-bottom: ${theme.spacing['2xl']};
  
  h2 {
    font-family: ${theme.typography.fontFamily.section};
    font-size: ${theme.typography.fontSize['3xl']};
    color: ${theme.colors.charcoal};
    margin-bottom: ${theme.spacing.md};
    
    @media (min-width: ${theme.breakpoints.md}) {
      font-size: ${theme.typography.fontSize['4xl']};
    }
  }
  
  p {
    font-size: ${theme.typography.fontSize.lg};
    color: ${theme.colors.warmGray600};
    line-height: ${theme.typography.lineHeight.relaxed};
    margin: 0 auto;
    max-width: 600px;
    
    @media (min-width: ${theme.breakpoints.md}) {
      font-size: ${theme.typography.fontSize.xl};
    }
  }
`

const ButtonGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${theme.spacing.md};
  max-width: 400px;
  margin: 0 auto;
  
  @media (min-width: ${theme.breakpoints.sm}) {
    grid-template-columns: repeat(2, 1fr);
    max-width: 500px;
  }
  
  @media (min-width: ${theme.breakpoints.md}) {
    grid-template-columns: repeat(3, 1fr);
    max-width: 700px;
    gap: ${theme.spacing.lg};
  }
`

const CTAButton = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${theme.spacing.xs};
  padding: ${theme.spacing.lg};
  background: ${theme.colors.warmWhite};
  border: 2px solid ${theme.colors.sand};
  border-radius: ${theme.borderRadius.lg};
  text-decoration: none;
  transition: all ${theme.transitions.default};
  position: relative;
  overflow: hidden;
  
  /* Hover effect */
  &:hover {
    transform: translateY(-4px);
    border-color: ${theme.colors.vibrantPink};
    box-shadow: ${theme.shadows.md};
  }
  
  &:nth-child(2):hover {
    border-color: ${theme.colors.softGreen};
  }
  
  &:nth-child(3):hover {
    border-color: ${theme.colors.energeticOrange};
  }
  
  .icon {
    font-size: ${theme.typography.fontSize['2xl']};
    margin-bottom: ${theme.spacing.xs};
    transition: transform ${theme.transitions.default};
  }
  
  &:hover .icon {
    transform: scale(1.1) rotate(5deg);
  }
  
  .title {
    font-size: ${theme.typography.fontSize.base};
    font-weight: ${theme.typography.fontWeight.semibold};
    color: ${theme.colors.charcoal};
    margin-bottom: ${theme.spacing.xs};
  }
  
  .description {
    font-size: ${theme.typography.fontSize.sm};
    color: ${theme.colors.warmGray600};
    line-height: ${theme.typography.lineHeight.snug};
    margin: 0;
  }
`

const ComingSoonBadge = styled.span`
  position: absolute;
  top: ${theme.spacing.xs};
  right: ${theme.spacing.xs};
  background: linear-gradient(135deg, ${theme.colors.vibrantPink}, ${theme.colors.energeticOrange});
  color: white;
  font-size: ${theme.typography.fontSize.xs};
  padding: ${theme.spacing.xs} ${theme.spacing.sm};
  border-radius: ${theme.borderRadius.full};
  font-weight: ${theme.typography.fontWeight.medium};
  text-transform: uppercase;
  letter-spacing: 0.05em;
  transform: rotate(8deg);
  box-shadow: ${theme.shadows.sm};
`

const CallToAction = () => {
  const actions = [
    {
      icon: '📱',
      title: 'Download Navi',
      description: 'Get the app when it launches',
      href: '#'
    },
    {
      icon: '🎬',
      title: 'Watch Demo',
      description: 'See Navi in action',
      href: '#'
    },
    {
      icon: '💭',
      title: 'Our Story',
      description: 'Learn about our vision',
      href: '#'
    }
  ]
  
  return (
    <CTASection id="more">
      <div className="container">
        <CTAContent>
          <h2>Ready to explore differently?</h2>
          <p>
            Join thousands of travelers who are already reimagining how they discover and navigate the world.
          </p>
        </CTAContent>
        
        <ButtonGrid>
          {actions.map((action, index) => (
            <CTAButton key={index} href={action.href}>
              <ComingSoonBadge>Soon</ComingSoonBadge>
              <span className="icon">{action.icon}</span>
              <h3 className="title">{action.title}</h3>
              <p className="description">{action.description}</p>
            </CTAButton>
          ))}
        </ButtonGrid>
      </div>
    </CTASection>
  )
}

export default CallToAction