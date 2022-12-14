import { useRef } from 'react'
import { useState, useEffect } from 'react'
import mapboxgl from '!mapbox-gl'
mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_AUTH_KEY


export const MapBox = ({ location }) => {
  const mapContainer = useRef(null)
  const map = useRef(null)
  const [lng, setLng] = useState(null)
  const [lat, setLat] = useState(null)
  const [zoom, setZoom] = useState(14)


  useEffect(() => {
    setLat(location.latitude)
    setLng(location.longitude)
    console.log('location->', location.latitude)
    console.log('location->', location.longitude)
  }, [location])


  useEffect(() => {
    if (map.current) return
    const getMap = async () => {
      map.current = await new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/streets-v12',
        center: [lng, lat],
        zoom: zoom,
      })
    }
    lat ? getMap() : <></>
  }, [lng, lat])


  return (
    <>
      {location ?
        <div className='map-display-container'>
          <div className="sidebar">
            Longitude: {lng} | Latitude: {lat}
          </div>
          <div ref={mapContainer} className="map-container" />
        </div >
        :
        <></>
      }
    </>
  )
}

export default MapBox