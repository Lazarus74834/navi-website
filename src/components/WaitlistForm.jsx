import React, { useState } from 'react'
import styled from 'styled-components'
import { theme } from '../styles/theme'

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.md};
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
`

const InputWrapper = styled.div`
  position: relative;
  width: 100%;
`

const EmailInput = styled.input`
  width: 100%;
  padding: ${theme.spacing.md} ${theme.spacing.lg};
  font-size: ${theme.typography.fontSize.base};
  font-family: ${theme.typography.fontFamily.primary};
  background: ${theme.colors.warmWhite};
  border: 2px solid ${theme.colors.sand};
  border-radius: ${theme.borderRadius.md};
  transition: all ${theme.transitions.default};
  color: ${theme.colors.charcoal};
  
  &::placeholder {
    color: ${theme.colors.warmGray400};
    font-style: italic;
  }
  
  &:focus {
    outline: none;
    border-color: ${theme.colors.vibrantPink};
    background: ${theme.colors.warmWhite};
    box-shadow: 0 0 0 4px rgba(232, 90, 138, 0.1);
    transform: translateY(-1px);
  }
  
  &:valid {
    border-color: ${theme.colors.softGreen};
    
    &:focus {
      border-color: ${theme.colors.softGreen};
      box-shadow: 0 0 0 4px rgba(143, 174, 143, 0.1);
    }
  }
`

const SubmitButton = styled.button`
  padding: ${theme.spacing.md} ${theme.spacing.lg};
  font-size: ${theme.typography.fontSize.base};
  font-weight: ${theme.typography.fontWeight.semibold};
  font-family: ${theme.typography.fontFamily.primary};
  background: linear-gradient(135deg, ${theme.colors.vibrantPink}, ${theme.colors.energeticOrange});
  color: white;
  border: none;
  border-radius: ${theme.borderRadius.md};
  cursor: pointer;
  transition: all ${theme.transitions.default};
  position: relative;
  overflow: hidden;
  
  /* Subtle shimmer effect */
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
    transition: left 0.5s;
  }
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: ${theme.shadows.md};
    
    &::before {
      left: 100%;
    }
  }
  
  &:active {
    transform: translateY(0);
  }
  
  &:disabled {
    background: ${theme.colors.warmGray400};
    cursor: not-allowed;
    transform: none;
    
    &::before {
      display: none;
    }
  }
  
  &:focus-visible {
    outline: 2px solid ${theme.colors.vibrantPink};
    outline-offset: 2px;
  }
`

const LoadingSpinner = styled.div`
  display: ${props => props.isLoading ? 'inline-block' : 'none'};
  width: 18px;
  height: 18px;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-top: 2px solid white;
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
  margin-left: ${theme.spacing.xs};
  
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`

const Message = styled.div`
  font-size: ${theme.typography.fontSize.sm};
  font-weight: ${theme.typography.fontWeight.medium};
  color: ${props => props.isError ? theme.colors.error : theme.colors.success};
  background: ${props => props.isError ? `${theme.colors.error}10` : `${theme.colors.success}10`};
  padding: ${theme.spacing.sm} ${theme.spacing.md};
  border-radius: ${theme.borderRadius.default};
  border: 1px solid ${props => props.isError ? `${theme.colors.error}30` : `${theme.colors.success}30`};
  text-align: center;
  animation: fadeInUp 0.3s ease-out;
`

const Toast = styled.div`
  position: fixed;
  top: ${theme.spacing.lg};
  right: ${theme.spacing.lg};
  background: linear-gradient(135deg, ${theme.colors.softGreen}, ${theme.colors.energeticOrange});
  color: white;
  padding: ${theme.spacing.md} ${theme.spacing.lg};
  border-radius: ${theme.borderRadius.md};
  box-shadow: ${theme.shadows.lg};
  transform: translateX(400px);
  transition: transform ${theme.transitions.slow};
  z-index: ${theme.zIndex.modal};
  max-width: 300px;
  font-size: ${theme.typography.fontSize.sm};
  font-weight: ${theme.typography.fontWeight.medium};
  
  &.show {
    transform: translateX(0);
  }
  
  @media (max-width: ${theme.breakpoints.sm}) {
    left: ${theme.spacing.md};
    right: ${theme.spacing.md};
    top: ${theme.spacing.lg};
    transform: translateY(-100px);
    max-width: none;
    
    &.show {
      transform: translateY(0);
    }
  }
`

const WaitlistForm = () => {
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)
  const [showToast, setShowToast] = useState(false)
  const [toastMessage, setToastMessage] = useState('')
  const [lastSubmitted, setLastSubmitted] = useState('')
  
  const handleSubmit = async (e) => {
    e.preventDefault()
    
    const trimmedEmail = email.trim().toLowerCase()
    
    if (trimmedEmail === '' || !trimmedEmail.includes('@') || trimmedEmail === lastSubmitted) {
      setMessage('Please enter a valid and unique email address.')
      setIsError(true)
      return
    }
    
    setLastSubmitted(trimmedEmail)
    setMessage('⏳ Sending...')
    setIsError(false)
    setIsLoading(true)
    
    try {
      const response = await fetch('https://script.google.com/macros/s/AKfycby9JYj3F6HQKpG7aUqTBaXU0Ezi_sMivq0P5CtiVFdI0lcephQT4UuUOD__ImRd6SZXpw/exec', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: 'email=' + encodeURIComponent(trimmedEmail)
      })
      
      if (response.ok) {
        setToastMessage("🎉 You're on the list! Check your inbox soon.")
        setShowToast(true)
        setTimeout(() => setShowToast(false), 3000)
        
        setMessage('')
        setEmail('')
      } else {
        setMessage('Oops! Something went wrong.')
        setIsError(true)
      }
    } catch (err) {
      setMessage('⚠️ Network error. Try again later.')
      setIsError(true)
    } finally {
      setIsLoading(false)
    }
  }
  
  return (
    <>
      <Form id="waitlist-form" onSubmit={handleSubmit}>
        <InputWrapper>
          <EmailInput 
            type="email" 
            id="email" 
            name="email"
            placeholder="your.email@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            autoComplete="email"
          />
        </InputWrapper>
        <SubmitButton type="submit" disabled={isLoading}>
          {isLoading ? (
            <>
              Joining...
              <LoadingSpinner isLoading={isLoading} />
            </>
          ) : (
            'Join the Waitlist'
          )}
        </SubmitButton>
        
        {message && (
          <Message isError={isError} id="signup-message">
            {message}
          </Message>
        )}
      </Form>
      
      <Toast className={showToast ? 'show' : ''} id="success-toast">
        {toastMessage}
      </Toast>
    </>
  )
}

export default WaitlistForm