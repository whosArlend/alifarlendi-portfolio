import SectionWrapper from "./SectionWrapper"
import { aboutContent } from "../data/content"

export default function About() {
  return (
    <SectionWrapper id="about">
      <h2 className="text-xs font-semibold uppercase tracking-widest text-gray-500">
        {aboutContent.heading}
      </h2>

      <div className="mt-8 grid gap-8 md:grid-cols-[1fr_2fr]">
        {/* Left column — decorative block */}
        <div className="hidden md:block" aria-hidden="true">
          <div className="aspect-square max-w-[160px] border border-black" />
        </div>

        {/* Right column — bio text */}
        <div className="space-y-4 text-base leading-relaxed text-black md:text-lg">
          {aboutContent.paragraphs.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}
