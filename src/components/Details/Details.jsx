import { MapPin, Mail, Instagram, Dribbble, Linkedin } from "lucide-react"
import "./Details.scss"

export default function Details() {
  return (
    <div className="contact-details">
      <h2 className="contact-details__title">Contact details</h2>

      <div className="contact-item">
        <div className="contact-item__icon">
          <MapPin size={20} />
        </div>
        <div className="contact-item__content">
          <div className="contact-item__label">Address</div>
          <div className="contact-item__value">New York, NY</div>
        </div>
      </div>

      <div className="contact-item">
        <div className="contact-item__icon">
          <Mail size={20} />
        </div>
        <div className="contact-item__content">
          <div className="contact-item__label">Email</div>
          <div className="contact-item__value">contact@johndoe.com</div>
        </div>
      </div>

      <div className="contact-item">
        <div className="contact-item__icon">
          <Instagram size={20} />
        </div>
        <div className="contact-item__content">
          <div className="contact-item__label">Instagram</div>
          <div className="contact-item__value">@johndoe</div>
        </div>
      </div>

      <div className="contact-item">
        <div className="contact-item__icon">
          <Dribbble size={20} />
        </div>
        <div className="contact-item__content">
          <div className="contact-item__label">Dribbble</div>
          <div className="contact-item__value">@johndoe</div>
        </div>
      </div>

      <div className="contact-item">
        <div className="contact-item__icon">
          <Linkedin size={20} />
        </div>
        <div className="contact-item__content">
          <div className="contact-item__label">LinkedIn</div>
          <div className="contact-item__value">@johndoe</div>
        </div>
      </div>
    </div>
  )
}

