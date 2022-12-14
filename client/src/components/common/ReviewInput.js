/* eslint-disable comma-dangle */
// * React
import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'

// * Imports
import axios from 'axios'
import { getToken } from './Auth'
import { isAuthenticated } from './Auth'
import { getUserId, getPayload } from './Auth'

// * Bootstrap
import Col from 'react-bootstrap/Col'


const ReviewInput = ({ location, setLocation }) => {

  const { locationId } = useParams()

  const [formFields, setFormFields] = useState({
    text: '',
    rating: '0',
  })
  const [errors, setErrors] = useState(null)


  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await axios.post(`/api/locations/${locationId}/review`, formFields, {
        headers: {
          Authorization: `Bearer ${getToken()}`,
        },
      })
      setFormFields({ text: '', rating: '0' })
      const { data } = await axios.get(`/api/locations/${locationId}`)
      setLocation(data)
      console.log(formFields)
    } catch (err) {
      console.log('hello ->', err.response.data)
      console.log('Form-<', formFields)
      setErrors(err.response.data)
    }
  }

  const handleChange = (e) => {
    const updatedFormFields = { ...formFields }
    updatedFormFields[e.target.name] = e.target.value
    setFormFields(updatedFormFields)
    setErrors({ ...errors, [e.target.name]: '', message: '' })
  }





  return (
    <Col md="12">
      <div className='review-tab-container'>
        {isAuthenticated() ?
          <div className='leave-review-container'>
            <form onSubmit={handleSubmit}>
              <p className='leave-review-title'>Leave a Review:</p>
              <textarea
                required
                className='form-control'
                type="text"
                name="text"
                onChange={handleChange}
                placeholder="Type your review here: "
                value={formFields.text}
              />
              {errors && errors.text && <small className="text-danger">{errors.text}</small>}
              <p id='rating-title'>Rating: {formFields.rating}</p>
              <div className='review-rating-container'>
                <input type='range' name='rating' id='rating-range' min="0" max="5" onChange={handleChange} value={formFields.rating}></input>
              </div>
              {errors && errors.text && <small className="text-danger">{errors.text}</small>}
              <div className='rev-submit-container'>
                <button className='btn btn-primary' id='rev-submit-btn'>Submit</button>
              </div>
              <hr className='single-page-hr'></hr>
            </form>
          </div>
          :
          <div className='review-login-register'>
            <p>Please Register or Login to leave a Review</p>
            <div className='review-login-buttons'>
              <Link to={'/login'}>
                <button className='btn btn-lg btn-danger' id='review-login-buttons'>Login</button>
              </Link>
              <Link to={'/register'}>
                <button className='btn btn-danger btn-lg' id='review-login-buttons'>Register</button>
              </Link>
            </div>
          </div>
        }
        <div className='review-display-container'>
          <h3 className='community-reviews mb-3'>Community Reviews:</h3>
          <div className='review-display' >
            {location ? location.reviews.map(rev => {
              const { _id } = rev
              return (
                <div className='individual-review' key={_id}>
                  <h4 id='rev-name'>{rev.owner.username}</h4>
                  <span className='rating'> {rev.rating}&#9733;</span>
                  <p>{rev.text}</p>
                  <hr></hr>
                </div>
              )
            })
              :
              <></>
            }
          </div>
        </div>
      </div>
    </Col >
  )
}

export default ReviewInput
