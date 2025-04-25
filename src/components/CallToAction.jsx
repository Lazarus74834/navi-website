import React from 'react'
import { ButtonContainer, Button, ComingSoonBadge } from './styled/StyledComponents'

const CallToAction = () => {
  return (
    <ButtonContainer>
      <Button href="#" className="primary">
        📥 Download Navi 
        <ComingSoonBadge>Coming Soon</ComingSoonBadge>
      </Button>
      <Button href="#" variant="secondary">
        🎥 Watch a Demo 
        <ComingSoonBadge>Coming Soon</ComingSoonBadge>
      </Button>
      <Button href="#" variant="ghost">
        📖 Learn More About Our Vision 
        <ComingSoonBadge>Coming Soon</ComingSoonBadge>
      </Button>
    </ButtonContainer>
  )
}

export default CallToAction