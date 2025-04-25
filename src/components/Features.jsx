import React from 'react'
import { Container, BentoGrid, BentoBox } from './styled/StyledComponents'

const Features = () => {
  return (
    <Container>
      <h2 id="why">📌 Why Choose Navi?</h2>
      <BentoGrid>
        <BentoBox>
          <h3>Inspired Travelling</h3>
          <p>Start your adventures with saved places, notes, and easy-to-browse trips.</p>
        </BentoBox>
        <BentoBox>
          <h3>Magic Import</h3>
          <p>Spotted a cool spot on TikTok or Instagram Reel?  Navi's AI will save places from the content ready for your trip.</p>
        </BentoBox>
        <BentoBox>
          <h3>Interactive Maps</h3>
          <p>Explore your saved places on a color-coded, tappable map. Navigate spontaneously or plan ahead.</p>
        </BentoBox>
        <BentoBox>
          <h3>AI Travel Assistant</h3>
          <p>Ask for recommendations, find nearby spots, plan routes — Navi is like having a local expert in your pocket.</p>
        </BentoBox>
        <BentoBox>
          <h3>Build a Book of Reccomendations</h3>
          <p>Post Trip your places will be saved ready for reccomendations or a re visit.</p>
        </BentoBox>
        <BentoBox>
          <h3>Privacy & Control</h3>
          <p>Your location, your rules. Navi is designed with transparency and respect for your personal data.</p>
        </BentoBox>
      </BentoGrid>
    </Container>
  )
}

export default Features