import { useState } from "react"
import "./FormContact.scss"
import { useTranslation } from "react-i18next";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "",
  })
  const [submitted, setSubmitted] = useState(false)

  console.log(submitted);
  console.log(formData);
  
  const formatPhoneNumber = (value) => {
    const phoneNumber = value.replace(/\D/g, "")

    if (phoneNumber.length <= 3) {
      return phoneNumber
    } else if (phoneNumber.length <= 5) {
      return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3)}`
    } else if (phoneNumber.length <= 8) {
      return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3, 5)}-${phoneNumber.slice(5)}`
    } else if (phoneNumber.length <= 10) {
      return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3, 5)}-${phoneNumber.slice(5, 8)}-${phoneNumber.slice(8)}`
    } else {
      return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3, 5)}-${phoneNumber.slice(5, 8)}-${phoneNumber.slice(8, 10)}-${phoneNumber.slice(10, 12)}`
    }
  }


  const handlePhoneChange = (e) => {
    const formattedPhone = formatPhoneNumber(e.target.value)
    setFormData({
      ...formData,
      phone: formattedPhone,
    })
  }

  const handleNameChange = (e) => {
    setFormData({
      ...formData,
      name: e.target.value,
    })
  }

  const handleServiceChange = (e) => {
    setFormData({
      ...formData,
      service: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    setSubmitted(true)

    setTimeout(() => {
      setFormData({
        name: "",
        phone: "",
        service: "",
      })
      setSubmitted(false)
    }, 3000)
  }

  const [t] = useTranslation("global")
  return (
    <div className="form-container">
      <div className="form-card">
        <div className="form-content">
          <div className="form-header">
            <h2>{t("home.contactForm.title")}</h2>
            <p>{t("home.contactForm.subTitle")}</p>
          </div>

          {submitted ? (
            <div className="success-message">
              <div className="success-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3>{t("home.contactForm.endTitle")}</h3>
              <p>{t("home.contactForm.endSubtitle")}</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">{t("home.contactForm.name")}</label>
                <input id="name" value={formData.name} onChange={handleNameChange} required placeholder={t("home.contactForm.namePlace")} />
              </div>

              <div className="form-group">
                <label htmlFor="phone">{t("home.contactForm.phone")}</label>
                <input
                  id="phone"
                  value={formData.phone}
                  onChange={handlePhoneChange}
                  required
                  placeholder="(998) XXX-XX-XX"
                />
              </div>

              <div className="form-group">
                <label htmlFor="service">{t("home.contactForm.service")}</label>
                <select id="service" value={formData.service} onChange={handleServiceChange} required>
                  <option value="" disabled>
                  {t("home.contactForm.servicePlace")}
                  </option>
                  <option value="logo">Logo Design</option>
                  <option value="smm">SMM Poster Design</option>
                  <option value="branding">Branding Kit</option>
                  <option value="uiux">UI/UX Design</option>
                </select>
              </div>

              <button type="submit" className="submit-button">
              {t("home.contactForm.submit")}
              </button>
            </form>
          )}
        </div>

        <div className="glow-effect glow-1"></div>
        <div className="glow-effect glow-2"></div>
      </div>
    </div>
  )
}

