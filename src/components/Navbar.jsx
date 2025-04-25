import React from 'react'
import styled from 'styled-components'
import { theme } from '../styles/theme'

const Nav = styled.nav`
  position: sticky;
  top: 0;
  background: ${theme.colors.ivory};
  padding: 0.8rem 1rem;
  text-align: center;
  z-index: 999;
  box-shadow: 0 2px 6px rgba(0,0,0,0.05);
  display: flex;
  justify-content: space-around;
  
  @media (min-width: ${theme.breakpoints.lg}) {
    padding: 1rem 2rem;
  }
`

const NavLink = styled.a`
  margin: 0;
  text-decoration: none;
  color: ${theme.colors.cocoa};
  font-weight: 600;
  font-size: 0.9rem;
  position: relative;
  transition: color 0.3s ease;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 0;
    height: 2px;
    background-color: ${theme.colors.clay};
    transition: width 0.3s ease;
  }
  
  &:hover {
    color: ${theme.colors.clay};
    
    &::after {
      width: 100%;
    }
  }
  
  @media (min-width: ${theme.breakpoints.lg}) {
    font-size: 1rem;
    margin: 0 1rem;
  }
`

const Navbar = () => {
  return (
    <Nav>
      <NavLink href="#why">Why Navi</NavLink>
      <NavLink href="#screenshots">Screenshots</NavLink>
      <NavLink href="#more">Learn More</NavLink>
    </Nav>
  )
}

export default Navbar