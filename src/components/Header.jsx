import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { theme } from '../styles/theme'
import WaitlistForm from './WaitlistForm'
import OptimizedImage from './common/OptimizedImage'

const HeaderContainer = styled.header`
  text-align: center;
  padding: 4rem 1.5rem 3rem;
  background: linear-gradient(180deg, ${theme.colors.ivory} 0%, ${theme.colors.sand} 100%);
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(circle at center, ${theme.colors.ivory} 0%, ${theme.colors.sand} 100%);
    animation: heroGlow 8s infinite alternate ease-in-out;
    z-index: 0;
    opacity: 0.2;
  }
  
  &::after {
    content: '↓';
    position: absolute;
    bottom: 1rem;
    left: 50%;
    transform: translateX(-50%);
    font-size: 2rem;
    color: ${theme.colors.clay};
    opacity: 0.6;
    animation: bounce 2s infinite;
  }
  
  & > * {
    position: relative;
    z-index: 1;
  }
  
  @media (min-width: ${theme.breakpoints.lg}) {
    padding: 6rem 2rem 3rem;
  }
`

const Logo = styled.div`
  animation: popIn 1s ease-in-out;
  
  img {
    width: 80px;
    border-radius: 20px;
    
    @media (min-width: ${theme.breakpoints.lg}) {
      width: 120px;
    }
  }
`

const HeroText = styled.div`
  transform: translateY(40px);
  opacity: 0;
  transition: all 0.8s ease;
  
  &.animate {
    transform: translateY(0);
    opacity: 1;
  }
`

const HeroSignup = styled.div`
  margin-top: 2rem;
  background: rgba(255, 253, 249, 0.85);
  padding: 1.2rem;
  border-radius: ${theme.borderRadius.default};
  box-shadow: 0 8px 20px rgba(0,0,0,0.08);
  margin-left: auto;
  margin-right: auto;
  max-width: 450px;
  width: 90%;
  
  h3 {
    margin-top: 0;
    margin-bottom: 0.8rem;
    font-size: 1.2rem;
  }
`

const Header = () => {
  const [animated, setAnimated] = useState(false)
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimated(true)
    }, 100)
    
    return () => clearTimeout(timer)
  }, [])
  
  return (
    <HeaderContainer>
      <Logo className={animated ? 'animate' : ''}>
        <OptimizedImage 
          src="./icon.png" 
          alt="Navi App Logo" 
          width="120"
          height="120"
          loading="eager" // Load immediately as it's above the fold
        />
      </Logo>
      
      <HeroText className={animated ? 'animate' : ''}>
        <h1>Navi</h1>
        <p>Inspired, not planned</p>
        <p>Collect, organise, and navigate to the places that matter most — with a travel notebook built for the way you explore.</p>
      </HeroText>
      
      <HeroSignup className={animated ? 'animate' : ''}>
        <h3>Be Among the First Travelers to Try Navi</h3>
        <p>Join our early access list and help shape the future of smarter, more meaningful travel.</p>
        <WaitlistForm />
      </HeroSignup>
    </HeaderContainer>
  )
}

export default Header