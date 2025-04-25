import React from 'react'
import { Container, ScreenshotGallery } from './styled/StyledComponents'
import OptimizedImage from './common/OptimizedImage'

const Screenshots = () => {
  return (
    <Container>
      <h2 id="screenshots">📸 Sneak Peek: A Look Inside Navi</h2>
      <p>Organize your trips, explore with your own interactive map, and chat with your AI travel companion.</p>
      
      <ScreenshotGallery>
        <OptimizedImage 
          src="./iPhone1.webp" 
          fallbackSrc="./iPhone1.png"
          alt="Trip List Screenshot" 
          width="260"
          height="540"
        />
        <OptimizedImage 
          src="./iPhone2.webp" 
          fallbackSrc="./iPhone2.png"
          alt="Map Screenshot" 
          width="260" 
          height="540"
        />
        <OptimizedImage 
          src="./iPhone3.webp" 
          fallbackSrc="./iPhone3.png"
          alt="AI Assistant Screenshot" 
          width="260" 
          height="540"
        />
      </ScreenshotGallery>
    </Container>
  )
}

export default Screenshots