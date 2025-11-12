import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import emailjs from '@emailjs/browser'
import SplitText from './components/SplitText'
import Threads from './components/Threads'
import './Contact.css'

function Contact() {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    phone: '',
    company: '',
    message: ''
  })
  const [status, setStatus] = useState('')

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setStatus('sending')
    
    // EmailJS configuration - YOU NEED TO SET THESE UP!
    const serviceId = 'service_9njthqa'  // Replace with your EmailJS Service ID
    const templateId = 'template_058m2yr'  // Replace with your EmailJS Template ID
    const publicKey = 'fuvc0IzbwzLghkjNy'  // Replace with your EmailJS Public Key
    
    const templateParams = {
      from_name: `${formData.firstName} ${formData.lastName}`,
      from_email: formData.email,
      phone: formData.phone,
      company: formData.company,
      message: formData.message,
      to_email: 'harshmonga7@gmail.com'
    }
    
    emailjs.send(serviceId, templateId, templateParams, publicKey)
      .then(() => {
        setStatus('success')
        setFormData({
          email: '',
          firstName: '',
          lastName: '',
          phone: '',
          company: '',
          message: ''
        })
        setTimeout(() => setStatus(''), 3000)
      })
      .catch((error) => {
        console.error('EmailJS Error:', error)
        setStatus('error')
        setTimeout(() => setStatus(''), 3000)
      })
  }

  return (
    <div className="contact-page">
      {/* Threads Background */}
      <div className="threads-background">
        <Threads />
      </div>

      <button className="back-button" onClick={() => navigate('/')}>
        ← Back to Home
      </button>
      
      <div className="contact-container">
        <div className="contact-form-wrapper">
          <SplitText 
            text="Send me a message!" 
            tag="h1"
            delay={50}
            duration={0.8}
            splitType="chars"
            from={{ opacity: 0, y: 50 }}
            to={{ opacity: 1, y: 0 }}
          />
          <br />
          <SplitText 
            text="harshmonga7@gmail.com" 
            className="contact-email"
            tag="p"
            delay={30}
            duration={0.6}
            splitType="chars"
            from={{ opacity: 0, y: 30 }}
            to={{ opacity: 1, y: 0 }}
          />
          
          <form onSubmit={handleSubmit}>
            <div className="form-group full-width">
              <label>Email address</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>First name*</label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label>Last name*</label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Phone number</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label>Company</label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="form-group full-width">
              <label>Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="6"
                required
              />
            </div>

            <button type="submit" className="submit-button" disabled={status === 'sending'}>
              {status === 'sending' ? 'Sending...' : 'Submit'}
            </button>
            
            {status === 'success' && (
              <p className="status-message success">Message sent successfully! ✓</p>
            )}
            {status === 'error' && (
              <p className="status-message error">Failed to send message. Please try again.</p>
            )}
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact

