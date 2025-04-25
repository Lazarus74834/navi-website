import React, { useState } from 'react'
import styled from 'styled-components'
import { theme } from '../styles/theme'

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin: 1rem 0;
`

const EmailInput = styled.input`
  padding: 0.75rem;
  width: 100%;
  max-width: 300px;
  border-radius: ${theme.borderRadius.default};
  border: 1px solid #ccc;
  margin-bottom: 0.8rem;
  font-size: 1rem;
  transition: all 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: ${theme.colors.clay};
    box-shadow: 0 0 0 2px rgba(211, 120, 95, 0.2);
  }
`

const SubmitButton = styled.button`
  padding: 0.75rem 1rem;
  font-size: 1rem;
  background-color: ${theme.colors.clay};
  color: ${theme.colors.ivory};
  border: none;
  border-radius: ${theme.borderRadius.default};
  cursor: pointer;
  font-weight: bold;
  width: 100%;
  max-width: 300px;
  transition: all 0.3s ease;
  position: relative;
  
  &:hover {
    background-color: #bb5d47;
    transform: translateY(-2px);
  }
  
  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
    transform: none;
  }
`

const LoadingSpinner = styled.div`
  display: ${props => props.isLoading ? 'block' : 'none'};
  width: 20px;
  height: 20px;
  border: 2px solid ${theme.colors.ivory};
  border-top: 2px solid transparent;
  border-radius: 50%;
  animation: spin 1s linear infinite;
  position: absolute;
  right: 1rem;
  top: 50%;
  transform: translateY(-50%);
`

const Message = styled.p`
  font-size: 1.1rem;
  font-weight: 500;
  color: ${props => props.isError ? '#bb4444' : '#2d7f2f'};
  margin-top: 1rem;
  animation: fadeInPop 0.4s ease-in-out;
  padding: 0 1rem;
`

const Toast = styled.div`
  position: fixed;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  background: #2d7f2f;
  color: white;
  padding: 1rem 2rem;
  border-radius: ${theme.borderRadius.default};
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  opacity: 0;
  transition: all 0.3s ease;
  z-index: 1000;
  
  &.show {
    opacity: 1;
    transform: translateX(-50%) translateY(-1rem);
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
        <EmailInput 
          type="email" 
          id="email" 
          name="email"
          placeholder="you@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <SubmitButton type="submit" disabled={isLoading}>
          Join Waitlist
          <LoadingSpinner isLoading={isLoading} />
        </SubmitButton>
      </Form>
      
      {message && (
        <Message isError={isError} id="signup-message">
          {message}
        </Message>
      )}
      
      <Toast className={showToast ? 'show' : ''} id="success-toast">
        {toastMessage}
      </Toast>
    </>
  )
}

export default WaitlistForm