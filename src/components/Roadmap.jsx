import React from 'react'
import styled from 'styled-components'
import { theme } from '../styles/theme'

const RoadmapSection = styled.section`
  padding: ${theme.spacing['3xl']} 0;
  background: linear-gradient(135deg, ${theme.colors.sand} 0%, ${theme.colors.cream} 100%);
  
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
  }
`

const RoadmapGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${theme.spacing.lg};
  margin-bottom: ${theme.spacing['2xl']};
  
  @media (min-width: ${theme.breakpoints.sm}) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (min-width: ${theme.breakpoints.lg}) {
    grid-template-columns: repeat(3, 1fr);
    gap: ${theme.spacing.xl};
  }
`

const RoadmapCard = styled.div`
  background: ${theme.colors.warmWhite};
  border-radius: ${theme.borderRadius.lg};
  padding: ${theme.spacing.xl};
  border: 2px solid ${theme.colors.sandLight};
  transition: all ${theme.transitions.default};
  text-align: center;
  
  &:hover {
    transform: translateY(-4px);
    border-color: ${theme.colors.softGreen};
    box-shadow: ${theme.shadows.md};
  }
  
  h3 {
    font-size: ${theme.typography.fontSize.lg};
    color: ${theme.colors.charcoal};
    margin-bottom: ${theme.spacing.sm};
  }
  
  p {
    color: ${theme.colors.warmGray600};
    margin: 0;
    font-size: ${theme.typography.fontSize.base};
  }
`

const RoadmapLink = styled.div`
  text-align: center;
`

const RoadmapButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: ${theme.spacing.xs};
  padding: ${theme.spacing.md} ${theme.spacing.lg};
  background: linear-gradient(135deg, ${theme.colors.softGreen}, ${theme.colors.energeticOrange});
  color: white;
  text-decoration: none;
  border-radius: ${theme.borderRadius.md};
  font-weight: ${theme.typography.fontWeight.semibold};
  transition: all ${theme.transitions.default};
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: ${theme.shadows.md};
  }
`

const Roadmap = () => {
  const roadmapItems = [
    {
      title: '🌟 Launch Early Access',
      description: 'June 2025'
    },
    {
      title: '🔒 User Authentication',
      description: 'Secure login system'
    },
    {
      title: '🗺️ Map Enhancements',
      description: 'Smart filtering & navigation'
    },
    {
      title: '📥 Smart Importing',
      description: 'Social media & blogs'
    },
    {
      title: '🔗 Social Features',
      description: 'Share trips with friends'
    },
    {
      title: '🧠 AI Assistant',
      description: 'Smart trip suggestions'
    }
  ]
  
  return (
    <RoadmapSection>
      <div className="container">
        <SectionHeader>
          <h2 id="roadmap">Our Journey Ahead</h2>
          <p>We believe the best trips grow with you. Here's where Navi is headed:</p>
        </SectionHeader>
        
        <RoadmapGrid>
          {roadmapItems.map((item, index) => (
            <RoadmapCard key={index}>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </RoadmapCard>
          ))}
        </RoadmapGrid>
        
        <RoadmapLink>
          <RoadmapButton 
            href="https://www.notion.so/Public-Roadmap-1e06e8c864eb8028ad53f3153ccd097e?pvs=4" 
            target="_blank"
          >
            View Full Roadmap →
          </RoadmapButton>
        </RoadmapLink>
      </div>
    </RoadmapSection>
  )
}

export default Roadmap