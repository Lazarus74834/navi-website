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
        // Create a script element for Apple's official MapKit JS
        const script = document.createElement('script')
        script.src = 'https://cdn.apple-mapkit.com/mk/5.x.x/mapkit.js'
        script.async = true
        script.defer = true
        
        script.onload = () => {
          try {
            // Initialize MapKit with JWT through authorization callback
            window.mapkit.init({
              authorizationCallback: function(done) {
                // Use environment variable for JWT
                const jwt = import.meta.env.VITE_APPLE_MAPS_JWT || '';
                done(jwt);
              }
            });
            
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
            ];
            
            // Create map with Apple's official MapKit
            const map = new window.mapkit.Map('map-container', {
              showsMapTypeControl: true,
              showsZoomControl: true,
              showsUserLocationControl: true,
              showsScale: true
            });
            
            // Set the map region to show all points
            map.region = new window.mapkit.CoordinateRegion(
              new window.mapkit.Coordinate(39.8283, -98.5795), // Center of US
              new window.mapkit.CoordinateSpan(30, 60) // Wide span to show points
            );
            
            // Add annotations (markers) for each saved place
            savedPlaces.forEach(place => {
              const annotation = new window.mapkit.MarkerAnnotation(
                new window.mapkit.Coordinate(place.lat, place.lng), {
                  title: place.name,
                  subtitle: place.trip,
                  color: place.color
                }
              );
              map.addAnnotation(annotation);
            });
            
            setIsLoading(false);
          } catch (error) {
            console.error('Error initializing map:', error);
            setHasError(true);
            setIsLoading(false);
          }
        };
        
        // Handle script loading error
        script.onerror = () => {
          console.error('Failed to load Apple MapKit JS');
          setHasError(true);
          setIsLoading(false);
        };
        
        // Add script to document
        document.head.appendChild(script);
      };
      
      // Check if we're on allowed domain
      const currentDomain = window.location.hostname;
      const allowedDomains = ['navi-travel.com', 'localhost', '127.0.0.1'];
      
      if (allowedDomains.includes(currentDomain)) {
        loadAppleMapsAPI();
      } else {
        setHasError(true);
        setIsLoading(false);
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