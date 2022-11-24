/* eslint-disable comma-dangle */
import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

// Imports
import axios from 'axios'
import { getPayload, getToken } from '../common/Auth.js'

// Custom Components
import LocationForm from '../common/LocationForm.js'

const EditLocation = () => {

  // ! Location Variables
  //extract locationId
  const { locationId } = useParams()
  const navigate = useNavigate()

  // ! State
  // Track state of following variables
  const [formFields, setFormFields] = useState({
    name: '',
    latitude: 0,
    longitude: 0,
    countryCode: '',
    currency: '',
    description: '',
    parking: true,
    freeParking: false,
    toilets: false,
    water: false,
    nearestFuel: 0,
    nearbyActivities: '',
    image: ''
  })

  const [ errors, setErrors ] = useState(null)

  // ! Execution
  useEffect(() => {
    const getSingleLocation = async () => {
      try {
        const { data } = await axios.get(`/api/locations/${locationId}`)
        //populate for fields with single location info
        console.log('Location owner => ', data.addedBy._id)
        console.log('Payload --> ', getPayload())
        setFormFields(data)
      } catch (err) {
        console.log(err)
      }
    }
    getSingleLocation()
  }, [locationId])

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const { data } = await axios.put(`/api/locations/${locationId}`, formFields, 
        { headers: {
          Authorization: `Bearer ${getToken()}`, 
        },
        })
      console.log('Location edited ->', data)
      navigate(`/locations/${locationId}`)
    } catch (err) {
      console.log('Edit failed ->', err)  
      setErrors(err.response.data)
    }
  }

  // ! JSX
  return (
    <main className="form-page">
      <h1>Edit Location</h1>
      <LocationForm 
        handleSubmit={handleSubmit} 
        formFields={formFields}
        setFormFields={setFormFields}
        errors={errors}
        setErrors={setErrors}
        formName="Edit Location" 
      />
    </main>
  )
}

export default EditLocation