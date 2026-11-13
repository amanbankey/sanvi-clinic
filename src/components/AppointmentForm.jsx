import { useState } from "react"
import { CheckCircle2, Send } from "lucide-react"
import { siteConfig } from "../constants/siteConfig"
import { whatsappLink } from "../utils/links"

const initialState = {
  name: "",
  mobile: "",
  email: "",
  date: "",
  time: "",
  service: "",
  message: "",
}

function validate(values) {
  const errors = {}
  if (!values.name.trim()) errors.name = "Please enter your full name."
  if (!/^[6-9]\d{9}$/.test(values.mobile.trim()))
    errors.mobile = "Please enter a valid 10-digit mobile number."
  if (values.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim()))
    errors.email = "Please enter a valid email address."
  if (!values.date) {
    errors.date = "Please select a preferred date."
  } else if (new Date(values.date) < new Date(new Date().toDateString())) {
    errors.date = "Please select a date from today onward."
  }
  if (!values.service) errors.service = "Please select a service or consultation type."
  return errors
}

export default function AppointmentForm() {
  const [values, setValues] = useState(initialState)
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  function handleChange(event) {
    const { name, value } = event.target
    setValues((prev) => ({ ...prev, [name]: value }))
  }

  function handleSubmit(event) {
    event.preventDefault()
    const validationErrors = validate(values)
    setErrors(validationErrors)
    if (Object.keys(validationErrors).length > 0) return
    setSubmitted(true)
  }

  function buildWhatsAppMessage() {
    const lines = [
      `Hello, I would like to request an appointment at ${siteConfig.clinicName}.`,
      `Name: ${values.name}`,
      `Mobile: ${values.mobile}`,
      values.email ? `Email: ${values.email}` : null,
      `Preferred Date: ${values.date}`,
      values.time ? `Preferred Time: ${values.time}` : null,
      `Service: ${values.service}`,
      values.message ? `Message: ${values.message}` : null,
    ].filter(Boolean)
    return lines.join("\n")
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center gap-4 rounded-2xl border border-border bg-soft-mint/50 px-6 py-12 text-center">
        <CheckCircle2 size={44} className="text-accent" />
        <h3 className="font-heading text-xl font-semibold text-primary">
          Enquiry Details Ready
        </h3>
        <p className="max-w-md text-sm text-muted-text leading-relaxed">
          This does not confirm an appointment automatically. Please send these details
          to our clinic on WhatsApp or call us directly, and our team will confirm your
          consultation time.
        </p>
        <div className="flex flex-wrap justify-center gap-3 mt-2">
          <a
            href={whatsappLink(buildWhatsAppMessage())}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-6 py-3 font-semibold text-white hover:bg-[#1ebe5a] transition-colors"
          >
            Send via WhatsApp
          </a>
          <button
            type="button"
            onClick={() => {
              setValues(initialState)
              setSubmitted(false)
            }}
            className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 font-semibold text-primary hover:border-accent transition-colors"
          >
            Submit Another Enquiry
          </button>
        </div>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <Field label="Full Name" htmlFor="name" error={errors.name}>
          <input
            id="name"
            name="name"
            type="text"
            value={values.name}
            onChange={handleChange}
            autoComplete="name"
            className={inputClass(errors.name)}
            placeholder="Your full name"
          />
        </Field>

        <Field label="Mobile Number" htmlFor="mobile" error={errors.mobile}>
          <input
            id="mobile"
            name="mobile"
            type="tel"
            inputMode="numeric"
            value={values.mobile}
            onChange={handleChange}
            autoComplete="tel"
            className={inputClass(errors.mobile)}
            placeholder="10-digit mobile number"
          />
        </Field>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <Field label="Email Address (optional)" htmlFor="email" error={errors.email}>
          <input
            id="email"
            name="email"
            type="email"
            value={values.email}
            onChange={handleChange}
            autoComplete="email"
            className={inputClass(errors.email)}
            placeholder="you@example.com"
          />
        </Field>

        <Field label="Service / Consultation Type" htmlFor="service" error={errors.service}>
          <select
            id="service"
            name="service"
            value={values.service}
            onChange={handleChange}
            className={inputClass(errors.service)}
          >
            <option value="">Select a service</option>
            {siteConfig.appointment.serviceOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </Field>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <Field label="Preferred Date" htmlFor="date" error={errors.date}>
          <input
            id="date"
            name="date"
            type="date"
            value={values.date}
            onChange={handleChange}
            min={new Date().toISOString().split("T")[0]}
            className={inputClass(errors.date)}
          />
        </Field>

        <Field label="Preferred Time (optional)" htmlFor="time">
          <input
            id="time"
            name="time"
            type="time"
            value={values.time}
            onChange={handleChange}
            className={inputClass()}
          />
        </Field>
      </div>

      <Field label="Message (optional)" htmlFor="message">
        <textarea
          id="message"
          name="message"
          rows={4}
          value={values.message}
          onChange={handleChange}
          className={inputClass()}
          placeholder="Tell us briefly what you'd like to discuss"
        />
      </Field>

      <button
        type="submit"
        className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 font-semibold text-white hover:bg-secondary transition-colors"
      >
        <Send size={18} />
        Request an Appointment
      </button>
      <p className="text-xs text-muted-text text-center">
        Submitting this form does not confirm your appointment. Our team will
        contact you to confirm availability.
      </p>
    </form>
  )
}

function Field({ label, htmlFor, error, children }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={htmlFor} className="text-sm font-medium text-dark-text">
        {label}
      </label>
      {children}
      {error && <span className="text-xs text-red-600">{error}</span>}
    </div>
  )
}

function inputClass(error) {
  return `w-full rounded-xl border px-4 py-3 text-sm text-dark-text bg-white outline-none transition-colors focus:border-accent ${
    error ? "border-red-400" : "border-border"
  }`
}
