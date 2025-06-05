import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { theme } from '../styles/theme'
import OptimizedImage from './common/OptimizedImage'

const NavContainer = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: ${theme.colors.warmWhite};
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border-bottom: 1px solid ${theme.colors.sand};
  z-index: ${theme.zIndex.dropdown};
  transition: all ${theme.transitions.default};
  transform: translateY(${props => props.isVisible ? '0' : '-100%'});
  
  /* Frosted glass effect */
  background: rgba(254, 252, 248, 0.85);
  
  .container {
    max-width: 1280px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: ${theme.spacing.md} ${theme.spacing.container.sm};
    
    @media (min-width: ${theme.breakpoints.md}) {
      padding: ${theme.spacing.md} ${theme.spacing.container.md};
    }
  }
`

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: ${theme.spacing.sm};
  cursor: pointer;
  transition: transform ${theme.transitions.default};
  
  &:hover {
    transform: scale(1.05);
  }
  
  img {
    width: 40px;
    height: 40px;
    border-radius: ${theme.borderRadius.default};
    box-shadow: ${theme.shadows.sm};
  }
  
  .logo-text {
    font-family: Georgia, serif;
    font-size: ${theme.typography.fontSize['2xl']};
    font-weight: ${theme.typography.fontWeight.normal};
    color: ${theme.colors.charcoal};
    text-decoration: none;
  }
`

const NavLinks = styled.div`
  display: none;
  gap: ${theme.spacing.lg};
  
  @media (min-width: ${theme.breakpoints.md}) {
    display: flex;
  }
`

const NavLink = styled.a`
  font-size: ${theme.typography.fontSize.base};
  font-weight: ${theme.typography.fontWeight.medium};
  color: ${theme.colors.warmGray600};
  text-decoration: none;
  position: relative;
  padding: ${theme.spacing.xs} ${theme.spacing.sm};
  border-radius: ${theme.borderRadius.default};
  transition: all ${theme.transitions.default};
  
  /* Hover effect */
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(135deg, ${theme.colors.vibrantPink}15, ${theme.colors.energeticOrange}15);
    border-radius: inherit;
    opacity: 0;
    transition: opacity ${theme.transitions.default};
  }
  
  &:hover {
    color: ${theme.colors.charcoal};
    transform: translateY(-1px);
    
    &::before {
      opacity: 1;
    }
  }
  
  /* Active state */
  &.active {
    color: ${theme.colors.vibrantPink};
    
    &::before {
      opacity: 1;
      background: linear-gradient(135deg, ${theme.colors.vibrantPink}20, ${theme.colors.energeticOrange}20);
    }
  }
  
  /* Content positioning */
  & > * {
    position: relative;
    z-index: 1;
  }
`

const MobileMenuButton = styled.button`
  display: flex;
  flex-direction: column;
  gap: 4px;
  background: none;
  border: none;
  padding: ${theme.spacing.xs};
  cursor: pointer;
  
  @media (min-width: ${theme.breakpoints.md}) {
    display: none;
  }
  
  span {
    width: 24px;
    height: 2px;
    background: ${theme.colors.charcoal};
    border-radius: 2px;
    transition: all ${theme.transitions.default};
    
    &:nth-child(1) {
      transform: ${props => props.isOpen ? 'rotate(45deg) translateY(6px)' : 'none'};
    }
    
    &:nth-child(2) {
      opacity: ${props => props.isOpen ? '0' : '1'};
    }
    
    &:nth-child(3) {
      transform: ${props => props.isOpen ? 'rotate(-45deg) translateY(-6px)' : 'none'};
    }
  }
`

const MobileMenu = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background: ${theme.colors.warmWhite};
  border-bottom: 1px solid ${theme.colors.sand};
  transform: translateY(${props => props.isOpen ? '0' : '-100%'});
  opacity: ${props => props.isOpen ? '1' : '0'};
  visibility: ${props => props.isOpen ? 'visible' : 'hidden'};
  transition: all ${theme.transitions.default};
  
  @media (min-width: ${theme.breakpoints.md}) {
    display: none;
  }
  
  .mobile-links {
    display: flex;
    flex-direction: column;
    padding: ${theme.spacing.lg};
    gap: ${theme.spacing.md};
  }
`

const ScrollProgress = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  height: 2px;
  background: linear-gradient(135deg, ${theme.colors.vibrantPink}, ${theme.colors.energeticOrange});
  width: ${props => props.progress}%;
  transition: width 0.1s ease;
`

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [scrollProgress, setScrollProgress] = useState(0)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')
  
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      
      // Hide/show navbar based on scroll direction
      if (currentScrollY < lastScrollY || currentScrollY < 100) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
        setIsMobileMenuOpen(false)
      }
      
      setLastScrollY(currentScrollY)
      
      // Calculate scroll progress
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = (currentScrollY / totalHeight) * 100
      setScrollProgress(Math.min(progress, 100))
      
      // Update active section
      const sections = ['why', 'screenshots', 'more']
      const currentSection = sections.find(section => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })
      
      if (currentSection) {
        setActiveSection(currentSection)
      }
    }
    
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])
  
  const navLinks = [
    { href: '#why', label: 'Features' },
    { href: '#screenshots', label: 'Preview' },
    { href: '#more', label: 'Learn More' }
  ]
  
  const handleLinkClick = (href) => {
    setIsMobileMenuOpen(false)
    // Smooth scroll to section
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }
  
  return (
    <NavContainer isVisible={isVisible}>
      <div className="container">
        <LogoContainer onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <OptimizedImage 
            src="./icon.png" 
            alt="Navi App Logo" 
            width="40"
            height="40"
            loading="eager"
          />
          <span className="logo-text">Navi</span>
        </LogoContainer>
        
        <NavLinks>
          {navLinks.map((link) => (
            <NavLink
              key={link.href}
              href={link.href}
              className={activeSection === link.href.slice(1) ? 'active' : ''}
              onClick={(e) => {
                e.preventDefault()
                handleLinkClick(link.href)
              }}
            >
              {link.label}
            </NavLink>
          ))}
        </NavLinks>
        
        <MobileMenuButton
          isOpen={isMobileMenuOpen}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </MobileMenuButton>
      </div>
      
      <MobileMenu isOpen={isMobileMenuOpen}>
        <div className="mobile-links">
          {navLinks.map((link) => (
            <NavLink
              key={link.href}
              href={link.href}
              className={activeSection === link.href.slice(1) ? 'active' : ''}
              onClick={(e) => {
                e.preventDefault()
                handleLinkClick(link.href)
              }}
            >
              {link.label}
            </NavLink>
          ))}
        </div>
      </MobileMenu>
      
      <ScrollProgress progress={scrollProgress} />
    </NavContainer>
  )
}

export default Navbar