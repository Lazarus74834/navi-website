import React from 'react'
import styled from 'styled-components'
import { simpleTheme } from './styles/simpleTheme'

const Container = styled.div`
  min-height: 100vh;
  background: ${simpleTheme.colors.cream};
  padding: ${simpleTheme.spacing.lg};
`

const Header = styled.header`
  text-align: center;
  padding: ${simpleTheme.spacing['2xl']} 0;
  background: ${simpleTheme.colors.warmWhite};
  border-radius: ${simpleTheme.borderRadius.lg};
  margin-bottom: ${simpleTheme.spacing.xl};
`

const Title = styled.h1`
  font-size: 3rem;
  color: ${simpleTheme.colors.charcoal};
  margin-bottom: ${simpleTheme.spacing.md};
`

const Subtitle = styled.p`
  font-size: 1.5rem;
  color: ${simpleTheme.colors.vibrantPink};
  font-style: italic;
  margin-bottom: ${simpleTheme.spacing.lg};
`

const Description = styled.p`
  font-size: 1.2rem;
  color: ${simpleTheme.colors.warmGray600};
  max-width: 600px;
  margin: 0 auto;
`

const SimpleApp = () => {
  return (
    <Container>
      <Header>
        <Title>Navi</Title>
        <Subtitle>Inspired, not planned</Subtitle>
        <Description>
          Collect, organise, and navigate to the places that matter most — with a travel notebook built for the way you explore.
        </Description>
      </Header>
    </Container>
  )
}

export default SimpleApp