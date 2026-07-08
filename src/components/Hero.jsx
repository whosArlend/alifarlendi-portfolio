import { ArrowDown } from "lucide-react"
import { siteConfig } from "../data/content"

export default function Hero() {
  return (
    <section
      id="hero"
      className="flex min-h-screen flex-col justify-center px-6 pt-24 pb-16 md:px-12 lg:px-24"
    >
      <div className="mx-auto max-w-5xl">
        {/* Decorative geometric accent — pure CSS, no images */}
        <div className="mb-8 h-px w-12 bg-black" aria-hidden="true" />

        <h1 className="text-4xl font-bold tracking-tight text-black md:text-6xl lg:text-7xl">
          {siteConfig.name}
        </h1>

        <p className="mt-4 text-lg font-medium text-gray-500 md:text-xl">
          {siteConfig.tagline}
        </p>

        <p className="mt-6 max-w-xl text-base leading-relaxed text-black md:text-lg">
          {siteConfig.intro}
        </p>

        {/* CTA buttons */}
        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="#projects"
            className="inline-flex items-center border border-black bg-black px-6 py-3 text-sm font-medium text-white transition-opacity hover:opacity-80"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="inline-flex items-center border border-black px-6 py-3 text-sm font-medium text-black transition-colors hover:bg-gray-100"
          >
            Contact
          </a>
        </div>

        {/* Scroll hint */}
        <a
          href="#about"
          aria-label="Scroll to about section"
          className="mt-20 inline-flex items-center gap-2 text-sm text-gray-500 link-underline"
        >
          <ArrowDown size={14} />
          Scroll
        </a>
      </div>
    </section>
  )
}
