import SectionWrapper from "./SectionWrapper"
import { aboutContent } from "../data/content"
import profileImage from "../assets/images/profile.png"

export default function About() {
  return (
    <SectionWrapper id="about">
      <div className="grid gap-8 md:grid-cols-[1fr_2fr]">
        {/* Left Column */}
        <div className="pt-3">
          <h2 className="mb-8 text-3xl font-bold tracking-tight text-black">
            {aboutContent.heading}
          </h2>

          <img
            src={profileImage}
            alt="Alif Arlendi"
            className="w-64 aspect-square object-cover rounded-lg border border-black"
          />
        </div>

        {/* Right Column */}
        <div className="mt-14 space-y-4 text-base leading-relaxed text-black text-justify md:text-lg">
          {aboutContent.paragraphs.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}