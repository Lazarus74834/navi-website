import React from 'react'
import styled from 'styled-components'
import { Container, BentoGrid, BentoBox, Button } from './styled/StyledComponents'
import { theme } from '../styles/theme'

const RoadmapLink = styled.div`
  text-align: center;
  margin: 2rem 0;
`

const Roadmap = () => {
  return (
    <Container>
      <h2 id="roadmap">🎯 Our Journey Ahead</h2>
      <p>We believe the best trips grow with you. Here's where Navi is headed:</p>
      
      <BentoGrid>
        <BentoBox>
          <h3>🌟 Launch Early Access</h3>
          <p>May 2025</p>
        </BentoBox>
        <BentoBox>
          <h3>🔒 User Authentication</h3>
          <p>Supabase Integration</p>
        </BentoBox>
        <BentoBox>
          <h3>🗺️ Map Enhancements</h3>
          <p>Smart Filtering & Navigation</p>
        </BentoBox>
        <BentoBox>
          <h3>📥 Smart Importing</h3>
          <p>Social Media & Blogs</p>
        </BentoBox>
        <BentoBox>
          <h3>🔗 Social Features</h3>
          <p>Share Trips with Friends</p>
        </BentoBox>
        <BentoBox>
          <h3>🧠 AI Assistant</h3>
          <p>Smart Trip Suggestions</p>
        </BentoBox>
      </BentoGrid>
      
      <RoadmapLink>
        <Button 
          href="https://www.notion.so/Public-Roadmap-1e06e8c864eb8028ad53f3153ccd097e?pvs=4" 
          target="_blank" 
          variant="ghost"
        >
          View Full Roadmap →
        </Button>
      </RoadmapLink>
    </Container>
  )
}

export default Roadmap