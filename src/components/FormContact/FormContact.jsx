import { useState } from "react"
import "./FormContact.scss"
import { useTranslation } from "react-i18next"

export default function FormContact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call with a timeout
    setTimeout(() => {
      console.log("Form submitted:", formData)
      setIsSubmitting(false)
      setIsSubmitted(true)

      // Reset form after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false)
        setFormData({
          name: "",
          email: "",
          message: "",
        })
      }, 3000)
    }, 1000)
  }

  const [t] = useTranslation("global")

  return (
    <div className="contact-form-container">
      <h1>{t("home.contactForm.title")}</h1>
      <p className="subtitle2">{t("home.contactForm.subTitle")}</p>
      {isSubmitted ? (
        <div className="success-message">
          <div className="success-icon">✓</div>
          <h3>{t("home.contactForm.endTitle")}</h3>
          <p>{t("home.contactForm.endSubtitle")}</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="name">{t("home.contactForm.name")}</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder={t("home.contactForm.namePlace")}
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">{t("home.contactForm.email")}</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="jane.smith@gmail.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="message">{t("home.contactForm.message")}</label>
            <textarea
              id="message"
              name="message"
              placeholder={t("home.contactForm.messagePlace")}
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className={`submit-button ${isSubmitting ? "submitting" : ""}`} disabled={isSubmitting}>
            {isSubmitting ? t("home.contactForm.sending") : t("home.contactForm.submit")}
          </button>
        </form>
      )}
    </div>
  )
}

