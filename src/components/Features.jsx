import React, { useRef, useEffect, useState } from 'react'
import styled from 'styled-components'
import { theme } from '../styles/theme'

const FeaturesSection = styled.section`
  padding: ${theme.spacing['3xl']} 0;
  background: linear-gradient(135deg, ${theme.colors.cream} 0%, ${theme.colors.sand} 100%);
  position: relative;
  
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
  
  .section-badge {
    display: inline-block;
    background: linear-gradient(135deg, ${theme.colors.vibrantPink}, ${theme.colors.energeticOrange});
    color: white;
    padding: ${theme.spacing.xs} ${theme.spacing.md};
    border-radius: ${theme.borderRadius.full};
    font-size: ${theme.typography.fontSize.sm};
    font-weight: ${theme.typography.fontWeight.medium};
    text-transform: uppercase;
    letter-spacing: 0.05em;
    margin-bottom: ${theme.spacing.lg};
    box-shadow: ${theme.shadows.sm};
  }
  
  h2 {
    font-family: ${theme.typography.fontFamily.section};
    font-size: ${theme.typography.fontSize['3xl']};
    color: ${theme.colors.charcoal};
    margin-bottom: ${theme.spacing.md};
    
    @media (min-width: ${theme.breakpoints.md}) {
      font-size: ${theme.typography.fontSize['4xl']};
    }
  }
  
  .section-description {
    font-size: ${theme.typography.fontSize.lg};
    color: ${theme.colors.warmGray600};
    max-width: 600px;
    margin: 0 auto;
    line-height: ${theme.typography.lineHeight.relaxed};
  }
`

const FeatureGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${theme.spacing.lg};
  
  @media (min-width: ${theme.breakpoints.sm}) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (min-width: ${theme.breakpoints.lg}) {
    grid-template-columns: repeat(3, 1fr);
    gap: ${theme.spacing.xl};
  }
`

const FeatureCard = styled.div`
  background: ${theme.colors.warmWhite};
  border-radius: ${theme.borderRadius.lg};
  padding: ${theme.spacing.xl};
  box-shadow: ${theme.shadows.sm};
  border: 1px solid ${theme.colors.sandLight};
  transition: all ${theme.transitions.default};
  position: relative;
  overflow: hidden;
  
  /* Hover effects */
  &:hover {
    transform: translateY(-8px) scale(1.02);
    box-shadow: ${theme.shadows.lg};
    border-color: ${theme.colors.vibrantPink};
  }
  
  /* Different hover colors for variety */
  &:nth-child(2):hover {
    border-color: ${theme.colors.softGreen};
  }
  
  &:nth-child(3):hover {
    border-color: ${theme.colors.energeticOrange};
  }
  
  &:nth-child(5):hover {
    border-color: ${theme.colors.softGreen};
  }
  
  &:nth-child(6):hover {
    border-color: ${theme.colors.energeticOrange};
  }
  
  /* Subtle background pattern on hover */
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, ${theme.colors.vibrantPink}05, ${theme.colors.energeticOrange}05);
    opacity: 0;
    transition: opacity ${theme.transitions.default};
  }
  
  &:hover::before {
    opacity: 1;
  }
  
  /* Content positioning */
  & > * {
    position: relative;
    z-index: 1;
  }
  
  .feature-icon {
    font-size: ${theme.typography.fontSize['2xl']};
    margin-bottom: ${theme.spacing.md};
    display: block;
    transition: transform ${theme.transitions.default};
  }
  
  &:hover .feature-icon {
    transform: scale(1.1) rotate(5deg);
  }
  
  .feature-title {
    font-size: ${theme.typography.fontSize.xl};
    font-weight: ${theme.typography.fontWeight.semibold};
    color: ${theme.colors.charcoal};
    margin-bottom: ${theme.spacing.sm};
    line-height: ${theme.typography.lineHeight.snug};
  }
  
  .feature-description {
    color: ${theme.colors.warmGray600};
    line-height: ${theme.typography.lineHeight.relaxed};
    margin: 0;
  }
  
  /* Scroll animation */
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.6s ease;
  
  &.animate-in {
    opacity: 1;
    transform: translateY(0);
  }
`

const Features = () => {
  const [visibleCards, setVisibleCards] = useState(new Set())
  const cardRefs = useRef([])
  
  const features = [
    {
      icon: '✨',
      title: 'Inspired Traveling',
      description: 'Transform spontaneous discoveries into organized adventures. Save places, add personal notes, and create trips that actually reflect how you love to explore.'
    },
    {
      icon: '🪄',
      title: 'Magic Import',
      description: 'Spotted something amazing on TikTok or Instagram? Our AI instantly saves places from your favorite content, ready for your next adventure.'
    },
    {
      icon: '🗺️',
      title: 'Interactive Maps',
      description: 'Your saved places come alive on beautiful, color-coded maps. Navigate spontaneously or plan ahead — whatever fits your travel style.'
    },
    {
      icon: '🤖',
      title: 'AI Travel Assistant',
      description: 'Ask for recommendations, discover hidden gems, or plan the perfect route. It’s like having a knowledgeable local friend wherever you go.'
    },
    {
      icon: '📖',
      title: 'Personal Travel Library',
      description: 'Every place you visit becomes part of your growing collection. Perfect for recommendations to friends or planning your next return trip.'
    },
    {
      icon: '🔒',
      title: 'Privacy & Control',
      description: 'Your adventures, your rules. We’re built on transparency and respect for your personal data — because trust matters in travel.'
    }
  ]
  
  useEffect(() => {
    const observers = []
    
    cardRefs.current.forEach((card, index) => {
      if (!card) return
      
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              setVisibleCards(prev => new Set([...prev, index]))
            }, index * 100) // Stagger the animations
          }
        },
        { threshold: 0.1 }
      )
      
      observer.observe(card)
      observers.push(observer)
    })
    
    return () => {
      observers.forEach(observer => observer.disconnect())
    }
  }, [])
  
  return (
    <FeaturesSection>
      <div className="container">
        <SectionHeader>
          <div className="section-badge">Features</div>
          <h2 id="why">Why travelers choose Navi</h2>
          <p className="section-description">
            We’re reimagining how you discover, organize, and navigate the world — one meaningful place at a time.
          </p>
        </SectionHeader>
        
        <FeatureGrid>
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              ref={el => cardRefs.current[index] = el}
              className={visibleCards.has(index) ? 'animate-in' : ''}
            >
              <span className="feature-icon">{feature.icon}</span>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </FeatureCard>
          ))}
        </FeatureGrid>
      </div>
    </FeaturesSection>
  )
}

export default Features