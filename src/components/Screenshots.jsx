import React, { useRef, useState, useEffect } from 'react'
import styled from 'styled-components'
import { theme } from '../styles/theme'
import OptimizedImage from './common/OptimizedImage'

const ScreenshotSection = styled.section`
  padding: ${theme.spacing['3xl']} 0;
  background: ${theme.colors.sand};
  
  .container {
    max-width: 1280px;
    margin: 0 auto;
    padding: 0 ${theme.spacing.container.sm};
    
    @media (min-width: ${theme.breakpoints.md}) {
      padding: 0 ${theme.spacing.container.md};
    }
  }
`

const SectionHeader = styled.div`
  text-align: center;
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
    max-width: 600px;
    margin: 0 auto;
    line-height: ${theme.typography.lineHeight.relaxed};
    
    @media (min-width: ${theme.breakpoints.md}) {
      font-size: ${theme.typography.fontSize.xl};
    }
  }
`

const ScreenshotContainer = styled.div`
  position: relative;
  max-width: 100%;
  margin: 0 auto;
`

const ScreenshotCarousel = styled.div`
  overflow-x: auto;
  overflow-y: hidden;
  scroll-behavior: smooth;
  scrollbar-width: none;
  -ms-overflow-style: none;
  
  &::-webkit-scrollbar {
    display: none;
  }
  
  /* Custom scrollbar for better UX */
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -20px;
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 4px;
    background: ${theme.colors.sand};
    border-radius: ${theme.borderRadius.full};
  }
`

const ScreenshotTrack = styled.div`
  display: flex;
  gap: ${theme.spacing.lg};
  padding: ${theme.spacing.md} 0 ${theme.spacing.xl};
  width: fit-content;
  min-width: 100%;
  justify-content: center;
  
  @media (max-width: ${theme.breakpoints.md}) {
    justify-content: flex-start;
    padding-left: ${theme.spacing.md};
    padding-right: ${theme.spacing.md};
  }
`

const ScreenshotCard = styled.div`
  flex-shrink: 0;
  position: relative;
  transition: transform ${theme.transitions.default};
  cursor: grab;
  
  &:active {
    cursor: grabbing;
  }
  
  &:hover {
    transform: translateY(-8px) scale(1.02);
  }
  
  img {
    width: 240px;
    height: 480px;
    object-fit: cover;
    border-radius: ${theme.borderRadius.lg};
    box-shadow: none;
    border: none;
    transition: all ${theme.transitions.default};
    
    @media (min-width: ${theme.breakpoints.md}) {
      width: 280px;
      height: 560px;
    }
  }
  
  /* Hover effect */
  &:hover img {
    box-shadow: none;
  }
`

const SwipeIndicator = styled.div`
  text-align: center;
  margin-top: ${theme.spacing.lg};
  
  @media (min-width: ${theme.breakpoints.md}) {
    display: none;
  }
  
  p {
    font-size: ${theme.typography.fontSize.sm};
    color: ${theme.colors.warmGray400};
    display: flex;
    align-items: center;
    justify-content: center;
    gap: ${theme.spacing.xs};
    
    &::before,
    &::after {
      content: '→';
      font-size: ${theme.typography.fontSize.xs};
      animation: float 2s ease-in-out infinite;
    }
    
    &::before {
      animation-delay: 0s;
    }
    
    &::after {
      animation-delay: 1s;
      transform: scaleX(-1);
    }
  }
`

const Screenshots = () => {
  const carouselRef = useRef(null)
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [scrollLeft, setScrollLeft] = useState(0)
  
  const screenshots = [
    {
      src: "./iPhone1.webp",
      fallback: "./iPhone1.png",
      alt: "Trip Organization - Keep all your travel plans in one place",
      title: "Organize"
    },
    {
      src: "./iPhone2.webp",
      fallback: "./iPhone2.png", 
      alt: "Interactive Map - Explore with your personal travel map",
      title: "Explore"
    },
    {
      src: "./iPhone3.webp",
      fallback: "./iPhone3.png",
      alt: "AI Travel Assistant - Get personalized recommendations",
      title: "Discover"
    }
  ]
  
  const handleMouseDown = (e) => {
    setIsDragging(true)
    setStartX(e.pageX - carouselRef.current.offsetLeft)
    setScrollLeft(carouselRef.current.scrollLeft)
  }
  
  const handleMouseMove = (e) => {
    if (!isDragging) return
    e.preventDefault()
    const x = e.pageX - carouselRef.current.offsetLeft
    const walk = (x - startX) * 2
    carouselRef.current.scrollLeft = scrollLeft - walk
  }
  
  const handleMouseUp = () => {
    setIsDragging(false)
  }
  
  const handleTouchStart = (e) => {
    setStartX(e.touches[0].pageX - carouselRef.current.offsetLeft)
    setScrollLeft(carouselRef.current.scrollLeft)
  }
  
  const handleTouchMove = (e) => {
    const x = e.touches[0].pageX - carouselRef.current.offsetLeft
    const walk = (x - startX) * 2
    carouselRef.current.scrollLeft = scrollLeft - walk
  }
  
  return (
    <ScreenshotSection>
      <div className="container">
        <SectionHeader>
          <h2 id="screenshots">A Glimpse Inside Navi</h2>
          <p>Organize your trips, explore with your own interactive map, and discover hidden gems with your AI travel companion.</p>
        </SectionHeader>
        
        <ScreenshotContainer>
          <ScreenshotCarousel
            ref={carouselRef}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleMouseUp}
          >
            <ScreenshotTrack>
              {screenshots.map((screenshot, index) => (
                <ScreenshotCard key={index}>
                  <OptimizedImage 
                    src={screenshot.src}
                    fallbackSrc={screenshot.fallback}
                    alt={screenshot.alt}
                    width="280"
                    height="560"
                  />
                </ScreenshotCard>
              ))}
            </ScreenshotTrack>
          </ScreenshotCarousel>
          
          <SwipeIndicator>
            <p>Swipe to explore</p>
          </SwipeIndicator>
        </ScreenshotContainer>
      </div>
    </ScreenshotSection>
  )
}

export default Screenshots