import React, { useEffect, useState, useRef } from 'react'
import styled from 'styled-components'
import { theme } from '../styles/theme'
import WaitlistForm from './WaitlistForm'
import OptimizedImage from './common/OptimizedImage'

const HeaderContainer = styled.header`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(135deg, ${theme.colors.warmWhite} 0%, ${theme.colors.cream} 50%, ${theme.colors.sand} 100%);
  position: relative;
  width: 100%;
  max-width: 100vw;
  overflow: hidden;
  padding: ${theme.spacing['2xl']} ${theme.spacing.container.sm};
  
  
  /* Animated scroll arrow */
  &::after {
    content: '↓';
    position: absolute;
    bottom: ${theme.spacing.lg};
    left: 50%;
    transform: translateX(-50%);
    font-size: 2rem;
    color: ${theme.colors.vibrantPink};
    opacity: 0.6;
    animation: bounce 2s infinite;
  }
  
  & > * {
    position: relative;
    z-index: 1;
  }
  
  @media (min-width: ${theme.breakpoints.md}) {
    padding: ${theme.spacing['3xl']} ${theme.spacing.container.md};
  }
  
  @media (min-width: ${theme.breakpoints.lg}) {
    padding: ${theme.spacing['3xl']} ${theme.spacing.container.lg};
  }
`


const HeroContent = styled.div`
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
  
  .hero-title {
    font-family: Georgia, serif;
    font-size: ${theme.typography.fontSize['5xl']};
    font-weight: ${theme.typography.fontWeight.normal};
    color: ${theme.colors.charcoal};
    margin-bottom: ${theme.spacing.md};
    line-height: ${theme.typography.lineHeight.tight};
    letter-spacing: -0.02em;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: ${theme.spacing.md};
    
    @media (min-width: ${theme.breakpoints.md}) {
      font-size: 4rem;
    }
    
    @media (min-width: ${theme.breakpoints.lg}) {
      font-size: 5rem;
    }
    
    .hero-icon {
      width: 60px;
      height: 60px;
      object-fit: contain;
      flex-shrink: 0;
      
      @media (min-width: ${theme.breakpoints.md}) {
        width: 80px;
        height: 80px;
      }
    }
  }
  
  .hero-subtitle {
    font-size: ${theme.typography.fontSize.xl};
    font-weight: ${theme.typography.fontWeight.medium};
    color: ${theme.colors.vibrantPink};
    margin-bottom: ${theme.spacing.lg};
    font-style: italic;
    
    @media (min-width: ${theme.breakpoints.md}) {
      font-size: ${theme.typography.fontSize['2xl']};
    }
  }
  
  .hero-description {
    font-size: ${theme.typography.fontSize.lg};
    color: ${theme.colors.warmGray600};
    line-height: ${theme.typography.lineHeight.relaxed};
    margin: 0 auto ${theme.spacing.md};
    max-width: 600px;
    
    @media (min-width: ${theme.breakpoints.md}) {
      font-size: ${theme.typography.fontSize.xl};
    }
  }
  
  .hero-tagline {
    font-size: ${theme.typography.fontSize.base};
    color: ${theme.colors.softGreen};
    line-height: ${theme.typography.lineHeight.relaxed};
    margin: 0 auto ${theme.spacing.xl};
    max-width: 500px;
    font-weight: ${theme.typography.fontWeight.medium};
    
    @media (min-width: ${theme.breakpoints.md}) {
      font-size: ${theme.typography.fontSize.lg};
    }
  }
  
  /* Staggered animation */
  & > * {
    opacity: 0;
    transform: translateY(30px);
    animation: fadeInUp 0.8s ease-out forwards;
    
    &:nth-child(1) { animation-delay: 0.2s; }
    &:nth-child(2) { animation-delay: 0.4s; }
    &:nth-child(3) { animation-delay: 0.6s; }
    &:nth-child(4) { animation-delay: 0.8s; }
  }
`

const SignupCard = styled.div`
  background: ${theme.colors.warmWhite};
  border-radius: ${theme.borderRadius.lg};
  padding: ${theme.spacing.xl};
  margin-top: ${theme.spacing['2xl']};
  max-width: 500px;
  width: 100%;
  box-shadow: ${theme.shadows.md};
  border: 1px solid ${theme.colors.sand};
  transition: all ${theme.transitions.default};
  animation: fadeInUp 0.8s ease-out 0.8s both;
  
  /* Subtle gradient border */
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    padding: 2px;
    background: linear-gradient(135deg, ${theme.colors.vibrantPink}, ${theme.colors.softGreen}, ${theme.colors.energeticOrange});
    border-radius: inherit;
    mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    mask-composite: xor;
    -webkit-mask-composite: xor;
    opacity: 0;
    transition: opacity ${theme.transitions.default};
  }
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: ${theme.shadows.lg};
    
    &::before {
      opacity: 1;
    }
  }
  
  .signup-title {
    font-size: ${theme.typography.fontSize.xl};
    font-weight: ${theme.typography.fontWeight.semibold};
    color: ${theme.colors.charcoal};
    margin-bottom: ${theme.spacing.sm};
    text-align: center;
  }
  
  .signup-description {
    color: ${theme.colors.warmGray600};
    text-align: center;
    margin-bottom: ${theme.spacing.lg};
    font-size: ${theme.typography.fontSize.base};
  }
`

const Header = () => {
  const [isVisible, setIsVisible] = useState(false)
  const headerRef = useRef()
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 300)
    
    return () => clearTimeout(timer)
  }, [])
  
  return (
    <HeaderContainer ref={headerRef}>
      
      <HeroContent>
        <h1 className="hero-title">
          Navi
          <OptimizedImage 
            src="./favicon.png" 
            alt="Navi Icon" 
            width="80"
            height="80"
            loading="eager"
            className="hero-icon"
          />
        </h1>
        <p className="hero-subtitle">Inspired, not planned</p>
        <p className="hero-description">
          Collect, organise, and navigate to the places that matter most — with a travel notebook built for the way you explore.
        </p>
        <p className="hero-tagline">
          Save places from social media, explore with interactive maps, and let AI guide your next adventure.
        </p>
      </HeroContent>
      
      <SignupCard>
        <h3 className="signup-title">Join the Journey</h3>
        <p className="signup-description">
          Be among the first travelers to experience a new way of exploring. Help us shape the future of travel.
        </p>
        <WaitlistForm />
      </SignupCard>
    </HeaderContainer>
  )
}

export default Header