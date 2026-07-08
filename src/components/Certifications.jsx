import SectionWrapper from "./SectionWrapper"
import { certificationsContent } from "../data/content"

export default function Certifications() {
  return (
    <SectionWrapper id="certifications">
      <h2 className="text-xs font-semibold uppercase tracking-widest text-gray-500">
        {certificationsContent.heading}
      </h2>

      <ul className="mt-10 divide-y divide-gray-300 border-y border-gray-300">
        {certificationsContent.items.map((cert, index) => (
          <li
            key={index}
            className="flex flex-col gap-1 py-5 sm:flex-row sm:items-center sm:justify-between"
          >
            <div>
              <h3 className="text-sm font-semibold text-black">{cert.title}</h3>
              <p className="text-xs text-gray-500">{cert.issuer}</p>
            </div>
            <span className="text-xs text-gray-500">{cert.year}</span>
          </li>
        ))}
      </ul>
    </SectionWrapper>
  )
}
