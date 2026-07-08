import { useState } from "react"
import { Mail, Send } from "lucide-react"
import SectionWrapper from "./SectionWrapper"
import { IconGitHub, IconLinkedIn } from "./Icons"
import { siteConfig } from "../data/content"

export default function Contact() {
  const [formState, setFormState] = useState({ name: "", email: "", message: "" })

  const handleChange = (e) => {
    setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  // Opens the user's email client with pre-filled content — no backend needed
  const handleSubmit = (e) => {
    e.preventDefault()
    const subject = encodeURIComponent(`Portfolio Contact from ${formState.name}`)
    const body = encodeURIComponent(
      `Name: ${formState.name}\nEmail: ${formState.email}\n\n${formState.message}`,
    )
    window.location.href = `mailto:${siteConfig.email}?subject=${subject}&body=${body}`
  }

  const socialLinks = [
    { icon: Mail, label: "Email", href: `mailto:${siteConfig.email}` },
    { icon: IconGitHub, label: "GitHub", href: siteConfig.github },
    { icon: IconLinkedIn, label: "LinkedIn", href: siteConfig.linkedin },
  ]

  return (
    <SectionWrapper id="contact" className="bg-gray-100">
      <h2 className="text-xs font-semibold uppercase tracking-widest text-gray-500">
        Contact
      </h2>

      <div className="mt-10 grid gap-12 md:grid-cols-2">
        {/* Social links */}
        <div>
          <p className="text-base leading-relaxed text-black">
            [EDIT: Add a short message — e.g. Open to internships, collaborations, or security research.]
          </p>

          <ul className="mt-8 flex flex-col gap-4">
            {socialLinks.map(({ icon: Icon, label, href }) => (
              <li key={label}>
                <a
                  href={href}
                  target={label !== "Email" ? "_blank" : undefined}
                  rel={label !== "Email" ? "noopener noreferrer" : undefined}
                  className="inline-flex items-center gap-3 text-sm text-black link-underline"
                >
                  <Icon size={18} />
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact form — submits via mailto */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="mb-1.5 block text-xs font-medium text-gray-500">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formState.name}
              onChange={handleChange}
              placeholder="[EDIT: placeholder]"
              className="w-full border border-gray-300 bg-white px-4 py-2.5 text-sm text-black placeholder:text-gray-300 focus:border-black focus:outline-none"
            />
          </div>

          <div>
            <label htmlFor="email" className="mb-1.5 block text-xs font-medium text-gray-500">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formState.email}
              onChange={handleChange}
              placeholder="[EDIT: your.email@example.com]"
              className="w-full border border-gray-300 bg-white px-4 py-2.5 text-sm text-black placeholder:text-gray-300 focus:border-black focus:outline-none"
            />
          </div>

          <div>
            <label htmlFor="message" className="mb-1.5 block text-xs font-medium text-gray-500">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={4}
              value={formState.message}
              onChange={handleChange}
              placeholder="[EDIT: Your message...]"
              className="w-full resize-none border border-gray-300 bg-white px-4 py-2.5 text-sm text-black placeholder:text-gray-300 focus:border-black focus:outline-none"
            />
          </div>

          <button
            type="submit"
            className="inline-flex items-center gap-2 border border-black bg-black px-6 py-3 text-sm font-medium text-white transition-opacity hover:opacity-80"
          >
            <Send size={14} />
            Send Message
          </button>
        </form>
      </div>
    </SectionWrapper>
  )
}
