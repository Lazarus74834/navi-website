import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Container } from './styled/StyledComponents'
import { theme } from '../styles/theme'

const MapContainer = styled.div`
  width: 100%;
  height: 400px;
  border-radius: ${theme.borderRadius.default};
  overflow: hidden;
  margin: 2rem 0;
  box-shadow: 0 10px 20px rgba(0,0,0,0.05);
  position: relative;
`

const MapLoading = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: ${theme.colors.sand};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  color: ${theme.colors.cocoa};
`

const MapError = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: ${theme.colors.sand};
  display: none;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  color: #bb4444;
  text-align: center;
  padding: 2rem;
  
  &.show {
    display: flex;
  }
`

const MapSection = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setHasError] = useState(false)
  
  useEffect(() => {
    // This will ensure we only run on client side
    if (typeof window !== 'undefined') {
      const loadAppleMapsAPI = () => {
        // Create a script element
        const script = document.createElement('script')
        script.src = `https://maps.apple.com/maps/api/js?key=${import.meta.env.VITE_APPLE_MAPS_KEY}&callback=initMap`
        script.async = true
        script.defer = true

        // Define a global initMap function that will be called when the Maps API loads
        window.initMap = () => {
          try {
            // Create sample data
            const savedPlaces = [
              {
                name: "Golden Gate Park",
                lat: 37.7694,
                lng: -122.4862,
                trip: "San Francisco",
                color: "#D3785F"
              },
              {
                name: "Fisherman's Wharf",
                lat: 37.8080,
                lng: -122.4177,
                trip: "San Francisco",
                color: "#D3785F"
              },
              {
                name: "Central Park",
                lat: 40.7829,
                lng: -73.9654,
                trip: "New York",
                color: "#4A90E2"
              },
              {
                name: "Times Square",
                lat: 40.7580,
                lng: -73.9855,
                trip: "New York",
                color: "#4A90E2"
              }
            ]
            
            // Check if Apple Maps API is available
            if (window.apple && window.apple.maps) {
              // Create map
              const map = new window.apple.maps.Map(document.getElementById('map-container'), {
                center: { lat: 37.7749, lng: -122.4194 },
                zoom: 4,
                mapTypeId: window.apple.maps.MapTypeId.STANDARD,
                showsUserLocation: true,
                showsCompass: true,
                showsScale: true
              })
  
              // Add markers for each saved place
              savedPlaces.forEach(place => {
                const marker = new window.apple.maps.Marker({
                  position: { lat: place.lat, lng: place.lng },
                  map: map,
                  title: place.name,
                  icon: {
                    path: window.apple.maps.SymbolPath.CIRCLE,
                    fillColor: place.color,
                    fillOpacity: 0.8,
                    strokeWeight: 2,
                    strokeColor: theme.colors.ivory,
                    scale: 8
                  }
                })
  
                // Add click listener to show info window
                marker.addListener('click', () => {
                  const infoWindow = new window.apple.maps.InfoWindow({
                    content: `
                      <div style="padding: 8px;">
                        <h3 style="margin: 0 0 4px 0; font-size: 16px;">${place.name}</h3>
                        <p style="margin: 0; font-size: 14px; color: #666;">${place.trip}</p>
                      </div>
                    `
                  })
                  infoWindow.open(map, marker)
                })
              })
              
              setIsLoading(false)
            } else {
              // Apple Maps API not available
              console.error('Apple Maps API not available')
              setHasError(true)
              setIsLoading(false)
            }
          } catch (error) {
            console.error('Error initializing map:', error)
            setHasError(true)
            setIsLoading(false)
          }
        }
        
        // Handle script loading error
        script.onerror = () => {
          console.error('Failed to load Apple Maps API')
          setHasError(true)
          setIsLoading(false)
        }
        
        // Add script to document
        document.head.appendChild(script)
      }
      
      // Check if we're on allowed domain
      const currentDomain = window.location.hostname
      const allowedDomain = 'navi-travel.com'
      
      if (currentDomain === allowedDomain || 
          currentDomain === 'localhost' ||
          currentDomain === '127.0.0.1') {
        loadAppleMapsAPI()
      } else {
        setHasError(true)
        setIsLoading(false)
      }
    }
  }, [])
  
  return (
    <Container>
      <h2 id="map">🗺️ Your Places, Your Map</h2>
      <p>See your saved places come to life on an interactive map. Color-coded by trip, tappable for details, and ready for exploration.</p>
      
      <MapContainer id="map-container">
        {isLoading && (
          <MapLoading id="map-loading">Loading map...</MapLoading>
        )}
        <MapError className={hasError ? 'show' : ''} id="map-error">
          Unable to load map. Please try refreshing the page.
        </MapError>
      </MapContainer>
    </Container>
  )
}

export default MapSection