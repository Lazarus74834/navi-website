import styled from 'styled-components'
import { theme } from '../../styles/theme'

export const Container = styled.div`
  max-width: 100%;
  margin: 0 auto;
  padding: 1rem;
  
  @media (min-width: ${theme.breakpoints.lg}) {
    max-width: 1100px;
    padding: 2rem;
  }
`

export const BentoGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
  margin-top: 1.5rem;
  
  @media (min-width: ${theme.breakpoints.sm}) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (min-width: ${theme.breakpoints.lg}) {
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
  }
`

export const BentoBox = styled.div`
  background: ${theme.colors.ivory};
  padding: 1.2rem;
  border-radius: ${theme.borderRadius.default};
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  border-left: 4px solid ${theme.colors.pink};
  
  &:hover {
    transform: translateY(-4px);
    border-left-color: ${theme.colors.logoGreen};
    box-shadow: 0 15px 30px rgba(187, 204, 187, 0.15);
  }
`

export const ButtonContainer = styled.div`
  text-align: center;
  margin: 2rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  
  @media (min-width: ${theme.breakpoints.sm}) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
  }
`

export const Button = styled.a`
  display: block;
  width: 100%;
  max-width: 280px;
  margin: 0.5rem 0;
  padding: 0.75rem 1rem;
  background-color: ${props => 
    props.variant === 'secondary' ? 'transparent' : 
    props.variant === 'ghost' ? 'transparent' : 
    theme.colors.clay};
  color: ${props => 
    props.variant === 'secondary' ? theme.colors.clay : 
    props.variant === 'ghost' ? theme.colors.clay : 
    theme.colors.ivory};
  border-radius: ${theme.borderRadius.default};
  text-decoration: none;
  font-weight: bold;
  font-size: 1rem;
  transition: all 0.3s ease;
  text-align: center;
  position: relative;
  border: ${props => 
    props.variant === 'secondary' ? `2px solid ${theme.colors.clay}` : 
    props.variant === 'ghost' ? 'none' : 'none'};
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: ${props => 
      props.variant === 'ghost' ? 'none' : 
      `0 4px 12px rgba(211, 120, 95, 0.2)`};
    background-color: ${props => 
      props.variant === 'secondary' ? 'rgba(211, 120, 95, 0.1)' : 
      props.variant === 'ghost' ? 'transparent' : 
      '#bb5d47'};
    text-decoration: ${props => props.variant === 'ghost' ? 'underline' : 'none'};
  }
  
  @media (min-width: ${theme.breakpoints.sm}) {
    width: auto;
    margin: 0.5rem;
  }
`

export const ComingSoonBadge = styled.span`
  position: absolute;
  top: -10px;
  right: -5px;
  background-color: ${theme.colors.cocoa};
  color: ${theme.colors.ivory};
  font-size: 0.7rem;
  padding: 0.2rem 0.5rem;
  border-radius: 8px;
  font-weight: normal;
  transform: rotate(3deg);
`

export const ScreenshotGallery = styled.div`
  overflow: hidden;
  margin-top: 1.5rem;
  padding-bottom: 1.5rem;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 50px;
    background: linear-gradient(to right, ${theme.colors.sand}, transparent);
    z-index: 2;
  }
  
  &::after {
    content: '';
    position: absolute;
    right: 0;
    top: 0;
    bottom: 0;
    width: 50px;
    background: linear-gradient(to left, ${theme.colors.sand}, transparent);
    z-index: 2;
  }
`

export const ScrollingContainer = styled.div`
  display: flex;
  gap: 1.5rem;
  animation: scroll 20s linear infinite;
  
  picture, img {
    flex-shrink: 0;
    width: 200px;
    height: 410px;
    object-fit: cover;
    border-radius: 20px;
    border: 3px solid ${theme.colors.pink};
    box-shadow: 0 8px 25px rgba(207, 139, 148, 0.15);
    transition: transform 0.3s ease;
    
    &:hover {
      transform: scale(1.02) translateY(-5px);
      border-color: ${theme.colors.logoGreen};
      box-shadow: 0 12px 30px rgba(187, 204, 187, 0.25);
    }
    
    @media (min-width: ${theme.breakpoints.md}) {
      width: 260px;
      height: 540px;
    }
  }
  
  @keyframes scroll {
    0% {
      transform: translateX(100%);
    }
    100% {
      transform: translateX(-100%);
    }
  }
  
  &:hover {
    animation-play-state: paused;
  }
`